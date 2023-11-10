import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "./MapCard.css";

const MapCard = ({ mode,id}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = -0.017263561462892357;
  const lat = 51.449023519107726;

  const API_KEY = "zpjtJyYSOlXkY9cWADR4";

  useEffect(() => {
    // Construct the dynamic map style URL based on the mode and API key

    const mobileDevice = getComputedStyle(document.body).getPropertyValue(
      `--mobile-device`
    );

    const dynamicMapStyleURL = `https://api.maptiler.com/maps/${mode}/style.json?key=${API_KEY}`;
    // Initialize the map
    map.current = new maplibregl.Map({
      
      container: mapContainer.current,
      style: dynamicMapStyleURL, // Use the dynamic URL
      center: [lng, lat],
      zoom: 10,
      minZoom:1 ,
      maxZoom:15
    });
    map.current.dragRotate.disable();
    map.current.touchPitch.disable();
    if (mobileDevice === '1') {
      map.current.dragPan.disable();
      map.current.scrollZoom.disable();
      map.current.doubleClickZoom.disable();
      map.current.touchZoomRotate.disable();
    }
    map.current.on("load", function () {
      map.current.loadImage("/images/memeoji.png", function (error, image) {
        if (error) throw error;
        map.current.addImage("memeoji", image);
        map.current.addSource("point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-0.017263561462892357, 51.449023519107726],
                },
              },
            ],
          },
        });
        map.current.addLayer({
          id: "points",
          type: "symbol",
          source: "point",
          layout: {
            "icon-image": "memeoji",
            "icon-size": 0.2,
          },
        });
      });
    });
    // Clean up the map instance when the component unmounts
    return () => map.current.remove();
   
  }, [API_KEY, lat, lng, mode]);
  return (
    <div className="card card-map" id={id} >
      <div ref={mapContainer} id="map" ></div>
    </div>
  );
};

export default MapCard;

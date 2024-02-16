import React from 'react';
import AboutProjectLayout from "./AboutProjectLayout";
import "./stacked.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./PagesMediaQuries.css"
import "./forAllPages.css"
import useGoBack from './page-components/useGoBack';
// Define the ImageSwiper component outside of the Stacked component
const ImageSwiper = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // Set autoplay to false to disable automatic swiping
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

   
    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

const Stacked = () => {

    const goBack = useGoBack(); // Use the custom hook to get the goBack function
// takes user to pervious page 
// const navigate = useNavigate(); // useNavigate hook for navigation
// const goBack = () => {
//   navigate(-1); // Go back to the previous page
// };

    // Define your images array
    const images = [
        // Add your image URLs here
        "/images/stacked/stackedimg1.png",
        "/images/stacked/stackedimg2.png",
        "/images/stacked/stackedimg3.png",
        "/images/stacked/stackedimg4.png",
        "/images/stacked/stackedimg5.png",
    ];

    return (
        <div>
            <button className="go-back-btn" onClick={goBack}> <img className="x-ic-size" src="/images/x-icon.svg" alt="cross" /></button>
            <div className="proj-body">
            <AboutProjectLayout
                projectTitle={"Stacked"}
                projectSubTitle={"A desktop application designed for efficient inventory management tailored to resellers."}
                aboutText={"Tired of managing my sneaker reselling inventory with Excel and Notion, I found myself craving a more visually appealing and user-friendly solution. I'm someone who values user interface (UI) design, and staring at bland spreadsheets just wasn't cutting it for me. Plus, the tedious task of setting up formulas and organizing data in spreadsheets was a major pain point. So, I made a decision to develop a piece of software that not only looks great but also offers a much smoother workflow from stock management to the sold list. As someone who values data, having all the essential data points any reseller needs conveniently located on one page feels incredibly satisfying to use."}
                addClass="hidevisit"
                extraText="The next steps are to  implement user authentication and develop a captivating landing page for initial user acquisition."
            />
            {/* Render the ImageSwiper component passing the images array as prop */}
            <div className="stacked-img-grid-ctn">
            <ImageSwiper images={images} />
            </div>
            </div>
        </div>
    );
};

export default Stacked;
import React, { useEffect, useState } from "react";
import "./CryptoCard.css";

const CryptoCard = ({ id }) => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cpancakeswap-token%2Cethereum&vs_currencies=usd&include_24hr_change=true&sparkline=true"
        );
        const data = await response.json();
        const updatedCoinData = [
          {
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
            price: data.bitcoin.usd.toLocaleString(),
            change: data.bitcoin.usd_24h_change.toFixed(2),
          },
          {
            id: "ethereum",
            name: "Ethereum",
            symbol: "ETH",
            logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
            price: data.ethereum.usd.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            }),
            change: data.ethereum.usd_24h_change.toFixed(2),
          },
          {
            id: "pancakeswap-token",
            name: "PancakeSwap",
            symbol: "CAKE",
            logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png",
            price: data["pancakeswap-token"].usd.toFixed(2),
            change: data["pancakeswap-token"].usd_24h_change.toFixed(2),
          },
        ];
        setCoinData(updatedCoinData);
        displayChange(updatedCoinData);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };
    fetchCoinData();
  }, []);

  useEffect(() => {
    displayChange(coinData);
  }, [coinData]);
  // This useEffect hook will re-display the 24-hour change on component updates

  function displayChange(CoinDataArr) {
    CoinDataArr.forEach((coin) => {
      const element = document.getElementById(`${coin.id}-24h-change`);
      if (element) {
        element.textContent = `${coin.change}%`;
        if (parseFloat(coin.change) >= 0) {
          element.classList.add("positive-change");
          element.classList.remove("negative-change");
        } else {
          element.classList.add("negative-change");
          element.classList.remove("positive-change");
        }
      }
    });
  }

  return (
    <div className="card card-crypto" id={id}>
      <h2 className="card-crypto-title">Crypto</h2>
      <div className="crypto-widget-container">
        {coinData.map((coin) => (
          <div className="crypto-container">
            <div className="crypto-header">
              <div className="content-logo crypto-logo">
                <img src={coin.logo} alt={coin.name + " Logo"} />
              </div>
              <div className="crypto-title">
                <p className="crypto-name">{coin.name}</p>
                <p className="tickername">{coin.symbol}</p>
              </div>
              <div className="crypto-price">
                <h2 className="price">${coin.price}</h2>
                <span
                  className="coin-price-24-performance "
                  id={`${coin.id}-24h-change`}
                ></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCard;

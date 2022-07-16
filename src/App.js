import "./App.css";
import React from "react";

import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=12").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
    console.log("it worked");
  }, []);
  return (
    <div className="App">
      <div className="cryptoHeader">
        <h1 className="brand">AVAX</h1>
      </div>
      <div className="cryptoDisplay">
        {listOfCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price.toFixed(3)}
              symbol={coin.symbol}
            />
          );
        })}
      </div>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </div>
  );
}

export default App;

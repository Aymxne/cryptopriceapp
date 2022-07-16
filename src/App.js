import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=100"
    ).then((response) => {
      setListOfCoins(response.data.coins);
    });
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
    </div>
  );
}

export default App;

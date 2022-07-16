import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1 className="coin-name">Name: {name} </h1>
      <img alt="coint img" src={icon} />
      <h3 className="coin-price">Price: {price}</h3>
      <h4 className="coin-symbol">Symbol: {symbol} </h4>
    </div>
  );
}

export default Coin;

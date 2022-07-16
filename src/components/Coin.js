import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1 className="coin-name">{name} </h1>
      <img alt="coint img" src={icon} />
      <h3 className="coin-price">{price}</h3>
      <h4 className="coin-symbol">{symbol} </h4>
    </div>
  );
}

export default Coin;

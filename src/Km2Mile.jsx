import React, { useState } from "react";
import Buttons from "./Buttons";

function Km2Mile() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (event) => setAmount(event.target.value);
  const onReset = () => setAmount(0);
  const onFlip = () => setFlipped(!flipped);

  return (
    <div>
      <h3>Kilometers to Miles</h3>
      {flipped ? (
        <input
          type="number"
          value={amount}
          onChange={onChange}
          placeholder="Miles"
        />
      ) : (
        <input
          type="number"
          value={amount}
          onChange={onChange}
          placeholder="Kilometers"
        />
      )}
      <h4>{flipped ? `${amount * 1.609} Km` : `${amount / 1.609} Miles`}</h4>
      <Buttons onReset={onReset} onFlip={onFlip} />
    </div>
  );
}

export default Km2Mile;

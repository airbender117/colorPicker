import React, { useState } from "react";
import "./styles.css";

function ColorPicker() {
  const [color, setColor] = useState("#0300C7");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1> Color Picker</h1>
      <label> Select a Color: </label>
      <input type="color" value={color} onChange={handleColorChange} />
      <div>
        <p>Selected Color: {color} </p>
        <p className="color-display" style={{ backgroundColor: color }}></p>
      </div>
    </div>
  );
}

export default ColorPicker;

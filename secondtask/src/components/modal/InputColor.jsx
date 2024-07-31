import React from "react";

  const ColorInput = ({ color, id, selectedColor, onColorSelect }) => {
    const optionId = `option${id}`;
    const checked = selectedColor === color;
  
    const handleRadioClick = () => {
      onColorSelect(color);
    };
  
    return (
      <div
        className={`radio-wrapper ${checked ? "checked" : ""}`}
        onClick={handleRadioClick}
        style={{ "--radio-border-color": color }}
      >
        <input type="radio" id={optionId} name="customRadio" value={color} checked={checked} readOnly />
        <div className="custom-radio" />
      </div>
    );
  };

export default ColorInput;
    
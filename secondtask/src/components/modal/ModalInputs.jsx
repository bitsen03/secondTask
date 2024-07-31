import React from "react";
import ColorInput from "./InputColor";

const ModalInputs = ({title, description, setTitle, setDescription, colors, selectedColor, handleColorSelect}) => {
    return (
        <div className="inputs-modal">
            <textarea className="inputModal titleInp" required value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Название Задачи"/>
            <textarea className="inputModal descriptionInp" required value={description} type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Описание"/>
            <div className="colors-radio">
                {colors.map((color, index) =><ColorInput 
                    color={color} 
                    key={index} 
                    id={index} 
                    selectedColor={selectedColor} 
                    onColorSelect={handleColorSelect}>
                </ColorInput>) }
            </div>
        </div>
    )
}

export default ModalInputs;
import React, { useState } from "react";
import Button from "../Button/Button";

function Counter() {
    const [value, setValue] = useState(0);

    const handleIncrement = (incrementValue) => {
    const newValue = value + parseInt(incrementValue, 10);
    setValue(newValue);
};

    const handleDecrement = (decrementValue) => {
    const newValue = value - parseInt(decrementValue, 10);
    setValue(newValue);
};
const doubleDecrement = (decrementValue) => {
    const newValue = value - parseInt(decrementValue * 2, 10);
    setValue(newValue);
    }

    const doubleIncrement = (incrementValue) => {
    const newValue = value + parseInt(incrementValue * 2, 10);
    setValue(newValue);
    }


    return (
        <div>
            <h1>Please Add or Subtract</h1>
            <div className="board">
                <div id="value" style={{ color: value < 0 ? "red" : "black" }}>
                    {value}
            </div>
                <div className="container">
                    <Button
                        action={() =>
                            handleIncrement(document.getElementById("number").value)
            }
                symbol="+"
            />
                    <Button 
                        action={() =>
                            doubleIncrement(document.getElementById("number").value)
            }
                symbol="2x^"
            />
            <div className="value-form">
                <input type="number" id="number" defaultValue="0" />
            </div>
            <Button
                action={() =>
                    handleDecrement(document.getElementById("number").value)
            }
                symbol="-"
            />
            <Button 
                action={() =>
                    doubleDecrement(document.getElementById("number").value)
    }
        symbol="2xv"
    />
                </div>
                
            </div>
        </div>
    );
}

export default Counter;
import React, { useState } from "react";
import Button from "../Button/Button";
import './Counter.css'

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

    const handleReset = () => {
    setValue(0)
    }

    const doubleIncrement = (incrementValue) => {
    const newValue = value + parseInt(incrementValue * 2, 10);
    setValue(newValue);
    }

    const plusHundred = () => {
    const newValue = value + 100;
    setValue(newValue)
    }


    // const [prevNum , setPrevNum] = useState(value)
    
    // const pastNumber = (value)


    return (
        <div className="bigContainer">
            <h1>Please 
                <span style={{ color: value > 200 ? "green" : "white" }}> Add </span>
                or 
                <span style={{ color: value < -200 ? "red" : "white" }}> Subtract</span></h1>
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
                <hr />
                <div>
                    <Button action={() => 
                        plusHundred(document.getElementById("number").value)
    }
        symbol="100"
    />
    <Button action={() => 
                        handleReset(document.getElementById("number").value)
    }
        symbol="Reset"
    />
    
                </div>
            </div>
        </div>
    );
}

export default Counter;
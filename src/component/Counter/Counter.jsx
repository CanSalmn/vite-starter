import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const DecremetNumber = () => {
        setNumber(number - 1);
    };

    const IncrementNumber = () => {
        setNumber(number + 1);
    };
    const resetNumber = () => {
        setNumber(0);
    };

    return (
        <div className={{}}>
            <h1 className={{ fontSize: "40px" }}>{number}</h1>

            <div>
                <button className="decrement-button" onClick={DecremetNumber}>Decrement</button>
                <button className="reset-button" onClick={resetNumber}>Reset</button>
                <button className="increment-button" onClick={IncrementNumber}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;

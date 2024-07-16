import { useState } from "react";
import "./Ex01.css";

export function Ex01() {

    const [counter, setCounter] = useState(0);

    return (

        <div className="container-one">
            <h2>Exercise 1</h2>
            <h3>Make it Counter</h3>
                <div>
                <button onClick={() => setCounter(prevState => prevState - 1)} className="btn-counter"> - </button>
                <span>{counter}</span>
                <button onClick={() => setCounter(prevState => prevState + 1)} className="btn-counter"> + </button>
                </div>
        </div>
    )
}
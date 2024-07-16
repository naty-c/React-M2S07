import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import "./Ex05.css";

export function Ex05() {

    const [text, setText] = useState("");
    const [visible, setVisible] = useState(false);

    return (
        <div className="container-five">
            <h2>Exercise 5</h2>
            <h3>Controlled Input</h3>
            <div className="input-container">
                <input 
                    placeholder="Type something..." 
                    type={visible ? "text" : "password"} className="form-control-input" 
                    value={text}
                    onChange={(event) => setText(event.target.value)} />     

                <button className="eye-button" onClick={() => setVisible(prevState => !prevState)}>{visible ? <FaEyeSlash className="icon" /> : <FaEye className="icon" />}</button>
            </div>
            <span className="display-text">{text}</span>       

        </div>
    )
}
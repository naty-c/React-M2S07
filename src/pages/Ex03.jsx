import { useState } from "react";
import "./Ex03.css";

export function Ex03() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        if(text) {
            setList(previousList => {
                return [... previousList, text]
            });
            setText(''); // Clean the field before adding an item to the list
        }
    }

    return (
        <div className="container-three">
            <h2>Exercise 3</h2>
            <h3>Playing with Items</h3>
                <form className="form-list" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={text} // Define the value as the actual state
                        onChange={event => setText(event.target.value)} />
                    <button className="btn-add" type="submit">Add</button>
                </form>

                <p>
                    <strong>List:</strong>
                </p>
                
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                
        </div>
    )
}
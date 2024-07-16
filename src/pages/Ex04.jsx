import { useEffect, useState } from "react";
import "./Ex04.css";

export function Ex04() {

    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        age: ''
    });
    const [message, setMessage] = useState(null);

    useEffect(() => {

        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    function handleSubmit(event) {
        event.preventDefault();

        const isError = Object.values(formdata).reduce((total, item) => { // Map and return an array with the values
            if (!item) total += 1;
            return total;
        }, 0);

        if (isError > 0) {
            setMessage('Fill in all the fields!');
        } else {
            setMessage(null);
            alert('Form submitted successfully!');
        }
    }

    return (
        <div className="container-four">
            <h2>Exercise 4</h2>
            <h3>Validation Form</h3>
                <form className="form-validation" onSubmit={handleSubmit}>

                    <input 
                    placeholder="Name..." 
                    type="text" 
                    className="form-control-val" 
                    value={formdata.name}
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, name: event.target.value}))} />

                    <input 
                    placeholder="Email..." 
                    type="email" 
                    className="form-control-val" 
                    value={formdata.email}
                    onChange={(event) => setFormdata(prevState => ({...prevState, email: event.target.value}))} />

                    <input 
                    placeholder="Age..." 
                    type="number" 
                    className="form-control-val" 
                    value={formdata.age}
                    onChange={(event) => setFormdata(prevState => ({...prevState, age: event.target.value}))} />

                    <button className="btn-register" type="submit">Go</button>
                </form>
            
            <code>
                {message}
            </code>

        </div>
    )
}
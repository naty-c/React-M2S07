import { useEffect, useState } from "react";
import "./Ex02.css";

export function Ex02() {

    const [text, setText] = useState(null);

    async function getData() {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                const title = data.items[0].titulo;
                setText(title)
            } else {
                setText("Ops! No news available.");
            }
        } catch (error) {
            console.log("Error fetching data:", error);
            setText("Error loading news.");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container-two">
            <h2>Exercise 2</h2>
            <h3>Fetching news from IBGE API...</h3>
                <p>{text}</p>         
        </div>
    )
}
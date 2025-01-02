import { useState,useEffect } from "react";
import MainPage from "./Main";

function Data () {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <div><MainPage></MainPage></div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Data
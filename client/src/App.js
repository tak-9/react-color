import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Dot from './dot';

function App() {
    const [colorArr, setColorArr] = useState([]);

    useEffect(() => {
        const url 
        if (process.env.NODE_ENV === "production") {
            url = "/api/color";
        } else { 
            url = "http://localhost:3001/api/color";
        }
        axios.get(url)
        .then((resp) => {
            setColorArr(resp.data.color);
        })
    }
    ,[]);

    return (
        <div className="flex-container">
            {colorArr.map((item, i) => (<Dot key={i} color={colorArr[i]} />))}
        </div>
    );
}

export default App;

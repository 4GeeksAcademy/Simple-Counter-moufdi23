import React from 'react'
import ReactDOM from 'react-dom/client'
import { SecondsCounter } from "./components/SecondsCounter.jsx";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

setInterval(() => {
    counter = counter + 1;
    root.render(
        <React.StrictMode>
            <SecondsCounter seconds={counter} />
        </React.StrictMode>
    );
}, 1000);
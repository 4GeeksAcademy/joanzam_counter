// Importar React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

// Componente SimpleCounter
function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <FontAwesomeIcon icon={faClock} size="2x" />
            </div>
            <div className="six">{props.digitSix}</div>
            <div className="five">{props.digitFive}</div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}

// Lógica del contador
let counter = 0;

setInterval(function () {
    // Extraer las cifras
    const six = Math.floor(counter / 100000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10; // Cifra más significativa
    const three = Math.floor(counter / 100) % 10; // Segunda cifra
    const two = Math.floor(counter / 10) % 10;    // Tercera cifra
    const one = counter % 10;                      // Cifra menos significativa
    counter++;

    // Renderizar el contador
    ReactDOM.createRoot(document.getElementById("app")).render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />
    );
}, 1000);

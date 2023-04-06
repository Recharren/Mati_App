import React from "react";
import "../styles/Suscripcion.css";

function Suscripcion() {
  return (
    <div className="contenedor_suscripcion">
      <img className="listaTarjetas" src={require("../imagenes/lista de tarjetas.jpg")}/>
      <div className="suscribite">
        <div className="sobre y otro cont">
            <div className="sobre"></div>
            <div className="2 textos">
                <h3>Suscribite a las novedades!</h3>
                <p>Te avisaremos de promociones, cursos y novedades relacionadas a la mística!</p>
            </div>
        </div>
        <form>
            <input placeholder="Ingresa tu email..."></input>
            <button>Suscribir</button>
        </form>
      </div>
    </div>
  );
}

export default Suscripcion;

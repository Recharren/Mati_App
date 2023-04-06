import React from "react";
import '../styles/ItemInformacion.css'

function ItemInformacion({imagen,titulo,subtitulo,texto}) {
  return (
    <div className="contenedor_item">
      <img className="item_img" src={require(`../imagenes/`+imagen)} />
      <h3 className="item_titulo">{titulo}</h3>
      <h3 className="item_subtitulo">{subtitulo}</h3>
      <h3 className="item_texto">{texto}</h3>
    </div>
  );
}

export default ItemInformacion;


import React from 'react'
import '../styles/Informacion.css'
import ItemInformacion from './ItemInformacion'

const data = require("../Json/hola.json");

function Informacion() {
  return (
    <div className='contenedor_informacion'>
        {
            data.map((item)=>{
                return(<ItemInformacion 
                    imagen = {item.imagen}
                    titulo = {item.titulo}
                    subtitulo={item.subtitulo}
                    texto={item.texto}
                    />)
            })
        }
    </div>
  )
}

export default Informacion

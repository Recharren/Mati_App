import React from 'react'
import '../styles/ProductoDestacado.css'
import {AiOutlineHeart} from 'react-icons/ai';

function ProductoDestacado() {
  return (
    <div className='producto_destacado'>
        <img src={require('../imagenes/oregano cubo.jpg')} alt='oregano'/>
        <div className='producto_agregar'>
            <button className='producto_botones'>+</button>
            <p>1</p>
            <button className='producto_botones'>-</button>
            <button className='boton_agregar'>Agregar</button>
        </div>
        <div className='producto_descripcion'>
            <h6 className='producto_descripcion_categoria'>Alimentos, Frutos secos</h6>
            <h5 className='producto_descripcion_nombre'>Almendras organicas, peladas organicas, peladas</h5>
            <h4 className='producto_descripcion_precio'>$ 2537</h4>
            <button className='boton_favorito'><AiOutlineHeart/></button>
            
        </div>
      
    </div>
  )
}

export default ProductoDestacado

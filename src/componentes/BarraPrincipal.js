import React from 'react'
import '../styles/BarraPrincipal.css'
import { HiOutlineSearch } from 'react-icons/hi';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';


function BarraPrincipal() {
  return (
    <div className='BarraPrincipal'>
      <img src={require('../imagenes/peta marca.png')}/>
      <span className='barraBuscar'>
      <HiOutlineSearch />
      <input className='inputBuscar' placeholder='Introduzca su busqueda'/>
      </span>
      <ul className='ulPrincipal'>
        <li>Alimentos</li>
        <li>Cosmetica</li>
        <li>Hogar</li>
        <li><AiOutlineShoppingCart/></li>
        <li><AiOutlineHeart/></li>
        <li><HiOutlineSearch/></li>
      </ul>
    </div>
  )
}

export default BarraPrincipal

import React from 'react'
import '../styles/BarraSuperior.css'

function BarraSuperior({numero, palabra}) {
  return (
    <div className='contenedorPrincipal'>
      <ul>
        <li>Blog</li>
        <li>Ayuda</li>
        <li>Mi cuenta</li>
      </ul>
    </div>
  )
}

export default BarraSuperior

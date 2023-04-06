import React, { useState, useEffect } from 'react'
import '../styles/Carrousel.css'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'

function Carrousel() {

    const images = ['menta.jpg','colageno.jpg','miel.jpg','oregano.jpg','tutucas.jpg'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [imageSelected, setImageSelected] = useState(images[0]);
    const [loaded, setLoaded] = useState(true);

   /* useEffect(() => {
      setTimeout(()=> {
        selectNewImage(selectedIndex, images);
      }, 3000);
    }, [selectedIndex]);*/

    const selectNewImage = (index, images, next = true)=>{
        const condicion = next ? index < images.length -1 : index > 0;
        const nextIndex = next ? (condicion ? index + 1 : 0):(condicion ? index - 1 : images.length -1);
        setImageSelected(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    const preview = ()=>{
        selectNewImage(selectedIndex, images, false);
    }

    const next = ()=>{
        selectNewImage(selectedIndex, images);
    }

  return (
    <div className='contenedorCarrousel'>
      <img src={require(`../imagenes/${imageSelected}`)} alt='primer Foto'/>
      <div className='botones'>
        <button onClick={()=> preview()}><BsFillArrowLeftCircleFill className='next_preview'/></button>
        <button onClick={()=>next()}><BsFillArrowRightCircleFill className='next_preview'/></button>
      </div>
    
    </div>
  )
}

export default Carrousel;

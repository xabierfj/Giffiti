import React from 'react';
import Gif from "../Gif/Gif";
import './ListOfGifs.css'

export default function ListOfGifs({ gifs }) {
  return <div className='ListOfGifs'>
    {
      // El map nos vuelve un array despues de recorrer todo el array
      gifs.map(({id, title, url}) => 
        <Gif 
          id={id} 
          key={id} //Tiene que ser unico, movida que optimiza el rendimiento 
          title={title}
          url={url}
        />
      )
    }
  </div>
}
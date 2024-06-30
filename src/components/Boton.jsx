import React from 'react';
import '../sass/Boton.scss';

const Boton = (props) => {
  return (
    <div className='content-btn'>
      <button className='btn' onClick={props.presionar}>{ props.icon}</button>
      <div className="btn_shadow"></div>
    </div>
  )
}

export {Boton}
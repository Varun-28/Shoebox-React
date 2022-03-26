import React from 'react';
import emptyImg from "../assets/empty-cart.webp";

function Empty({emptyText}) {
  return (
    <div className='p-4 mx-auto my-8 flex flex-col justify-center items-center'>
        <h3 className='font-normal'>Oops! Your {emptyText} is empty.</h3>
        <img className='w-50p' src={emptyImg} alt="empty-cart" /> 
    </div>
  )
}

export {Empty};
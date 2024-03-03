import React from 'react';
import style from './NotFound.module.css'
import notfount from '../../Assets/images/404img.png'
export default function NotFound() {
  return <>
 <div className="w-100">
  <img className='w-100' src={notfount} alt="" />
 </div>
  </>
  
}


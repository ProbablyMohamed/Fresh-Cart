import React, { useEffect } from 'react';
import style from './Categories.module.css'
import { getCategories } from '../../Redux/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';

export default function Categories() {
  let{categories , isLoading} =useSelector(({categories})=>categories)

let dispatch = useDispatch()
useEffect(()=>{
  dispatch(getCategories())
} , [])


  return <>
 
 {isLoading? <div className="loading">

  <ThreeCircles
visible={true}
height="100"
width="100"

ariaLabel="three-circles-loading"
wrapperStyle={{}}
wrapperClass="d-flex justify-content-center mt-5"
/>
  </div>: <div className="row py-5">
{categories.map(categories =>    <div key={categories._id} className="col-md-3 ">
<div className="product p-2">
  <img src={categories.image} className='w-100' height={300} alt={categories.name} />
  <p className='fw-bold'> {categories.name} </p>
</div>
    </div>)}

  </div>
 

}
</>
}
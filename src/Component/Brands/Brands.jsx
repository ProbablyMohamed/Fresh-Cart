import React, { useEffect } from 'react';
import style from './Brands.module.css'
import { getBrands } from '../../Redux/brandsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';

export default function Brands() {
  let{brands , isLoading} =useSelector(({brand})=>brand)

let dispatch = useDispatch()
useEffect(()=>{
  dispatch(getBrands())
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
{brands.map(brand =>    <div key={brand._id} className="col-md-3 ">
<div className="product p-2">
  <img src={brand.image} className='w-100' alt={brand.name} />
  <p className='fw-bold fs-3 text-main text-center'> {brand.name} </p>
</div>
    </div>)}

  </div>
 

}
</>
}
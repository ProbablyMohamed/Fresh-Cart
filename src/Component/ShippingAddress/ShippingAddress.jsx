import React, { useContext } from 'react';
import style from './ShippingAddress.module.css'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function ShippingAddress() {

 let{checkOutSession} =useContext(CartContext)
let{cartId}= useParams()



async function checkOut(values){
let{data} =await checkOutSession(cartId,values)
 if(data.status=='success'){
  window.location.href= data.session.url
 }
}
let formik = useFormik({
initialValues:{
  details:'',
  phone:'',
  city:''
},onSubmit:checkOut

})

  return <>
  <h2 className=''>
  Shipping Address:
<div className="w-75 mx-auto p-5">
<form onSubmit={formik.handleSubmit}>
<label className=' pt-4' htmlFor="details">Details</label>
<input onChange={formik.handleChange} type="tel" id='details' name='details' className='form-control mb-3' />
<label htmlFor="phone">Phone</label>
<input onChange={formik.handleChange} type="text" id='phone' name='phone' className='form-control mb-3' />
<label htmlFor="city">City</label>
<input onChange={formik.handleChange} type="text" id='city' name='city' className='form-control mb-3' />
<button className="btn bg-main fw-bold text-light" type='submit'>Checkout</button>
</form>

</div>

  </h2>

  </>
  
}


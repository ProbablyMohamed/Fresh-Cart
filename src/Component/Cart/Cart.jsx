import React, { useContext, useEffect, useState } from 'react';
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext';
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function Cart() {

let{getCartItems,deleteCartItems,updateCartItems,} =useContext(CartContext);

const[cart,setCart] =useState(null)
const[loading,setLoading]=useState(true)


async function getItems(){

  let{data} = await getCartItems()
  setCart(data)
  setLoading(false)

 
}
async function deleteItems(id){
setLoading(true)
let{data} = await deleteCartItems(id);
  setCart(data)
  setLoading(false)
}


async function updateCart(id,count){

  if(count <1){
    let{data} = await deleteCartItems(id);
    setCart(data);

  }else{
    let{data}=await updateCartItems(id,count);
setCart(data)
  }

  
}



useEffect(()=>{

getItems()


},[])
  return <>
  <div className="bg-main-light mt-5 p-2">
  <h2>Shop Cart</h2>

  {loading? <div className="loading">

  <ThreeCircles
visible={true}
height="100"
width="100"

ariaLabel="three-circles-loading"
wrapperStyle={{}}
wrapperClass="d-flex justify-content-center mt-5"
/>
  </div>: cart? <>
  <p className='text-main'> Number of cart items: {cart.numOfCartItems}</p>
  <p className="text-main">Total cart price :{cart.data.totalCartPrice} EGP</p>
  {cart.data.products.map((product , index)=><div key={index} className="row align-items-center  p-2 m-0 border-1  border-bottom">
   <div className="col-md-1">
    <img src={product.product.imageCover} className='w-100' alt={product.product.title} />
   </div>
<div className="col-md-10">

  <div className="item">
    <h3 className='h5 fw-bold'>{product.product.title.split(' ').slice(0,4).join(' ')}</h3>
    <p className='text-main fw-bold'>Price: {product.price} EGP</p>
    <button onClick={()=>deleteItems(product.product.id)} className="btn"> <i className='fas fa-trash-can text-danger'></i> Remove</button>
  </div>
</div>
<div className="col-md-1">
  <div className="count">
 <button onClick={()=> updateCart(product.product.id ,product.count +1)} className=' brdr btn p-1'>+</button>
 <span className='mx-2'>{product.count}</span>
 <button onClick={()=> updateCart(product.product.id ,product.count -1)} className=' brdr btn p-1'>-</button>

  </div>
</div>
  </div>)}
<Link to={`/shippingaddress/${cart.data._id}`}className='btn bg-main text-light m-3' >Online Payment</Link>

  </> : <h2 className=' text-center text-main fw-bolder p-5'> Cart is Empty </h2> }
  </div>
  </>
  
}


import React, { useContext, useEffect, useState } from 'react';
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import axios from 'axios';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { CartContext } from '../../Context/CartContext';


export default function ProductDetails() {
  let{addToCart}=useContext(CartContext);
  var settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed:1500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };



  let {id}= useParams()
  const[details,setDetails]= useState({})
  const[loading,setLoading]=useState(true)


async function getProductDetails(id){
  let{data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
setDetails(data.data);
setLoading(false)

}



useEffect(()=>{
getProductDetails(id)

},
[])

  return <>


    {loading? 
  <div className="">
  <ThreeCircles
visible={true}
height="100"
width="100"

ariaLabel="three-circles-loading"
wrapperStyle={{}}
wrapperClass="d-flex justify-content-center mt-5"
/>
</div>:
<>
<Helmet>
                <meta charSet="utf-8" />
                <title>{details.title}</title>
                
            </Helmet>
            <div className="row align-items-center">
<div className="col-md-4">
<Slider {...settings}>
      {details.images.map((image , index)=><img src={image} key={index} className='w-100' alt={details.title}/>)}
    </Slider>
  
</div>
<div className="col-md-8">
<div className="details">

      <h3 className='h5'>{details.title}</h3>
      <p className='py-3'>{details.description}</p>
      <span className='font-small text-main'>{details.category.name}</span>

      <div className=" d-flex py-3 justify-content-between align-items-center ">
      <span className='font-sm'>{details.price}EGP</span>
      <span><i className="fas fa-star rating-color me-2"></i>
    {details.ratingsAverage}</span>
      </div>
<button onClick={()=>addToCart(details.id)} className='btn bg-main text-main-light w-100 btn-sm'>Add to cart</button>


</div>
  
</div>
</div>

</>




}
  </>
  
}


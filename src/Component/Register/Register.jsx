import React, { useState } from 'react';
import style from './Register.module.css'
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
const [loading , setLoading] = useState(false)
const [apiError , setApiError] = useState(null)
let navigate =useNavigate()
 async function registerSubmit(values){
  setLoading(true)
let{data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
.catch((err)=>{setApiError(err.response.data.message)
setLoading(false)
})
  if(data.message == 'success'){
    setLoading(false)
    navigate('/login')
  }

}
  let validationSchema = Yup.object({
    name:Yup.string().required('Name is required'),
    email:Yup.string().required('Email is required').email('Invalid Email'),
    password:Yup.string().required('Password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,'Invalid Password ex:Ahmed123'),
    rePassword:Yup.string().required('Re-password is required').oneOf([Yup.ref('password')],'Password and re-password does not match'),
    phone: Yup.string().required('Phone number is required').matches(/^01[0125][0-9]{8}$/ , 'An egyptian phone number is required'),
  })
  let formik= useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:'',
    }, validationSchema
    , onSubmit: registerSubmit
  })
  return <>
  <div className="w-75 mx-auto py-4">
<h2> Register Now</h2>
<form onSubmit={formik.handleSubmit} >
{apiError? <div className="alert alert-danger">{apiError}</div> :''}

<label htmlFor="name">Name :</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='name' name='name' className=' form-control mb-3 '/>
{formik.errors.name && formik.touched.name? <div className="alert alert-danger py-2">{formik.errors.name}</div> : null}
<label htmlFor="email">Email :</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='email' name='email' className=' form-control mb-3 '/>
{formik.errors.email && formik.touched.email? <div className="alert alert-danger py-2">{formik.errors.email}</div> : null}
<label htmlFor="password">Password :</label>
<input  onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='password' name='password' className=' form-control mb-3 '/>
{formik.errors.password && formik.touched.password? <div className="alert alert-danger py-2">{formik.errors.password}</div> : null}
<label htmlFor="rePassword">Re-Password :</label>
<input  onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='rePassword' name='rePassword' className=' form-control mb-3 '/>
{formik.errors.rePassword && formik.touched.rePassword? <div className="alert alert-danger py-2">{formik.errors.rePassword}</div> : null}
<label htmlFor="">Phone :</label>
<input  onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" id='phone' name='phone' className=' form-control  mb-3 '/>
{formik.errors.phone && formik.touched.phone? <div className="alert alert-danger py-2">{formik.errors.phone}</div> : null}
{loading?<button type='button' className="btn bg-main text-light ">
<ThreeCircles
  visible={true}
  height="30"
  width="30"
  color="#0000FF"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
</button> :<button disabled={!(formik.isValid && formik.dirty)} type='submit' className="btn bg-main text-light ">Register</button> }
<span className='ps-3'>Already have an account? <Link to={'/login'} className=' text-primary ' >Login Now</Link></span>

</form>
  </div>
  </>
  
}


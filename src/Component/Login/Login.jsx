import React, { useContext, useState } from 'react';
import style from './Login.module.css'
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { jwtDecode } from 'jwt-decode';


export default function Login() {


  const [loading , setLoading] = useState(false)
  const [apiError , setApiError] = useState(null)
  let navigate =useNavigate()
let {setUserToken} =useContext(UserContext)

 async function loginSubmit(values){
  setLoading(true)
let{data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
.catch((err)=>{setApiError(err.response.data.message)
setLoading(false)
})
  if(data.message == 'success'){
    setLoading(false)
    localStorage.setItem('userToken',data.token)
    setUserToken(data.token)
    navigate('/')
  }

}
  let validationSchema = Yup.object({
    
    email:Yup.string().required('Email is required').email('Invalid Email'),
    password:Yup.string().required('Password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,'Invalid Password ex:Ahmed123'),
   
  })
  let formik= useFormik({
    initialValues:{
     
      email:'',
      password:'',
      
    }, validationSchema
    , onSubmit: loginSubmit
  })
  return <>
  <div className="w-75 mx-auto py-4">
<h2> Login Now</h2>
<form onSubmit={formik.handleSubmit} >
{apiError? <div className="alert alert-danger">{apiError}</div> :''}


<label htmlFor="email">Email :</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='email' name='email' className=' form-control mb-3 '/>
{formik.errors.email && formik.touched.email? <div className="alert alert-danger py-2">{formik.errors.email}</div> : null}
<label htmlFor="password">Password :</label>
<input  onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='password' name='password' className=' form-control mb-3 '/>
{formik.errors.password && formik.touched.password? <div className="alert alert-danger py-2">{formik.errors.password}</div> : null}

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
</button> :<button disabled={!(formik.isValid && formik.dirty)} type='submit' className="btn bg-main text-light ">Login</button> }
<span className='ps-3'>New user? <Link  to={'/register'} className=' text-primary ' >Register Now</Link></span>

</form>
  </div>
  </>
  
}


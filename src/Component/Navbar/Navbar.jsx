import React, { useContext } from 'react';
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {
  let {userToken , setUserToken}= useContext(UserContext)
  const { cartId } = useContext(CartContext); 

let navigate= useNavigate()
  function logOut(){
  localStorage.removeItem('userToken');
  setUserToken(null);
navigate('/login')

}

  return <>
  <nav className="navbar fw-bold navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to={'/'}>
    <img src={logo} alt='Fresh Cart'/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {userToken !=null? <>
      <li className="nav-item">
        <Link className="nav-link" to={'/'}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'cart'}>Cart</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to={'categories'}>Categories</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'brands'}>Brands</Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to={`/allorders`}>View Orders</Link>
      </li>
    
    
    </> :''}
      
    </ul>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
      <li className="nav-item d-flex align-items-center">
      <div className="footer-social-icon">
      <Link to={'/'}><i className="fab fa-instagram instagram-bg"></i></Link>

                                <Link to={'/'}><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to={'/'}><i className="fab fa-tiktok  "></i></Link>
                                <Link to={'/'}><i className="fab fa-x-twitter bg-dark"></i></Link>
                                <Link to={'/'}><i className="fab fa-linkedin bg-primary "></i></Link>
                                <Link to={'/'}><i className="fab fa-youtube youtube-bg "></i></Link>
                            </div>
      </li>

      {userToken !=null? <>
        <li className="nav-item">
       <span onClick={logOut} className=' nav-link cursor-pointer'>Logout</span>
      </li>
      </> :
      <>
      <li className="nav-item ">
        <Link className="nav-link" to={'register'}>Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'login'}>Login</Link>
      </li>
      
      </>}
      
      
    
    </ul>
    
  </div>
</nav>
  </>
  
}


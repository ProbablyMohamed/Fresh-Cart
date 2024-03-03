import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import icon from '../../Assets/images/freshcart-logo.svg'
export default function Footer() {
  return <>
  
  
  <footer className="footer-section bottom-0 fw-bold">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Route Egypt</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>freshcart@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link href="index.html"><img src={icon} className='w-100' alt="logo"/></Link>
                            </div>
                            
                            <div className="footer-social-icon">
                                <span className='text-dark'>Follow us</span>
                                <Link to={'/'}><i className="fab fa-instagram instagram-bg"></i></Link>

<Link to={'/'}><i className="fab fa-facebook-f facebook-bg"></i></Link>
<Link to={'/'}><i className="fab fa-tiktok  "></i></Link>
<Link to={'/'}><i className="fab fa-x-twitter bg-dark"></i></Link>
<Link to={'/'}><i className="fab fa-linkedin bg-primary "></i></Link>
<Link to={'/'}><i className="fab fa-youtube youtube-bg "></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                       </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3 className='text-main'>Get our app</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>we will send you a link,open it on your phone to download the app</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input className='form-control' type="text" placeholder="Email Address"/>
                                    <button className='btn btn-primary bg-main text-light'>Share App Link</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
  
  </>
}

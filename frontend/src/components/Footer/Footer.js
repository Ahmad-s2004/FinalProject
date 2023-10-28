import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <div>
<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        {/* Contact Info*/}
        <section className="widget widget-light-skin">
          <h3 className="widget-title">Get In Touch With Us</h3>
          <p className="text-white">Phone: 00 33 169 7720</p>
          <ul className="list-unstyled text-sm text-white">
            <li><span className="opacity-50">Monday-Friday:</span>9.00 am - 8.00 pm</li>
            <li><span className="opacity-50">Saturday:</span>10.00 am - 6.00 pm</li>
          </ul>
          <p><a className="navi-link-light" href="mailto:wecare@sapphireonline.pk">wecare@sapphireonline.pk</a></p><a className="social-button shape-circle sb-facebook sb-light-skin" href="#"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-twitter sb-light-skin" href="#"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-instagram sb-light-skin" href="#"><i className="socicon-instagram" /></a><a className="social-button shape-circle sb-google-plus sb-light-skin" href="#"><i className="socicon-googleplus" /></a>
        </section>
      </div>
      <div className="col-lg-3 col-md-6">
        {/* Mobile App Buttons*/}
        <section className="widget widget-light-skin">
          <h3 className="widget-title">Our Mobile App</h3><a className="market-button apple-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">App Store</span></a><a className="market-button google-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Google Play</span></a><a className="market-button windows-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Windows Store</span></a>
        </section>
      </div>
      <div className="col-lg-3 col-md-6">
        {/* About Us*/}
        <section className="widget widget-links widget-light-skin">
          <h3 className="widget-title">CUSTOMER CARE</h3>
          <ul>
            <li><Link to="/exchange&return">Exchange & Return</Link></li>
            <li><Link to="/FAQs">FAQ's</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/payment">Payments</Link></li>
            <li><Link to="/track-order">Track Your Order</Link></li>
          </ul>
        </section>
      </div>
      <div className="col-lg-3 col-md-6">
        {/* Account / Shipping Info*/}
        <section className="widget widget-links widget-light-skin">
          <h3 className="widget-title">INFORMATION</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policies</Link></li>
            <li><Link to="/fabric-glossary">Fabric Glossary</Link></li>
            <li><Link to="/safepay">SafePay Guide</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </section>
      </div>
    </div>
    <hr className="hr-light mt-2 margin-bottom-2x" />
    <div className="row">
      <div className="col-md-7 padding-bottom-1x" />
      <div className="col-md-5 padding-bottom-1x">
        <div className="margin-top-1x hidden-md-up" />
        {/*Subscription*/}
        <form className="subscribe-form" action="#" method="post" target="_blank" noValidate>
          <div className="clearfix">
          </div><span className="form-text text-sm text-white opacity-50">Subscribe to our Newsletter for Exclusive Updates.</span>
            <div className="input-group input-light">
              <input className="form-control" type="email" name="EMAIL" placeholder="Your email address" /><span className="input-group-addon"><i className="icon-mail" /></span>
            </div>
            <button className="btn btn-primary mt-2" type="submit">Suscbribe</button>
        </form>
      </div>
    </div>
    {/* Copyright*/}
    <p className="footer-copyright"><a>© All rights reserved.</a></p>
  </div>
</footer>

        </div>
    )
}

export default Footer
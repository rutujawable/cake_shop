
import React from 'react'
import "./Header.css";
import siteDetails  from '../../config';

import {Link} from "react-router-dom";
import logo from "./img/logo-removebg-preview.png"
import user from "./img/login.png"
import cart from "./img/cart.png"

function Header() {
  return (
    <div className='Navbar-Container' style={{backgroundColor:siteDetails.theme.headerfooter}}>
      <img  src={logo} className="header-logo"/>
      <Link to ='/' className='nav-menu'>Home</Link>
      <Link to ='/products' className='nav-menu'>Products</Link>
     
      <img  src={user} className="userr-logo"/>
      <img  src={cart} className="cart-logo"/>
    </div>
  )
}

export default Header


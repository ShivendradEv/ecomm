import { React, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.jpg'
import Hamburger from '../../assets/images/menu-outline.svg'
import CartIcon from '../../assets/images/cart-outline.svg'


const Header = () => {

  let NavLinks = useRef();

  const hamburgerClick = () => {
    NavLinks.current.classList.toggle("nav-slide");
  }

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='nav-logo'>
          <NavLink to="/"><img src={LogoImg} alt="logo" /></NavLink>
        </div>
        <ul className='nav-links' ref={NavLinks}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/ProductList/Electronics">Electronics</NavLink></li>
          <li><NavLink to="/ProductList/Jewelery">Jewelery</NavLink></li>
          <li><NavLink to="/ProductList/Men's clothing">Men's clothing</NavLink></li>
          <li><NavLink to="/ProductList/Women's clothing">Women's clothing</NavLink></li>
          <li className='cart-icon'><NavLink to="/Cart"><img src={CartIcon} alt="cart icon"/><div className='cart-count'>0</div></NavLink></li>
        </ul>
        <div className='nav-toggle' onClick={hamburgerClick}><img src={Hamburger} alt="hamburger-icon"/></div>
      </div>
    </nav>
  )

}

export default Header

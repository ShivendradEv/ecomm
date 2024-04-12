import React from 'react'
import LogoImg from '../../assets/images/logo.jpg'

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-logo'>
        <img src={LogoImg} alt="logo" />
      </div>
      <ul className='main-links'>
        <li><a href='/'>Home</a></li>
        <li><a href='/ProductList/Electronics'>Electronics</a></li>
        <li><a href='/ProductList/Jewelery'>Jewelery</a></li>
        <li><a href="/ProductList/Men's clothing">Men's Clothing</a></li>
        <li><a href="/ProductList/Women's clothing">Women's Clothing</a></li>
      </ul>
      <ul className='secondary-links'>
        <li>
          <p>&#169; All rights reserved 2024</p>
        </li>
      </ul>
    </div>
  )
}

export default Footer

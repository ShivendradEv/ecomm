import React from 'react';
// import LogoImg from '../../assets/images/logo.jpg';

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-logo'>
        <a href="/">Electro<span>.</span></a>
      </div>
      <ul className='main-links'>
        <li><a href='/'>Home</a></li>
        <li><a href='/ProductList/smartphones'>smartphones</a></li>
        <li><a href='/ProductList/laptops'>laptops</a></li>
        <li><a href="/ProductList/sunglasses">sunglasses</a></li>
        <li><a href="/ProductList/automotive">automotive</a></li>
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
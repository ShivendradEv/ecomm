import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../../assets/images/menu-outline.svg'
import CartIcon from '../../assets/images/cart-outline.svg'
import SearchIcon from '../../assets/images/search-outline.svg'
import MailIcon from '../../assets/images/mail-outline.svg'
import PhoneIcon from '../../assets/images/call-outline.svg'

const Header = () => {

    let NavLinks = useRef();
    const hamburgerClick = () => {
    NavLinks.current.classList.toggle("nav-slide");
  }

    return (
    <nav className='navbar'>
        <div className='top-nav'>
            <div className='container'>
                <ul className='contact-info'>
                    <li>
                        <div className='icon'><img src={PhoneIcon} alt='Phone icon'/></div>
                        <a href="tel:9260031190">+91 9260031190</a>
                    </li>
                    <li>
                        <div className='icon'><img src={MailIcon} alt='Mail icon'/></div>
                        <a href="mailto:mail.electro@gmail.com">mail.electro@gmail.com</a>
                    </li>
                </ul>
                <ul className='search'>
                    <li>
                        <form>
                            <input type='search' placeholder='Search products here...' />
                            <button type='button'><img src={SearchIcon} alt='Search icon'/></button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
        <div className='bottom-nav'>
            <div className='container'>
                <div className='nav-logo'>
                    <NavLink to="/">Electro<span>.</span></NavLink>
                </div>
                <ul className='nav-links' ref={NavLinks}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/ProductList/smartphones">smartphones</NavLink></li>
                    <li><NavLink to="/ProductList/laptops">laptops</NavLink></li>
                    <li><NavLink to="/ProductList/sunglasses">sunglasses</NavLink></li>
                    <li><NavLink to="/ProductList/automotive">automotive</NavLink></li>
                    <li className='cart-icon'><NavLink to="/Cart"><img src={CartIcon} alt="cart icon"/><div className='cart-count'>0</div></NavLink></li>
                </ul>
                <div className='nav-toggle' onClick={hamburgerClick}><img src={Hamburger} alt="hamburger-icon"/></div>
            </div>
        </div>
    </nav>
    )
}

export default Header
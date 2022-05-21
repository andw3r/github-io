import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cart from './Cart'
import { HamburgerSpring } from 'react-animated-burgers'
// images
import logo from '../assets/icons/logo.svg'
import mobileLogo from '../assets/icons/mobile-logo.svg'
import cart from '../assets/icons/cart.svg'
import { useStateContext } from '../context/StateContext'

const NavBar = () => {
  const { showCart, setShowCart, totalQuatities } = useStateContext(false);
  const [isActive, setIsActive] = useState(false)
  
  const toggleButton = () => {
    setIsActive(prevState => !prevState)
  }


  // useEffect((showCart) => {
  //   document.body.classList.toggle('lock')
  // })

  return (

    <>
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <Link href="/">
            <Image src={logo} />
          </Link>
        </div>

        <HamburgerSpring 
          className="nav__burger"
          barColor="#FFFFFF" 
          buttonWidth="30"
          {...{ isActive, toggleButton }} 
        />

        <div className="nav__mobile-logo">
          <Link href="/">
            <Image src={mobileLogo} />
          </Link>
        </div>

        <div className={isActive ? "nav__overflow active" : "nav__overflow"} onClick={() => setIsActive(false)} />
        <div className={isActive ? "nav__menu active" : "nav__menu"}>
          <Link href="/category">
            <p className="nav__item">Колекція</p>
          </Link>

          <Link href="/category">
            <p className="nav__item">Чохли</p>
          </Link>

          <Link href="/category">
            <p className="nav__item">Сумки</p>
          </Link>

          <Link href="/category">
            <p className="nav__item">Рюкзаки</p>
          </Link>

          <Link href="/category">
            <p className="nav__item">Аксесуари</p>
          </Link>

        </div>
        <button type="button" className="nav__cart-btn" onClick={() => setShowCart(true)} >
          <Image src={cart} alt="" />
          <span className="cart-btn-qty">{totalQuatities}</span>
        </button>
      </nav>
    </header>
    <div className={showCart ? "cart__overflow active" : "cart__overflow"}  onClick={() => setShowCart(false)}/>
    { showCart && <Cart /> }
    </>
  )
}

export default NavBar
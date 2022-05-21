import React from "react"
import Image from 'next/image'
import instagram from '../assets/icons/instagram.svg'
import youtube from '../assets/icons/youtube.svg'
import facebook from '../assets/icons/facebook.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__column">
          <p className="footer__text">Про нас</p>
          <p className="footer__text">Корпоративні замовлення</p>
          <p className="footer__text">Оплата і доставка </p>
        </div>

        <div className="footer__column">
          <p className="footer__text">Контакти</p>
          <p className="footer__text">Повернення і гарантія</p>
          <p className="footer__text">Догляд  за шкірою</p>
        </div>

        <div className="footer__column">
          <p className="footer__text">Про знижки, обновлення та інше.</p>
          <form action="" className="footer__form">
            <input type="email" placeholder="Email" className="footer__input" />
            <button type="submit" className="footer__button">Підписатись</button>
          </form>
          <div className="footer__icons">
              <div className="icon"><Image src={instagram} alt="" /></div>
              <div className="icon"><Image src={youtube} alt="" /></div>
              <div className="icon"><Image src={facebook} alt="" /></div>
          </div>
        </div>

      </div>
      <div className="copyright">
        <h6 className="copyright__title">2021 Monocaso® Goods, Inc. All rights reserved</h6>
        <div className="copyright__text">
          <p className="copyright__description">Условие использования</p>
          <p className="copyright__description">Terms</p>
          <p className="copyright__description">Payment</p>
          <p className="copyright__description">Accessibility</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
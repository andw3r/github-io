import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import removeIcon from '../assets/icons/delete.png'

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  return (
    <div className="cart" ref={cartRef} >
      <div className="cart__container">
        <div className="cart__header">
          <h3 className="cart__title">Кошик</h3>
          <button type="button" className="cart__close-button" onClick={() => setShowCart(false)} >

          </button>
        </div>
        {cartItems.length < 1 && (
            <div className="empty-cart">
              <h3 className="empty-cart__title">Ваш кошик порожній</h3>
            </div>
          )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className="cart-product" key={item._id}>
              <div onClick={() => onRemove(item)} className="quantity__btn--remove"><Image src={removeIcon} /></div>
              <div className="cart-product__wrapper">
                <div className="cart-product__image">
                  <img src={urlFor(item?.image[0])} />
                </div>
                <div className="cart-product__description">
                  <h4 className="cart-product__title">{item.name}</h4>
                  <h5 className="cart-product__model">{item.model}</h5>
                  <div className="quantity">
                    <div className="quantity__buttons">
                      <span className="quantity__btn quantity__btn--minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>-</span>
                      <span className="quantity__btn quantity__btn--num">{item.quantity}</span>
                      <span className="quantity__btn quantity__btn--plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc')}>+</span>
                    </div>
                    <h6 className="quantity__price">{item.price} грн</h6>
                </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart__outer">
            <div className="cart__total">
              <h3>Разом:</h3>
              <h3 className="cart__total-price">{totalPrice} грн</h3>
            </div>
            <div className="cart__buttons-checkout">
              <button>Оформити замовлення</button>
              <button onClick={() => setShowCart(false)}>Продовжити покупки</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
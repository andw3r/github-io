import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner: { product, desc, buttonText, image, slug } }) => {
  return (
    <div className="hero-banner">
      <div className="hero-banner__container">
          <div className="hero-banner__image">
            <img src={urlFor(image)} alt="Чохол Macbook"  />   
          </div>
          <div className="hero-banner__wrapper">
            <h2 className="hero-banner__title">{product}</h2>
            <p className="hero-banner__description">{desc}</p>
            <Link href={`/product/${slug.current}`}>
              <button className="hero-banner__button">{buttonText}</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default HeroBanner
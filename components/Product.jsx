import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price, model } }) => {
  return (
    <div className="product">
      <Link href={`/product/${slug.current}`}>
        <div className="product__card">
          <img src={urlFor(image && image[0])} alt="" />
          <div className="product__text">
            <h6 className="product__name">{name}</h6>
            <p className="product__model">{model}</p>
            <p className="product__price">від {price} грн.</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Category = ({ category: { image, name, slug } }) => {
  return (
    <div className="category">
      <Link href="/category">
        <div className="category__card">
          <div className="category__image"><img src={urlFor(image)} /></div>
          <h6 className="category__text">{name}</h6>
        </div>      
      </Link>
    </div>
  )
}

export default Category;
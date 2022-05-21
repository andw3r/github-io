import React from 'react'
import { urlFor } from '../lib/client'

const CategoryBanner = ({ banner }) => {
  return (
    <div className="category-banner">
      <div className="category-banner__image">
        <img src={urlFor(banner.image)} alt="banner" />
      </div>  
    </div>
  )
}

export default CategoryBanner
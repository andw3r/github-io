import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const ColectionBanner = ({bannerColection}) => {
  return (
    <div className="colection-banner">
      <div className="colection-banner__image">
      <img  src={urlFor(bannerColection.image)} alt="Дивитись коллекцію"  />
      </div>
      <div className="colection-banner__button">
      <Link href={`/category`}>
        <button>{bannerColection.buttonText}</button>
      </Link>
      </div>
    </div>
  )
}

export default ColectionBanner
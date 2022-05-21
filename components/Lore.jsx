import React from 'react'
import { urlFor } from '../lib/client'

const Lore = ({lore}) => {
  return (
    <div className="lore">
      <div className="lore__container">
        <div className="lore__image">
          <img src={urlFor(lore.image)} alt="our lore" />
        </div>
        <div className="lore__text">
          <h4 className="lore__title">{lore.title}</h4>
          <p className="lore__description">{lore.description}</p>

          <button className="lore__button">{lore.btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default Lore
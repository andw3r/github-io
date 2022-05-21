import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {
  const { image, name, price, model, color } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div className="product-details">
      <div className="product-details__container">
        <div className="product-details__wrapper">
          <div className="product-details__image">
            <img src={urlFor(image && image[0])} />
          </div>

          <div className="product-details__text">
            <div className="product-details__main-text">
              <h2 className="product-details__name">{name}</h2>
              <p className="product-details__model">{model}</p>
            </div>
            <p className="product-details__price">{price} грн.</p>
            <p className="product-details__color"><span>Колір -</span> {color}</p>
            <div className="product-details__color-dots">
            <div className={color == "Чорний" ? "dot black-dot bordered" : "dot black-dot"}></div>
            <div className={color == "Коричневий" ? "dot brown-dot bordered" : "dot brown-dot"}></div>
            </div>
            <button className="product-details__button" onClick={() => onAdd(product, qty)}>Додати в кошик</button>
          </div>
        </div>
      </div>

      <div>

      </div>
      
    </div>
  )
}


export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths, 
    fallback: 'blocking'
  }

}


export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  }

}

export default ProductDetails
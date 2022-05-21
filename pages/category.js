import React from 'react'
import { client, urlFor } from '../lib/client'
import Product from '../components/Product';
import CategoryBanner from '../components/CategoryBanner';
import CategoryDetails from '../components/CategoryDetails';

const CateforyDetails = ({ products, productCategoryBannerData }) => {
  return (
    <div className="category-page">
      <div className="category-page__container">
        <CategoryBanner banner={productCategoryBannerData.length && productCategoryBannerData[0]} />
        <CategoryDetails />
        <div className="products__container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {

  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const productCategoryBannerQuery = '*[_type == "productCategoryBanner"]';
  const productCategoryBannerData = await client.fetch(productCategoryBannerQuery)

  return {
    props: { products, productCategoryBannerData }
  }
}


export default CateforyDetails
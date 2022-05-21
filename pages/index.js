import React from 'react'
import Link from 'next/link'
import HeroBanner from '../components/HeroBanner';
import Category from '../components/Category';
import { client } from '../lib/client';
import MainVideo from '../components/MainVideo';
import ColectionBanner from '../components/ColectionBanner';
import Lore from '../components/Lore';
import Values from '../components/Values';
import Product from '../components/Product';

const Home = ({ products, bannerData, categoryData, colectionBannerData, loreData }) => {
  return (
    <>
    
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="category__wrapper">
        <div className="category__description">
          <h5>Обери категорію</h5>
          <Link href="/category"><p>Дивитись коллекцію</p></Link>
        </div>

        <div className="category__container">
          {categoryData?.map((category) => <Category key={category._id} category={category} />)}
        </div>
      </div>

      <MainVideo />

      <ColectionBanner bannerColection={colectionBannerData.length && colectionBannerData[0]} />

      <Lore lore={loreData.length && loreData[0]} />

      <Values />

    </>
  )
  
}

export const getServerSideProps = async () => {

  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  const colectionBannerQuery = '*[_type == "bannerColection"]';
  const colectionBannerData = await client.fetch(colectionBannerQuery)

  const catagoryQuery = '*[_type == "category"]';
  const categoryData = await client.fetch(catagoryQuery)

  const loreQuery = '*[_type == "lore"]';
  const loreData = await client.fetch(loreQuery)

  return {
    props: { products, bannerData, categoryData, colectionBannerData, loreData }
  }
}

export default Home;
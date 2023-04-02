import React from 'react'
import {Product, FooterBanner, HeaderBanner} from "../components";
import { client } from '@/lib/client';

const Home = ({productData = [], bannerData = []}) => {
  return (
    <>
      <HeaderBanner {...(bannerData.length && bannerData[0])} />

      <div className="product-heading text-center my-[40px] shadow-md drop-shadow-md px-[10px] py-4">
        <h2 className="font-bold text-clampLg text-textSm my-3">
          Best Selling Products
        </h2>
        <p className="font-extralight text-clampXs">
          Speaking of many variations
        </p>
      </div>

      <div className="products-container flex flex-wrap items-center justify-center gap-5 mt-5 w-full p-[40px]">
        {productData &&
          productData?.map((product) => (
            <Product key={product._id} {...product} />
          ))}
      </div>

      <FooterBanner {...(bannerData.length && bannerData[0])} />
    </>
  );
}

export const getServerSideProps = async () => {
  const productQuery = `*[_type == "product"]`;
  const productData = await client.fetch(productQuery);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props : {productData, bannerData}
  }
}

export default Home

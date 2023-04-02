import { Product } from '@/components';
import { MyImage, client } from '@/lib/client';
import React, { useRef, useState } from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";
import { useStateContext } from '@/context/stateContext';

const ProductDetails = ({allProducts, singleProduct}) => {
  const [index, setIndex] = useState(0);
  const {image, name, details, price} = singleProduct;
  const { incQty, qty, decQty, onAdd, setShowCart } = useStateContext();

  const rowContainer = useRef();
  
  const scroll = (scrollOffset) => {
    rowContainer.current.scrollLeft += scrollOffset;
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    onAdd(singleProduct, qty);
    setShowCart(true);
  }

  return (
    <section>
      <div className="product-detail-container bg-shadeXl flex flex-wrap gap-x-4 gap-y-6 sm:p-8 min-h-[500px]">
        {/* left side */}
        <aside className="left flex select-none lg:flex-[1] p-6 w-full sm:max-w-[600px] flex-col items-center">
          {/* big image container */}
          <div className="image-container w-full h-[300px] xs:h-[400px] rounded-xl bg-shadeLg py-4">
            <MyImage
              ImageData={image && image[index]}
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>

          {/* small image container */}
          <div
            ref={rowContainer}
            className="small-images-container w-full overflow-x-scroll flex gap-3 mt-6 py-4 px-2"
          >
            {image?.map((item, i) => (
              <article
                className={`small-image ${
                  i === index ? "bg-shadeSm" : "bg-shadeSmCard"
                } w-[100px] sm:w-[140px] flex-shrink-0 rounded-md shadow-lg drop-shadow-lg hover:scale-110 transition-all ease-in-out duration-200`}
                onMouseEnter={() => setIndex(i)}
                key={item._key}
              >
                <MyImage
                  ImageData={item}
                  alt="product"
                  className="w-full h-full object-cover"
                />
              </article>
            ))}
          </div>
          {/* scroll buttons */}
          <div className="scroll-arrows flex justify-between gap-2 items-center w-[90%] mx-auto">
            <BsFillArrowLeftSquareFill
              className="cursor-pointer text-clampMd text-shade2Xs hover:text-shadeXs"
              onClick={() => scroll(-180)}
            />
            <BsFillArrowRightSquareFill
              className="cursor-pointer text-clampMd text-shade2Xs hover:text-shadeXs"
              onClick={() => scroll(180)}
            />
          </div>
        </aside>

        {/* right side container */}
        <aside className="right w-full flex flex-col gap-y-6 lg:flex-[2] p-4">
          <h1 className="text-clampBase font-semibold">{name}</h1>
          <article className="reviews flex gap-2 mb-3">
            <div className="flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-textXs">({20})</p>
          </article>

          {/* right side descriptions */}
          <article className="flex flex-col gap-3">
            <p className="mb-8 flex gap-x-3 items-center">
              <span className="text-md text-gray-400">Details : </span>
              <span className="leading-relaxed text-clampSm text-white font-light">
                {details}
              </span>
            </p>
            <p className="flex items-center gap-x-3">
              <span className="text-md text-gray-400">Price :</span>
              <span className=" text-shade2Xs text-clampMd font-bold">
                ${price}
              </span>
            </p>
          </article>

          {/* quantity buttons */}
          <article className="qty select-none flex items-center w-fit my-2 gap-x-4">
            <span className="text-md text-gray-400 hidden xs:flex">
              Quantity :{" "}
            </span>
            <span
              className="minus text-textXl bg-shadeSm cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out rounded-md px-6 py-3"
              onClick={decQty}
            >
              <AiOutlineMinus />
            </span>
            <span className="num text-clampSm font-bold">{qty}</span>
            <span
              className="plus text-textXl bg-shadeXs cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out rounded-md px-6 py-3"
              onClick={incQty}
            >
              <AiOutlinePlus />
            </span>
          </article>

          {/* add to cart and buy buttons */}
          <article className="buttons my-4 flex gap-4 select-none">
            <button
              type="button"
              className="add-to-cart w-[140px] py-3 font-semibold rounded-sm bg-shadeSm hover:bg-shadeSmCard text-clampXs transition-all duration-150 ease-out uppercased disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => onAdd(singleProduct, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="buy-now w-[140px] py-3 font-semibold rounded-sm hover: uppercase bg-emerald-500 text-clampXs hover:bg-emerald-600 transition-all duration-150 ease-out"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </article>
        </aside>
      </div>

      <div className="maylike-products-container flex flex-col gap-y-10 py-6 px-4 justify-center gap-4 mt-8 shadow-lg drop-shadow-lg">
        <h2 className="text-clampSm text-textSm capitalize font-semibold text-start">
          You may also like
        </h2>
        <aside className="marquee w-full max-w-[1200px] mx-auto h-[350px]">
          <div className="track maylike-products-container flex justify-center gap-4 mt-6">
            {allProducts.map((product) => (
              <Product key={product._id} {...product} alsoLike={true} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export const getStaticPaths = async () => {
  // telling sanity to get us an array of {slug {current : value}} 
  const query = `*[_type == "product"] { slug { current } }`;
  const onlySlugAndCurrentArray = await client.fetch(query);

  const paths = onlySlugAndCurrentArray.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return { paths, fallback : "blocking"}
}


export const getStaticProps = async (context) => {
  const {params : {slug}} = context;

  const allProductsQuery = `*[_type == "product"]`;
  const singleProductQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const allProducts = await client.fetch(allProductsQuery);
  const singleProduct = await client.fetch(singleProductQuery);

  return { props: { allProducts, singleProduct}};
};

export default ProductDetails
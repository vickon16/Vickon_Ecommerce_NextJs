import { MyImage} from '@/lib/client'
import Link from 'next/link'
import React from 'react'

const HeaderBanner = ({smallText, midText, largeText1, largeText2, image, product, buttonText, desc}) => {
  return (
    <section className="hero-banner-container bg-shadeLg pt-[80px] pb-[30px] px-[10px] md:px-[40px] rounded-lg relative h-auto  w-full drop-shadow-lg shadow-inner ">
      <aside className="flex flex-col gap-4 mb-8 md:mb-0">
        <p className="beats-solo text-clampSm">{smallText}</p>
        <h3 className="text-clamp2Xl uppercase font-semibold ">
          {midText}
        </h3>
        <h1 className="text-clamp3Xl uppercase font-bold leading-snug">
          {largeText1} <span className='text-shadeXs text-clamp3Xl'>{largeText2}</span>
        </h1>
        <Link
          href={`/product/${product}`}
          className="rounded-md py-3 px-6 my-4 bg-shadeXs text-textXl font-semibold border-none text-clampXs z-30 w-fit hover:bg-shadeSm"
        >
          {buttonText}
        </Link>
      </aside>

        <aside className="hero-banner-image xs:absolute xs:top-[10%] xs:right-[0%] md:top-10 md:right-[10%] lg:right-[20%] w-full h-full xs:w-[350px] xs:h-[350px] md:w-[460px] md:h-[460px]">
          <MyImage ImageData={image} alt="headphones" className="w-full h-full object-cover" />
        </aside>
        <aside className="flex flex-col ml-auto w-fit gap-2 mt-3">
          <h5 className="font-semibold text-clampXs self-end">Description</h5>
          <p className="font-extralight text-clamp2Xs text-textMd">{desc}</p>
        </aside>
    </section>
  );
}

export default HeaderBanner
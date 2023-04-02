import { MyImage } from '@/lib/client'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText,desc, image}) => {
  return (
    <section className="footer-banner-container relative mt-8 p-[40px] bg-shadeXl drop-shadow-lg shadow-inner flex w-full items-center flex-wrap gap-y-12">
      <aside className="left w-full md:flex-1 flex flex-col text-center items-center gap-2 px-[40px]">
        <div className="footer-banner-image w-full h-full xs:w-[260px] xs:h-[260px]">
          <MyImage
            ImageData={image}
            alt="headphone"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-clampMd font-semibold text-emerald-400">
          {discount}
        </p>
        <h1 className="text-clamp2Xl uppercase font-bold leading-snug">
          <span className="text-shadeXs text-clamp2Xl">{largeText1}</span>{" "}
          {largeText2}
        </h1>
      </aside>
      <aside className="right w-full md:flex-1 text-center items-center md:items-start flex flex-col gap-4">
        <p className="text-clampSm font-semibold">{smallText}</p>
        <h3 className="text-clamp2Xl uppercase font-semibold leading-snug">
          {midText}
        </h3>
        <p className="text-clampSm font-extralight">{saleTime}</p>
        <Link
          href={`/product/${product}`}
          className="rounded-md py-3 px-6 my-4 bg-shadeXs text-textXl font-semibold border-none text-clampXs z-30 w-fit hover:bg-shadeSm"
        >
          {buttonText}
        </Link>

        <div className="flex flex-col text-center md:ml-auto w-fit gap-3 mt-4">
          <h5 className="font-semibold text-base md:self-end">Description</h5>
          <p className="font-extralight text-textMd">{desc}</p>
        </div>
      </aside>
    </section>
  );
}

export default FooterBanner
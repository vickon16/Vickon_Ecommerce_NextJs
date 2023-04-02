import Link from 'next/link'
import { MyImage } from "@/lib/client";
import { useStateContext } from '@/context/stateContext';


const Product = ({_id, image, name, slug, price, alsoLike}) => {
  
  const { resetQty } = useStateContext();

  return (
    <article className="group">
      <Link
        href={`/product/${slug.current}`}
        className={`product-card flex overflow-hidden ${
          alsoLike ? "w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] lg:w-[230px] lg:h-[230px]" : "w-[230px] h-[230px]"
        }  bg-shadeSmCard rounded-xl group-hover:bg-shadeSm transition-all ease-in-out duration-200 shadow-lg drop-shadow-lg`}
        onClick={resetQty}
      >
        <MyImage
          ImageData={image && image[0]}
          alt="product"
          className="w-full h-full object-cover group-hover:scale-105 transition-all ease-in-out duration-200"
        />
      </Link>
      <div className="product-body flex flex-col gap-2 p-3">
        <p className={`${alsoLike ? "text-clamp2Xs sm:text-clampXs" : ""}`}>{name}</p>
        <p className="product-price text-clampSm text-emerald-300 font-semibold">
          ${price}
        </p>
      </div>
    </article>
  );
}

export default Product
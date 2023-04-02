import { useStateContext } from '@/context/stateContext';
import { MyImage } from '@/lib/client';
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const CartItem = ({item}) => {
  const { onRemove, toggleCartItemQuantity } = useStateContext();

  return (
    <article className="product flex justify-between gap-x-2 xs:gap-x-4 py-4 shadow-lg drop-shadow-lg">
      <div className="image-container w-[90px] h-[90px] xs:w-[110px] xs:h-[110px] bg-shadeSmCard p-2 rounded-md">
        <MyImage
          ImageData={item?.image[0]}
          alt="cartItem"
          className="cart-product-img w-full h-full object-cover"
        />
      </div>

      <div className="item-desc flex-[3] justify-between flex flex-col gap-y-2">
        <div className="flex justify-between gap-x-2 items-center p-2">
          <h5 className="text-clampXs sm:text-clampSm">
            {item?.name} {"- "}
            <span className="text-clamp2Xs text-shade2Xs">${item?.price}</span>
          </h5>
          <h4 className="text-clampXs font-bold text-emerald-400">
            ${item?.price * item.quantity}
          </h4>
        </div>
        <div className="flex mx-2 items-center justify-between gap-x-2">
          <article className="qty select-none flex items-center w-fit my-2 gap-x-3">
            <span
              className="minus text-textXl bg-shadeSm cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out rounded-md px-3 py-2"
              onClick={() => {}}
            >
              <AiOutlineMinus
                onClick={() => toggleCartItemQuantity(item?._id, "dec")}
              />
            </span>
            <span className="num text-clampXs font-bold">{item?.quantity}</span>
            <span
              className="plus text-textXl bg-shadeXs cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out rounded-md px-3 py-2"
              onClick={() => {}}
            >
              <AiOutlinePlus
                onClick={() => toggleCartItemQuantity(item?._id, "inc")}
              />
            </span>
          </article>

          <button type="button" className=" text-red-500" onClick={() => {}}>
            <TiDeleteOutline
              className="text-clampMd"
              onClick={() => onRemove(item?._id)}
            />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem
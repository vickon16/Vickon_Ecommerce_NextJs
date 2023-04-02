import React, {useRef} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import {TiDeleteOutline} from "react-icons/ti";
import { toast } from 'react-hot-toast';
import { useStateContext } from '@/context/stateContext';
import { MyImage } from '@/lib/client';
import Link from 'next/link';
import { CartItem } from '.';
import getStripe from '@/lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, showCart, setShowCart} = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch(`/api/stripe`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({cartItems})
    })

    if (response.statusCode === 500) {
      console.log(response.message)
      return;
    };

    const data  = await response.json();
    toast.loading("Redirecting...");

    stripe.redirectToCheckout({sessionId : data.id})
  }

  return (
    <aside
      className={`cart-wrapper fixed ${
        showCart ? "right-[0%] opacity-100" : "right-[-100%] opacity-0"
      } top-0 bottom-0 w-full h-screen max-w-[500px] bg-shade2Xl z-[100] transition-all duration-200 ease-in-out`}
      ref={cartRef}
    >
      <div className="cart-container h-full flex flex-col py-[40px] px-[20px]">
        <button
          type="button"
          className="cart-heading flex items-center gap-x-3"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading font-semibold text-clampXs">Your Cart</span>
          <span className="cart-num-items text-emerald-200 text-sm">
            ({cartItems?.length} items)
          </span>
        </button>

        {cartItems?.length < 1 && (
          <aside className="empty-cart h-[50vh] flex items-center justify-center">
            <div className="flex flex-col gap-y-10 items-center mt-12 justify-center">
              <AiOutlineShopping size={100} />
              <h3 className="text-clampXs text-gray-400 font-light">
                ...Your Shopping bag is empty...
              </h3>
              <Link
                href="/"
                className="bg-shadeXs p-3 rounded-md hover:bg-shadeSm"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </Link>
            </div>
          </aside>
        )}

        <div className="product-container h-[65vh] overflow-y-scroll my-3 py-4 flex flex-col gap-y-3">
          {cartItems?.length >= 1 &&
            cartItems.map((item) => <CartItem key={item._id} item={item} />)}
        </div>

        {cartItems?.length >= 1 && (
          <article className="cart-bottom mt-auto">
            <div className="total flex items-center justify-between mb-8 px-3">
              <h3 className="text-clampSm font-semibold">SubTotal</h3>
              <h3 className="text-emerald-300 text-clampXs font-semibold">
                {totalQuantities} Qty
              </h3>
              <h3 className="text-emerald-500 text-clampMd font-bold">
                ${totalPrice}
              </h3>
            </div>
            <div className="btn-container flex items-center justify-center">
              <button
                type="button"
                className="w-[70%] p-3 font-semibold rounded-md hover: uppercase bg-emerald-500 text-clampXs hover:bg-emerald-600 transition-all duration-150 ease-out"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </article>
        )}
      </div>
    </aside>
  );
}

export default Cart
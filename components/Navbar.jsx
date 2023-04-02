import Link from 'next/link'
import {AiOutlineShopping} from "react-icons/ai"
import {Cart} from ".";
import { useStateContext } from '@/context/stateContext';

const Navbar = () => {
  const {setShowCart, cartItems} = useStateContext();
  return (
    <>
      <header className="navbar flex gap-3 px-[15px] bg-shadeXl shadow-md drop-shadow-md h-[90px] xs:h-[100px] mb-5 fixed top-0 left-0 right-0 z-[50]">
        <div className="navbar-container flex items-center justify-between w-full max-w-screen-3xl mx-auto">
          <Link
            href={`/`}
            className="logo text-clampMd text-shade2Xs font-semibold uppercase"
          >
            VikkySound Store
          </Link>
          <button
            type="button"
            className="cart-icon cursor-pointer relative border-none bg-shadeXs p-1 xs:p-2 rounded-md hover:scale-105 transition-all duration-200 ease-in-out"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping className="text-clampMd" />
            <span className="cart-item-qty absolute top-[-8px] right-[-8px] text-sm flex justify-center items-center bg-red-500 w-5 h-5 xs:w-6 xs:h-6 rounded-full text-center font-semibold">
              {cartItems?.length}
            </span>
          </button>
        </div>
      </header>
      <Cart />
    </>
  );
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '@/context/stateContext';
import Link from 'next/link';
import { runConfetti } from '@/lib/utils';

const Success = () => {
  const {resetState} = useStateContext();

  useEffect(() => {
    resetState();
    const timeout = setTimeout(() => runConfetti(), 1000)
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="success-wrapper min-h-[500px] flex items-center justify-center mx-auto ">
      <div className="success flex flex-col gap-y-6 justify-center items-center text-center w-full max-w-[700px] py-10 rounded-md shadow-lg drop-shadow-lg bg-shadeXl">
        <p className="icon">
          <BsBagCheckFill className="text-clampXl text-emerald-400" />
        </p>

        <h2 className="text-clampBase font-semibold capitalize">
          Thank you for your order
        </h2>
        <p className="email-msg text-clampXs text-gray-400">
          Check your email inbox for the reciept...
        </p>
        <p className="desc text-clampXs">
          If you have any questions, please email{" "}
          <a
            className="email text-shade2Xs text-clampXs"
            href="mailto:nkachukwuvictor2016@gmail.com"
          >
            @nkachukwuvictor2016@gmail.com
          </a>
        </p>
        <Link
          href={"/"}
          className="w-[250px] text-clampSm font-semibold hover:bg-emerald-600 rounded-md my-3 bg-emerald-500 py-4"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default Success
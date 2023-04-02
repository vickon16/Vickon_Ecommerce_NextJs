import Link from 'next/link';
import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer flex px-[20px] bg-shadeXl mt-8">
      <div className="footer-container flex flex-col text-center items-center h-64 justify-center gap-5 w-full max-w-screen-3xl mx-auto">
        <Link
          href={`/`}
          className="logo text-clampSm text-shade2Xs font-semibold uppercase"
          >
          VikkySound Store
        </Link>
        <aside className='flex gap-3'>
          <AiFillInstagram className='cursor-pointer text-clampLg' />
          <AiOutlineTwitter className='cursor-pointer text-clampLg' />
        </aside>
        <i className='tracking-wide text-sm text-textXs'>2023 VikkySound Store | All rights reserved</i>
      </div>
    </footer>
  );
}

export default Footer
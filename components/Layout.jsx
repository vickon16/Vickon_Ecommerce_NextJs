import Head from 'next/head';
import React from 'react'
import { Footer, Navbar } from '.';
import { Toaster } from 'react-hot-toast';
import { useStateContext } from '@/context/stateContext';

const Layout = ({children}) => {
  const {setShowCart} = useStateContext();

  return (
    <>
      <Toaster />
      <Navbar />
      <section className="max-w-screen-3xl mx-auto mt-[7.8rem]" onClick={() => setShowCart(false)}>
        <Head>
          <meta
            name="description"
            content="Ecommerce Website with nextjs, sanity and stripe"
          />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, ReactJS, Sanity, Stripe"
          />
          <meta name="author" content="Nkachukwu Victor" />
          <title>Vickonary Ecommerce | NextJs</title>
        </Head>
        <main>{children}</main>
      </section>
      <Footer />
    </>
  );
}

export default Layout
import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NotFoundsPage = () => {
  const title: string = `NotFound`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex flex-col gap-5 h-screen justify-center items-center text-3xl text-white'>
        <span>Sorry, Not Found</span>
        <Link href='/' className='p-2 border-b'>
          go to Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundsPage;

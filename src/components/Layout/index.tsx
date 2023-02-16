import React from 'react';
import Navbar from '../Navbar';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className='flex flex-col lg:w-5/6 md:w-full pl-2 pr-2'>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

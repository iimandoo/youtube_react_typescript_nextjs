import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <div className='flex  flex-col justify-center items-center w-full h-full gap-5 text-3xl'>
      <AiOutlineLoading3Quarters /> <span>로딩중입니다.</span>
    </div>
  );
}

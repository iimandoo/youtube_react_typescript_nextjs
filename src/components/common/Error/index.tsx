import React from 'react';
import { TbFaceIdError } from 'react-icons/tb';

export default function Error() {
  return (
    <div className='flex  flex-col justify-center items-center w-full h-full gap-5 text-3xl'>
      <TbFaceIdError /> <span>에러가 발생했습니다.</span>
    </div>
  );
}

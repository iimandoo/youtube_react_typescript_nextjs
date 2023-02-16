import React from 'react';
import Image, { ImageProps } from 'next/image';

const ImageAutoSize = ({ alt, ...props }: ImageProps): React.ReactElement => {
  return <Image alt={alt} width='0' height='0' sizes='100vw' className='w-full h-auto' {...props} />;
};

export default ImageAutoSize;

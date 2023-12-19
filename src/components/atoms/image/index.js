"use client"
import React, { memo, useState } from 'react';
import Image, { ImageProps } from 'next/image';
// import { SkeletonCardView } from '@/components/page/Rent/components/SkeletonCardView';


// eslint-disable-next-line react/display-name
const NextImage =  memo(({ src, alt, ...props }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {(loading || !src) 
      //  && <SkeletonCardView />
       }

      {src && <Image
        src={src}
        alt={alt}
        onLoadingComplete={() => {
          setLoading(false);
        }}
        {...props}
      />}
    </>
  );
});

export default NextImage;

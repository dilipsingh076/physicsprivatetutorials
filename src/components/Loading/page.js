// components/Loader.js

import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Loader = () => {
  return (
    <div>
      <h1>this is my loader....</h1>
      <Skeleton height={100} width={300} style={{ marginBottom: 20 }} />
      <Skeleton count={5} height={30} style={{ marginBottom: 10 }} />
      <Skeleton count={3} height={20} />
    </div>
  );
};

export default Loader;

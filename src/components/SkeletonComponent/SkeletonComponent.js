// components/SkeletonComponent.js

import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonComponent = ({ height, width, count }) => {
  return (
    <div>
      {count ? (
        <Skeleton count={count} height={height} style={{ marginBottom: 10 }} />
      ) : (
        <Skeleton height={height} width={width} style={{ marginBottom: 10 }} />
      )}
    </div>
  );
};

export default SkeletonComponent;

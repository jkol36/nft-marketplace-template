import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cn from 'classnames';

import ReactSkeleton from 'components/ReactSkeleton';
import styles from './LazyImage.module.sass';

const LazyImage = ({ className, imageClassName = '', src, width, height, circle, noEffect, ...rest }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={cn(styles.root, className)} style={{ width, height }}>
      <LazyLoadImage
        src={src}
        effect="opacity"
        beforeLoad={() => setLoading(true)}
        afterLoad={() => setLoading(false)}
        width='100%'
        height='100%'
        className={imageClassName}
        {...rest} />
      {loading && (
        <ReactSkeleton
          width='100%'
          height='100%'
          containerClassName={styles.skeletonContainer}
          circle={circle}
          className={styles.skeleton}
          style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default LazyImage;

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ReactSkeleton = props => {

  return (
    <Skeleton {...props} style={{ lineHeight: 2 }} />
  );
};

export default ReactSkeleton;

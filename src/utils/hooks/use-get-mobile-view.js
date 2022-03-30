import { useMedia } from 'react-use';

const useGetMobileView = () => {
  const isMobile = useMedia('(max-width: 762px)');

  return isMobile;
};

export default useGetMobileView;

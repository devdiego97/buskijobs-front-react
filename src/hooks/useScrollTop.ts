import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    scroll.scrollToTop({
      duration: 400,
    });
  }, [location.pathname]);
};

export default useScrollToTop;

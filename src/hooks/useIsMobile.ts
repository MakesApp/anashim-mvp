import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setMobile] = useState(width <= 768);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    if (width <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isMobile;
}

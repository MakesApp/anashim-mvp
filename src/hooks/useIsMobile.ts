import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768);
  console.log('====================================');
  console.log(isMobile);
  console.log('====================================');
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });

    return () => {};
  }, []);

  return isMobile;
}

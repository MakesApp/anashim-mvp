import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './styles.css';
import getLastAddedProducts from '@/utils/getLastAddedProducts';
import ProductCard from '@/components/ProductCard/ProductCard';

const AHA = () => {
  return (
    <Swiper
      spaceBetween={'8px'} // Set the space between slides to 8px
      slidesPerView={'auto'} // Adjust to 'auto' for flexible slide sizes
      centeredSlides={false} // Center the active slide
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {getLastAddedProducts().map((product, index) => {
        return (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AHA;

import { Swiper as SwiperLib, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './styles.css';
import getLastAddedProducts from '@/utils/getLastAddedProducts';
import ProductCard from '../ProductCard/ProductCard';

const Swiper = () => {
  return (
    <SwiperLib
      spaceBetween={'10px'} // Set the space between slides to 8px
      slidesPerView={'auto'} // Adjust to 'auto' for flexible slide sizes
      centeredSlides={false}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {getLastAddedProducts().map((product, index) => {
        return (
          <SwiperSlide key={index}>
            <ProductCard {...product} lastAdded={true} />
          </SwiperSlide>
        );
      })}
    </SwiperLib>
  );
};

export default Swiper;

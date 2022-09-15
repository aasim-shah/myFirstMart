// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Hero() {
  return (
    <>
     <Swiper
     modules={[ Pagination]}
     slidesPerView={1}
     pagination={{ clickable: true }}
 
    >
      <SwiperSlide className='slider'>Slide 1</SwiperSlide>
      <SwiperSlide className='slider'>Slide 2</SwiperSlide>
      <SwiperSlide className='slider'>Slide 3</SwiperSlide>
  
    </Swiper>
    </>
  );
}

export default Hero;

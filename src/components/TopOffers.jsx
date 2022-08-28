// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import axios from 'axios';
import {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import SkeltonCard from './SkeltonCard';


export default function TopOffers() {



    const [products, setProducts] = useState([]);

    // get data from api
      const getProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/');
        setProducts(res.data);
      }
    
    //useEffect is a hook that runs a piece of code based on a specific condition.
      useEffect(() => {
        getProducts();
      } , []);
    
    
  return (
    <>
  <div className="grid grid-cols-12">
    <div className="col-span-2 flex justify-center flex-col items-center py-3 bg-red-400">
    <p className="text-[2rem]">Top Offers</p>
        <div className="viewAll py-1 px-3 bg-violet-600 text-white font-bold rounded-[2rem] mt-4">View All</div>
    </div>
    <div className="col-span-10 ">
    <Swiper  className='w-11/12 hidden md:flex'
     spaceBetween={20}
     slidesPerView={5}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
    >
    {products && products.map((product)=>(
        <SwiperSlide className='top-offer-slide bg-gray-100 pb-2 rounded-md'>
       <div className="to-img mb-2">
        <img src={product.image} className='w-full h-40' alt="" />
       </div>
       <div className="to-title text-center ml-2 font-bold">
            <p className="text-sm ">Lorem ipsum dolor sit amet  </p>
        </div>
       <div className="to-price ml-4">
        <span>From</span>
        <span className='ml-2'> RS.3432</span>
       </div>
    </SwiperSlide>
    ))}
</Swiper>
    </div>
  </div>
    
    </>
  )
}

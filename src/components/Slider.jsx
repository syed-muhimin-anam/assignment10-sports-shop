import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider-2.png';
import slider3 from '../assets/slider-3.png';
import sliderbg from '../assets/slider-bg-1.png';
import sliderbg2 from '../assets/sliderbg-2.png';
import sliderbg3 from '../assets/sliderbg-3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/autoplay';
import { FaPlus } from 'react-icons/fa';

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination,  A11y,Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        className="w-full"
      >
        {/* First slide  */}
        <SwiperSlide className="flex items-center justify-center  h-[300px] relative">
          <div
            style={{
              backgroundImage: `url(${sliderbg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full flex justify-center items-center px-12  back"
          >
            
            <div className="grid md:grid-cols-4 items-center justify-center">
            <div className='space-y-2'>
              <h1 className='text-4xl'>New Tracksuit For Woman</h1>
              <p>Stay stylish and comfortable with our newest women's  tracksuit collection, designed for active lifestyle.</p>
            </div>  
              <img
                src={slider1}
                alt="Slider 1"
                className="mx-auto w-8/12  md:w-full col-span-2 h-auto rounded-md "
              />
              <div className='ml-5 space-y-2'>
                <h1 className='text-3xl'>Or you can buy the whole kit at once</h1>
                <div className='flex   items-center'>
                  <div className=' bg-orange-500 rounded-full w-10 text-black text-2xl flex justify-center items-center p-2'><FaPlus></FaPlus></div><p className='text-2xl'>Buy kit now</p>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second slide */}
        <SwiperSlide className="flex items-center justify-center  h-[300px] relative">
          <div
            style={{
              backgroundImage: `url(${sliderbg2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full flex justify-center items-center px-12"
          >
            
            <div className="grid md:grid-cols-4 items-center justify-center">
            <div className='space-y-2'>
              <h1 className='text-4xl'>Professional gym equipment</h1>
              <p>Unleash the power of professional equipment: elevate your performance with precision and expartise. Its your life.</p>
            </div>  
              <img
                src={slider2}
                alt="Slider 1"
                className="mx-auto w-full col-span-2 h-auto rounded-md "
              />
              <div className='ml-5 space-y-2'>
                <h1 className='text-3xl'>Or you can buy the whole kit at once</h1>
                <div className='flex   items-center'>
                  <div className=' bg-orange-500 rounded-full w-10 text-black text-2xl flex justify-center items-center p-2'><FaPlus></FaPlus></div><p className='text-2xl'>Buy kit now</p>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Third slide */}
        <SwiperSlide className="flex items-center justify-center  h-[300px] relative">
          <div
            style={{
              backgroundImage: `url(${sliderbg3})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full flex justify-center items-center px-12"
          >
            
            <div className="grid md:grid-cols-4 items-center justify-center">
            <div className='space-y-2'>
              <h1 className='text-4xl'>Weights of DIstribution</h1>
              <p>Efficiantly manage distribution weight: Streamline operation for optimal performance and result. Maximize performane.</p>
            </div>  
              <img
                src={slider3}
                alt="Slider 1"
                className="mx-auto w-full col-span-2 h-auto rounded-md "
              />
              <div className='ml-5 space-y-2'>
                <h1 className='text-3xl'>Or you can buy the whole kit at once</h1>
                <div className='flex   items-center'>
                  <div className=' bg-orange-500 rounded-full w-10 text-black text-2xl flex justify-center items-center p-2'><FaPlus></FaPlus></div><p className='text-2xl'>Buy kit now</p>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

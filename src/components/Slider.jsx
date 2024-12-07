import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
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
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000, // 2 seconds delay between slides
          disableOnInteraction: false, // Keep autoplay active after user interactions
        }}
        className="w-full"
      >
        {/* First slide with styled background and text */}
        <SwiperSlide className="flex items-center justify-center h-[300px] relative">
          <div
            style={{
              backgroundImage: `url(${sliderbg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center">
              <h1 className=" text-2xl mb-4">Hiiiiii</h1>
              <img
                src={slider1}
                alt="Slider 1"
                className="mx-auto lg:w-6/12 h-auto rounded-md "
              />
              <h1 className=" text-2xl mt-4">Halloooowww</h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Second slide */}
        <SwiperSlide className="flex items-center justify-center h-[300px]">
          <div
            style={{
              backgroundImage: `url(${sliderbg2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full flex justify-center items-center"
          >
            <img
              src={slider2}
              alt="Slider 2"
              className="mx-auto lg:w-6/12 h-auto rounded-md "
            />
          </div>
        </SwiperSlide>

        {/* Third slide */}
        <SwiperSlide className="flex items-center justify-center h-[300px]">
          <div
            style={{
              backgroundImage: `url(${sliderbg3})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full flex justify-center items-center"
          >
            <img
              src={slider3}
              alt="Slider 3"
              className="mx-auto lg:w-6/12 h-auto rounded-md "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

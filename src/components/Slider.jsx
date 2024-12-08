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
import { Fade } from 'react-awesome-reveal';

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
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
        {/* First Slide */}
        <SwiperSlide className="h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Fade>
            <div
              className="w-full flex justify-center items-center px-4 md:px-12"
              style={{
                backgroundImage: `url(${sliderbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="grid md:grid-cols-4 items-center">
                <div className="space-y-2 hidden md:block">
                  <h1 className="text-xl md:text-3xl lg:text-4xl">
                    New Tracksuit For Woman
                  </h1>
                  <p>
                    Stay stylish and comfortable with our newest women's tracksuit
                    collection, designed for an active lifestyle.
                  </p>
                </div>
                <img
                  src={slider1}
                  alt="Slider 1"
                  className="mx-auto w-10/12 md:w-full col-span-2 h-auto rounded-md"
                />
                <div className="ml-5 space-y-2 hidden md:block">
                  <h1 className="text-lg md:text-2xl lg:text-3xl">
                    Or you can buy the whole kit at once
                  </h1>
                  <div className="flex items-center">
                    <div className="bg-orange-500 rounded-full w-10 h-10 text-black text-2xl flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <p className="text-xl">Buy kit now</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Fade>
            <div
              className="w-full flex justify-center items-center px-12"
              style={{
                backgroundImage: `url(${sliderbg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="grid md:grid-cols-4 items-center">
                <div className="space-y-2 hidden md:block">
                  <h1 className="text-xl md:text-3xl lg:text-4xl">
                    Professional Gym Equipment
                  </h1>
                  <p>
                    Unleash the power of professional equipment: elevate your
                    performance with precision and expertise. It's your life.
                  </p>
                </div>
                <img
                  src={slider2}
                  alt="Slider 2"
                  className="mx-auto w-10/12 md:w-full col-span-2 h-auto rounded-md"
                />
                <div className="ml-5 space-y-2 hidden md:block">
                  <h1 className="text-lg md:text-2xl lg:text-3xl">
                    Or you can buy the whole kit at once
                  </h1>
                  <div className="flex items-center">
                    <div className="bg-orange-500 rounded-full w-10 h-10 text-black text-2xl flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <p className="text-xl">Buy kit now</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide className="h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Fade>
            <div
              className="w-full flex justify-center items-center px-4 md:px-12"
              style={{
                backgroundImage: `url(${sliderbg3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="grid md:grid-cols-4 items-center">
                <div className="space-y-2 hidden md:block">
                  <h1 className="text-xl md:text-3xl lg:text-4xl">
                    Weights of Distribution
                  </h1>
                  <p>
                    Efficiently manage distribution weight: streamline operations
                    for optimal performance and results.
                  </p>
                </div>
                <img
                  src={slider3}
                  alt="Slider 3"
                  className="mx-auto w-10/12 md:w-full col-span-2 h-auto rounded-md"
                />
                <div className="ml-5 space-y-2 hidden md:block">
                  <h1 className="text-lg md:text-2xl lg:text-3xl">
                    Or you can buy the whole kit at once
                  </h1>
                  <div className="flex items-center">
                    <div className="bg-orange-500 rounded-full w-10 h-10 text-black text-2xl flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <p className="text-xl">Buy kit now</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

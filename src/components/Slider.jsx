import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider-2.png';
import slider3 from '../assets/slider-3.png';
import sliderbg from '../assets/slider-bg-1.png';
import sliderbg2 from '../assets/sliderbg-2.png';
import sliderbg3 from '../assets/sliderbg-3.png';
import './Slider.css'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaPlus } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Slider = () => {
  const slides = [
    {
      bgImage: sliderbg,
      image: slider1,
      title: 'New Tracksuit For Woman',
      description:
        "Stay stylish and comfortable with our newest women's tracksuit collection, designed for an active lifestyle.",
    },
    {
      bgImage: sliderbg2,
      image: slider2,
      title: 'Professional Gym Equipment',
      description:
        'Unleash the power of professional equipment: elevate your performance with precision and expertise. It\'s your life.',
    },
    {
      bgImage: sliderbg3,
      image: slider3,
      title: 'Weights of Distribution',
      description:
        'Efficiently manage distribution weight: streamline operations for optimal performance and results.',
    },
  ];

  return (
    <div className="w-full mt-20  lg:mt-10">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full relative">
            <Fade>
              <div
                className="w-full h-full flex justify-center items-center px-4 md:px-12 relative"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 z-0"></div>

                {/* Content */}
                <div className="h-[300px] md:h-[300px] lg:h-[500px] grid grid-cols-1 md:grid-cols-3 items-center justify-center space-y-5 md:space-y-0 z-10 text-center md:text-left">
                  {/* Left Content */}
                  <div className="space-y-2 px-4 md:px-0 hidden md:block">
                    <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg">
                      {slide.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center items-center">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-contain rounded-md"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="space-y-2 px-4 md:px-0 hidden md:block ml-7">
                    <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold">
                      Or you can buy the whole kit at once
                    </h1>
                    <div className="flex justify-center md:justify-start items-center space-x-2">
                      <div className="bg-[#87c451] rounded-full w-10 h-10 text-black text-2xl flex justify-center items-center">
                        <FaPlus />
                      </div>
                      <p className="text-sm md:text-lg">Buy kit now</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

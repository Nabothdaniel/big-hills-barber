import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Img1 from '../assets/images/service1.jpg'
import Img2 from '../assets/images/service2.jpg'
import Img3 from '../assets/images/service3.jpg'
import Img4 from '../assets/images/service4.jpg'
import Img5 from '../assets/images/service5.jpg'

export default function OurWorks() {
  const works = [
    {
      title: "Classic Taper Fade",
      image: Img1,
    },
    {
      title: "Sharp Line Up",
      image: Img2,
    },
    {
      title: "Modern Afro Fade",
      image: Img4,
    },
    {
      title: "Curly High Top",
      image: Img5,
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="my-works">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          My Works
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white  mx-[2rem] w-[80%] shadow-md rounded-xl  cursor-pointer hover:shadow-xl transition">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="p-4 py-10 text-center ">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {work.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

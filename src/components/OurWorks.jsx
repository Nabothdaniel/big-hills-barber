import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Img1 from '../assets/images/hills-1.jpeg'
import Img2 from '../assets/images/hills-2.jpeg'
import Img3 from '../assets/images/hills-3.jpeg'
import Img4 from '../assets/images/hills-4.jpeg'
import Img5 from '../assets/images/hills-5.jpeg'
import Img6 from '../assets/images/hill-6.jpeg'
import Img7 from '../assets/images/hill7.jpeg'
import Img8 from '../assets/images/hills-8.jpeg'
import Img9 from '../assets/images/hills-9.jpeg'
import Img10 from '../assets/images/hills-10.jpeg'
import Img11 from '../assets/images/hills-11.jpeg'
import Img12 from '../assets/images/hills-12.jpeg'
import Img13 from '../assets/images/hills-13.jpeg'
import Img14 from '../assets/images/hills-14.jpeg'
import Img15 from '../assets/images/hills-15.jpeg'
import Img16 from '../assets/images/hills-16.jpeg'
import Img17 from '../assets/images/hills-17.jpeg'
import Img18 from '../assets/images/hills-18.jpeg'
import Img19 from '../assets/images/hills-19.jpeg'
import Img20 from '../assets/images/hills-20.jpeg'
import Img21 from '../assets/images/hills-21.jpeg'

export default function OurWorks() {
  const works = [
    {
      image: Img1,
    },
    {
      image: Img2,
    },
    {
      image: Img3,
    },
    {
      image: Img4,
    },
    {
      image: Img5,
    },
    {
      image: Img6,
    },
    {
      image: Img7,
    },
    {
      image: Img8,
    },
    {
      image: Img9,
    },
    {
      image: Img10,
    },
    {
      image: Img11,
    },
    {
      image: Img12,
    },
    {
      image: Img13,
    },
    {
      image: Img14,
    },
    {
      image: Img15,
    },
    {
      image: Img16,
    },
    {
      image: Img17,
    },
    {
      image: Img18,
    },
    {
      image: Img19,
    },
    {
      image: Img20,
    },
    {
      image: Img21,
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
                  className="w-full h-[24rem] object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

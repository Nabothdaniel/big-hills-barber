// src/components/Services.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const services = [
  {
    title: "Classic Haircut",
    description: "Precision cuts tailored to your style. Includes wash and style.",
    price: "$25",
    icon: "https://img.icons8.com/color/96/haircut.png",
  },
  {
    title: "Beard Trim",
    description: "Sharp lines and neat trims to keep your beard looking sharp.",
    price: "$15",
    icon: "https://img.icons8.com/color/96/beard.png",
  },
  {
    title: "Hot Towel Shave",
    description: "Relax with a traditional straight razor shave.",
    price: "$20",
    icon: "https://img.icons8.com/color/96/razor.png",
  },
  {
    title: "Kids Cut",
    description: "Stylish and friendly cuts for kids of all ages.",
    price: "$18",
    icon: "https://img.icons8.com/color/96/boy.png",
  },
];

const Services = () => {
  return (
    <section className="">
      <h2 className="my-[10rem] text-center text-2xl">Our Services</h2>
     <div className="md:my-28">
     <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        style={{marginBottom:"3rem"}}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="px-5 py-10 bg-white rounded-lg shadow-sm text-center">
              <img className="mx-auto" src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="price">{service.price}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </section>
  );
};

export default Services;

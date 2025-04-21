// src/components/Services.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import {  FaChevronRight } from "react-icons/fa";



//images import 
import Img1 from '../assets/images/hills-10.jpeg';
import Img2 from '../assets/images/hills-20.jpeg';
import Img3 from '../assets/images/barber4.jpg'
import Img4 from '../assets/images/barber-2.jpg';
import Img5 from '../assets/images/hill-6.jpeg';
import Banner1 from '../assets/banners/banner1.png';

const services = [
    {
        title: "Classic Haircut",
        description: "Precision cuts tailored to your style. Includes wash and style.",
        icon: Img1,
    },
    {
        title: "Beard Trim",
        description: "Sharp lines and neat trims to keep your beard looking sharp.",
        icon: Img2,
    },
    {
        title: "Hot Towel Shave",
        description: "Relax with a traditional straight razor shave.",
        icon: Img3,
    },
    {
        title: "Kids Cut",
        description: "Stylish and friendly cuts for kids of all ages.",
        icon: Img4,
    },
    {
        title: "Dread Locks",
        description: "Dread locks styling and maintenance.",
        icon: Img5,
    },
];

const Services = () => {
    return (
        <section className="relative py-20 bg-[#fefefe] text-center bg-no-repeat w-full bg-cover" id="services" style={{ backgroundImage: `url(${Banner1})` }}>
            {/*our word top */}
            <p className="absolute  top-[-2rem] z-10 left-[35rem] text-[7rem] font-bold  select-none">
                {"Our".split("").map((letter, index) => (
                    <span
                        key={index}
                        className="inline-block mr-[7rem] bg-gradient-to-r from-white to-amber-400 text-transparent bg-clip-text"
                    >
                        {letter}
                    </span>
                ))}
            </p>
           

            <p className="md:block hidden absolute bottom-[-2rem] z-10 left-[8rem] text-[7rem] font-bold  select-none">
                {"Services".split("").map((letter, index) => (
                    <span
                        key={index}
                        className="inline-block mr-[7rem] bg-gradient-to-r from-white to-amber-400 text-transparent bg-clip-text"
                    >
                        {letter}
                    </span>
                ))}
            </p>
            {/* Actual content sits above the background word */}
            <h2 className="relative block md:hidden z-10 text-3xl font-bold mb-10 text-white">Our Services</h2>

            <div className="relative z-10 flex justify-center">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-[300px] h-[400px]"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden dark:bg-primary dark:border-primary">
                                <a href="#">
                                    <img
                                        className="w-full h-48 object-cover mx-auto"
                                        src={service.icon}
                                        alt={service.title}
                                    />
                                </a>
                                <div className="p-4 sm:p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {service.title}
                                        </h5>
                                    </a>
                                    <p className="mb-4 font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">
                                        {service.description || "This service is top-rated among our clients."}
                                    </p>
                                    <a
                                        href="#contact-us"
                                        className="bg-[#ad987d] w-full text-amber-400 dark:text-white dark:hover:text-amber-400  inline-flex items-center justify-center gap-3 py-2 px-3 rounded-sm md:p-0 transition mx-auto  md:hover:bg-[#8e7d67] md:hover:duration-300 hover:bg-gray-700 md:text-white md:py-2 md:px-5 md:rounded-md md:shadow-sm duration-300"
                                    >
                                        Contact Us
                                        <FaChevronRight />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
};

export default Services;

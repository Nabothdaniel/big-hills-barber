import React from 'react'

import Barber from '../assets/images/big-hills.jpeg'

const AboutBigHills = () => {
    return (
        <section id="about" className=" bg-primary text-white py-20 px-6 ">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-2/5 flex justify-center">
                        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-secondary to-accent overflow-hidden shadow-xl">
                            <img src={Barber} alt="Daniel" className="w-full h-full object-cover grayscale hover:grayscale-0 cursor-pointer transition-all duration-500" />
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <p className="text-lg text-white mb-6 leading-relaxed">
                            I'm a master barber with over  <span className=" text-7xl md:text-[7rem] font-bold inline-block  bg-gradient-to-r from-white to-amber-400 text-transparent bg-clip-text">
                                4+
                            </span> years of experience delivering clean fades, sharp lineups, and precision cuts tailored to each client's unique style. My passion for barbering goes beyond the chair — it's about building confidence, one cut at a time.
                        </p>
                        <p className="text-lg text-white mb-8 leading-relaxed">
                            Whether it's a classic look or the latest trend, I combine skill, attention to detail, and top-tier service to make every visit memorable. At the heart of what I do is a deep respect for the craft and a commitment to keeping every client looking their absolute best.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBigHills

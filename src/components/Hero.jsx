import { FaChevronRight } from 'react-icons/fa';
import Img1 from '../assets/images/hills-12.jpeg';
import Img2 from '../assets/images/hill7.jpeg';
const Hero = () => {
    return (
        <div id='hero' className="relative h-auto md:h-[800px] w-full bg-cover  md:bg-cenetr bg-no-repeat py-20 gap-10 md:gap-5 px-5 md:px-28  md:py-18 flex flex-col md:flex-row justify-around items-center" style={{ backgroundImage: `url(${Img2})` }}>

            {/*overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm'></div>

            <div className='md:text-justify md:w-1/2 z-20' data-aos="fade-right" data-aos-delay="200">
                <h1 className=' text-center md:text-left text-7xl font-bold shadow-sm block md:hidden text-white mb-10'>Become the best version of your self</h1>
                <h1 className=' text-center md:text-left text-7xl hidden md:block font-bold shadow-sm text-white mb-10'>Become the best <br/> version of your self</h1>
                <div>
                    <p className='text-white'>More than a new haircut. This is your best haircut because we know how to make you look better. Entrust your hair to professionals to the culture of babering</p>
                    <a href='#my-works' className='my-10 px-3 py-4 rounded-sm text-white inline-flex items-center gap-3 bg-[#ad987d]'>See My Works <FaChevronRight className='w-5 h-5' /></a>
                </div>
            </div>
            <img
                src={Img1}
                alt="picture of man with beards"
                className=" hidden md:block rounded-full object-center shadow-lg h-[400px] w-[400px] object-cover"
                data-aos="fade-left"
                data-aos-delay="200"
            />
        </div>
    );
}

export default Hero;

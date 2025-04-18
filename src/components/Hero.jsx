import { FaChevronRight } from 'react-icons/fa';
import Img1 from '../assets/images/man1.jpg';
import Img2 from '../assets/images/man2.jpg';
const Hero = () => {
return (
    <div className="relative h-auto w-full bg-cover bg-center bg-no-repeat py-20 gap-10 md:gap-5 px-10 md:px-28  md:py-18 flex flex-col md:flex-row justify-around items-center" style={{ backgroundImage: `url(${Img2})`}}>

        {/*overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'></div>
        
        <div className='text-justify md:w-1/2 z-20'>
            <h1 className=' text-center md:text-left text-7xl font-bold shadow-sm text-white mb-10'>Become the best <br/> version of your self</h1>
           <div>
           <p className='text-white'>More than a new haircut. This is your best haircut because we know how to make you look better. Entrust your hair to professionals to the culture of babering</p>
           <a href='#' className='my-10 px-3 py-4 rounded-sm text-white inline-flex items-center gap-3 bg-[#ad987d]'>See My Works <FaChevronRight className='w-5 h-5'/></a>
           </div>
        </div>
        <img
            src={Img1}
            alt="picture of man with beards"
            className=" hidden md:block rounded-full object-center shadow-lg"
            style={{ height: '400px', width: '400px', objectFit: 'cover' }}
            
        />
    </div>
);
}

export default Hero;

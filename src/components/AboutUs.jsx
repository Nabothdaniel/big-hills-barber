import Barber from '../assets/images/hills-about.jpeg';
const AboutUs = () => {
    return (
        <div className='h-auto bg-primary p-10 md:px-0 md:py-20 flex flex-col md:flex-row  gap-3 md:gap-[5rem]' id='about'>
            <div>
                <img src={Barber} alt="man barbing" className='md:h-[600px] md:w-[200rem] object-cover' />
            </div>

            <div className="text-white md:mr-10 mt-5">
                <div className='inline-flex items-center gap-3 font-bold'>
                    <span className='text-3xl md:4xl'>---</span>
                    <h1 className='text-5xl my-2 '>About Us</h1>
                </div>
                <div>
                    <h1 className='text-4xl my-5'>Precision. Style. Confidence.</h1>
                    <p>we blend classic craftsmanship with modern style. More than just a haircut, we offer an experience — a place where tradition meets trend, and every client walks out feeling fresh and confident.</p>
                    <p className='my-5'>
                    With years of experience and a passion for precision, our barbers take the time to understand your style and deliver a cut that suits you perfectly. Whether it’s a clean fade, a sharp beard lineup, or a classic gentleman’s cut, we’ve got you covered.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

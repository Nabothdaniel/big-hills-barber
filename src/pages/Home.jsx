import AboutBigHills from "../components/AboutBigHills";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import OurWorks from "../components/OurWorks";
import Services from "../components/Services";
function Home() {
  return (
    <div className="">
     <Hero/>
     <AboutUs/>
     <OurWorks/>
     <Services/>
     <AboutBigHills/>
     <ContactUs/>
    </div>
  )
}

export default Home;

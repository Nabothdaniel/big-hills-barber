import AboutBigHills from "../components/AboutBigHills";
import AboutUs from "../components/AboutUS";
import ContactUs from "../components/ContactUs";
import Hero from "../components/hero";
import OurWorks from "../components/OurWorks";
import Services from "../components/Services";
function Home() {
  return (
    <div className="">
     <Hero/>
     <AboutUs/>
     <Services/>
     <AboutBigHills/>
     <OurWorks/>
     <ContactUs/>
    </div>
  )
}

export default Home;

import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import {  HiMenuAlt3,HiX } from "react-icons/hi";
import { BiHome, BiSkipPreviousCircle } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  let extra = 'md:bg-[#ad987d] text-white py-2 px-5 rounded-md shadow-sm';

  const NavLinks = [
    {
      link:'/',
      icon:<BiHome className="w-5 h-5 text-white"/>,
      text:'Home',
      isBtn:false
    },
    {
      link:'/services',
      icon:<MdDesignServices className="w-5 h-5 text-white"/>,
      text:'Services',
      isBtn:false
    },
    {
      link:'/about',
      icon:<FaUserTie className="w-5 h-5 text-white"/>,
      text:'About Us',
      isBtn:false
    },
    {
      link:'/my-works',
      icon:<BiSkipPreviousCircle className="w-5 h-5 text-white"/>,
      text:'My Works',
      isBtn:false
    },
    {
      link:'/Contact-us',
      icon:<BiSkipPreviousCircle className="w-5 h-5 text-white"/>,
      text:'Contact Us', 
      isBtn:true
    },
  ]

  // Reusable class for nav links
  const baseLinkClass =
    "block py-2 px-3 rounded-sm md:p-0 transition duration-200";
  const inactiveClass =
    "text-gray-900  md:hover:bg-transparent md:hover:text-amber-400 dark:text-white  dark:hover:text-amber-400";
  const activeClass =
    "bg-amber-500 text-white md:bg-transparent md:text-amber-400 dark:text-amber-400";

  return (
    <nav className="md:sticky top-0 left-0 right-0 bg-[#212123] border-[#212123]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Big Hills
          </span>
        </Link>

        {/* Toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <HiMenuAlt3 className="w-5 h-5" />
        </button>

        {/* Menu */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} z-[999] w-full md:block md:w-auto fixed inset-0  md:static`}
        >

          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute block md:hidden top-5 right-5 text-white text-2xl"
          >
            <HiX />
          </button>

       
          <ul className="flex flex-col items-center font-medium p-4 cursor-pointer md:p-0 mt-4 border rounded md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-primary border-primary">
          { NavLinks.map((link) =>(
          
          <li>
            <Link
              to={link.link} // Target section with ID "home"
              smooth={true} // Enables smooth scrolling
              offset={-70} // Optional: Adjust offset if needed
              duration={500} // Duration of the scroll
              className={`${baseLinkClass} ${inactiveClass} inline-flex items-center gap-2 ${link.isBtn && 'md:bg-[#ad987d] md:text-white md:py-2 md:px-5 md:rounded-md md:shadow-sm'}`}
              activeClass={activeClass} // Apply active class when the section is in view
            >
              {link.icon}
              {link.text}
            </Link>
          </li>
             ))}
        </ul>
     

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BiHome, BiBriefcaseAlt2 } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

//logo img
import HillsLogo from "../assets/images/hills-logo.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks = [
    {
      link: "#hero",
      icon: <BiHome className="w-5 h-5 text-white" />,
      text: "Home",
      isBtn: false,
    },
    {
      link: "#services",
      icon: <MdDesignServices className="w-5 h-5 text-white" />,
      text: "Services",
      isBtn: false,
    },
    {
      link: "#about",
      icon: <FaUserTie className="w-5 h-5 text-white" />,
      text: "About Us",
      isBtn: false,
    },
    {
      link: "#my-works",
      icon: <BiBriefcaseAlt2 className="w-5 h-5 text-white" />,
      text: "My Works",
      isBtn: false,
    },
    {
      link: "#contact-us",
      icon: <IoMailOutline className="w-5 h-5 text-white" />,
      text: "Contact Us",
      isBtn: true,
    },
  ];

  // Base styles
  const baseLinkClass =
    "block py-2 px-3 rounded-sm md:p-0 transition duration-200";
  const inactiveClass =
    "text-gray-900 md:hover:bg-transparent md:hover:text-amber-400 dark:text-white dark:hover:text-amber-400";
  const activeClass =
    "bg-amber-500 text-white md:bg-transparent md:text-amber-400 dark:text-amber-400";

  return (
    <nav id="home" className="sticky z-[999] top-0 left-0 right-0 bg-[#212123] border-[#212123]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ScrollLink to="home" smooth={true} duration={500} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <span className=" inline-flex  items-center gap-3 text-2xl font-semibold whitespace-nowrap text-white">
          <img src={HillsLogo} alt="big hils logo" className="h-10 w-10 rounded-full object-cover"/>
            Big Hills
          </span>
        </ScrollLink>

        {/* Toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <HiMenuAlt3 className="w-5 h-5" />
        </button>

        {/* Menu */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} z-[999] w-full md:block md:w-auto fixed inset-0 md:static`}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute block md:hidden top-5 right-5 text-white text-2xl"
          >
            <HiX />
          </button>

          <ul className="flex flex-col gap-5 md:gap-0 sm:py-5 md:py-0 md:items-center font-medium p-4 cursor-pointer md:p-0 mt-4 border rounded md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-primary border-primary">
            {NavLinks.map((link, index) => {
              const isLast = index === NavLinks.length - 1;
              return (
                <li key={link.text}>
                  <a
                    href={link.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      ${!isLast ? baseLinkClass : ""}
                      ${!isLast ? inactiveClass : ""}
                      inline-flex items-center gap-2 
                      ${link.isBtn ? "md:bg-[#ad987d] w-full text-amber-400 dark:text-white dark:hover:text-amber-400  block py-2 px-3 rounded-sm md:p-0 transition  md:hover:bg-[#8e7d67] md:hover:duration-300 hover:bg-gray-700 md:text-white md:py-2 md:px-5 md:rounded-md md:shadow-sm duration-300" : "hover:bg-gray-700 w-full duration-300"}
                    `}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

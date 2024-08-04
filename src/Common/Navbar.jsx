import React, { useEffect, useState } from "react";
import NavbarLinks from "../Data/NavData";
import logo from "../assets/Images/SMS-logo.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoChevronDown } from "react-icons/go";
import ServiceSubLink from "../Data/Sublinks/ServiceSublink";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Navbar = () => {
  const [isMobile, SetMobile] = useState(window.innerWidth < 1024);
  const [isMenuOpen, SetMenuOpen] = useState(false);
  // const [NavField , SetNavField] = useState([])

  // const ServiceSubLink = ["School Management Software" , "School Mobile App" , "E-Learning Software" , "WebSite Designing" , "Talking School Erp" , "CBSE Result Analysis"]

  useEffect(() => {
    const handleResize = () => {
      SetMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuHandler = () => {
    SetMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* navbar */}
      <div className=" flex flex-col fixed w-full z-40">

        {/* top-Navbar */}
        <div className="lg:block hidden">
        <div className=" flex justify-between items-center border-b border-richblack-25 bg-white px-4 py-2">
          <div className="flex xl:gap-x-3 z-30 lg:gap-x-1">
            <div className=" rounded-full bg-white px-1 py-1 border cursor-pointer transition-all duration-200 hover:bg-blue-100 ">
              <CiFacebook className=" text-3xl text-blue-500 p-1" />
            </div>
            <div className=" rounded-full bg-white px-1 py-1 border cursor-pointer transition-all duration-200 hover:bg-blue-100">
              <FaTwitter className=" text-3xl p-1 " />
            </div>
            <div className=" rounded-full bg-white px-1 py-1 border cursor-pointer transition-all duration-200 hover:bg-pink-100">
              <FaInstagram className=" text-3xl text-pink-800 p-1" />
            </div>
            <div className=" rounded-full bg-white px-1 py-1 border cursor-pointer transition-all duration-200 hover:bg-rose-100">
              <FaPinterestP className=" text-3xl text-rose-700 p-1" />
            </div>
            <div className=" rounded-full  bg-white px-1 py-1 border cursor-pointer transition-all duration-200 hover:bg-red-100">
              <FiYoutube className=" text-3xl text-red-800 p-1" />
            </div>
          </div>

          <div>
            <p className=" text-richblack-800 font-semibold lg:px-4">Learn how SMS perfectly fits in your remote work journey. 
            <span className="text-red-800 underline cursor-pointer">Learn More</span>
            </p>
          </div>

          <div>
          <a href="tel:+704 279129" className="text-richblack-800 font-semibold ">Call <span className="text-blue-700">+704 279129</span></a>

          </div>
        </div>
        </div>
        

        {/*lower navbar  */}
        <div className="  flex justify-center ">
          <div className="   shadow-md bg-white  h-fit  border-richblack-100 flex justify-between items-center w-full px-6  py-3 z-30 ">
            <img
              src={logo}
              width={70}
              alt="logo"
              className=" ml-3 cursor-pointer"
            />
            <nav>
              <ul className="flex  xl:gap-x-12 gap-x-5 cursor-pointer">
                {NavbarLinks.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={` font-inter font-medium text-richblack-700 transition-all duration-200 hover:text-yellow-700 lg:block  hidden  ${
                        isMobile && isMenuOpen ? "block" : "hidden"
                      } `}
                    >
                      <Link to={item?.path}>
                        <div className=" relative group flex items-center gap-x-1">
                          {/* title */}
                          {item?.title}

                          {/* Services */}
                          {item?.title === "Services" && (
                            <>
                              <div className="invisible absolute top-[100%]  z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white shadow-md  text-richblack-900 opacity-0  transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-white"></div>
                                {ServiceSubLink.map((Service, index) => {
                                  return (
                                    <Link to={Service?.path} key={index}>
                                      <div className=" font-inter  font-semibold text-richblack-500  w-full border-b p-4 border-richblack-100 ">
                                        {Service?.title}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <GoChevronDown />
                            </>
                          )}

                          {/* About US */}
                          {item?.title === "About Us" && (
                            <>
                              <div className="invisible absolute top-[100%]  z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white shadow-md  text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-white"></div>
                                {ServiceSubLink.map((Service, index) => {
                                  return (
                                    <Link to={Service?.path} key={index}>
                                      <div className=" font-inter  font-semibold text-richblack-500  w-full border-b p-4 border-richblack-100 ">
                                        {Service?.title}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <GoChevronDown />
                            </>
                          )}

                          {/* Blogs */}
                          {item?.title === "Blogs" && (
                            <>
                              <div className="invisible absolute top-[100%]  z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white shadow-md  text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-white"></div>
                                {ServiceSubLink.map((Service, index) => {
                                  return (
                                    <Link to={Service?.path} key={index}>
                                      <div className=" font-inter  font-semibold text-richblack-500  w-full border-b p-4 border-richblack-100 ">
                                        {Service?.title}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <GoChevronDown />
                            </>
                          )}

                          {/* Solution */}
                          {/* {
                    item?.title === "Solution" && (
                    <>
                    <div className="invisible absolute top-[100%]  z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white shadow-md  text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-white">
                      </div>
                    {ServiceSubLink.map((Service,index) => {
                      return(
                        <Link to={Service?.path} key={index}>
                        <div  className=' font-inter  font-semibold text-richblack-500  w-full border-b p-4 border-richblack-100 '>
                        {Service?.title}
                        </div>
                        </Link>
                      )
                    })}
                    </div>
                    <GoChevronDown/>
                    </>
                    
                    
                  )  } */}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              className="lg:hidden md:block block bg-green-400 px-4 py-4 rounded-full mr-2 transition-all duration-200 hover:scale-95"
              onClick={menuHandler}
            >
              <IoMdMenu />
            </button>
            <button
              className="text-red lg:block md:hidden hidden relative h-[50px] w-40 overflow-hidden border border-yellow-100 bg-white px-3 text-yellow-700
         font-semibold rounded-md shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-300 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-50 hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile phone nav-bar */}
      {isMenuOpen && isMobile ? (
        <div className={`flex flex-col  items-end transition-all duration-200`}>
          <div className=" fixed z-30 top-24 right-14 bg-richblack-700 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded"></div>
          <div className=" fixed  top-24  z-[999]  w-[150px] flex flex-col rounded-lg bg-white shadow-md  transition-all duration-150  lg:w-[300px]">
            <ul className=" flex flex-col gap-y-2 py-2 ">
              {isMenuOpen &&
                isMobile &&
                NavbarLinks.map((item, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className={`  flex justify-center items-center text-richblack-900 px-3  `}
                      >
                        <div className="flex">
                          <div className=" ">
                            {item?.title === "Services" ? (
                              <details className="text-black">
                                <summary>{item?.title}</summary>
                                <p>
                                  {ServiceSubLink.map((Service, index) => {
                                    return (
                                      <Link to={Service?.path} key={index}>
                                        <div className=" font-inter text-sm  font-semibold text-richblack-500  w-full border-b p-1 border-richblack-100 ">
                                          {Service?.title}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </p>
                              </details>
                            ) : item?.title === "About Us" ? (
                              <details className=" text-black">
                                <summary>{item?.title}</summary>
                                <p>
                                  {ServiceSubLink.map((Service, index) => {
                                    return (
                                      <Link to={Service?.path} key={index}>
                                        <div className=" font-inter text-sm  font-semibold text-richblack-500  w-full border-b p-1 border-richblack-100 ">
                                          {Service?.title}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </p>
                              </details>
                            ) : item?.title === "Blogs" ? (
                              <details className=" text-black">
                                <summary>{item?.title}</summary>
                                <p>
                                  {ServiceSubLink.map((Service, index) => {
                                    return (
                                      <Link to={Service?.path} key={index}>
                                        <div className=" font-inter text-sm  font-semibold text-richblack-500  w-full border-b p-1 border-richblack-100 ">
                                          {Service?.title}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </p>
                              </details>
                            ) : (
                              item?.title
                            )}
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;

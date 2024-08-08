// import React from "react";
// import { Link } from "react-router-dom";

// // Images
// import Logo from "../assets/Images/SMS-logo.png";

// // Icons
// import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
// const Resources = [
//   "E-Learning Software",
//   "Online Classes",
//   "Payment Gateway",
//   "School Mobile App",
//   "Finance Management",
//   "Fee Management",
//   "Visitor Management",
//   "Student Information",
//   "Admission Management",
//   "Exam Proctoring",
//   "Transport App",
//   "HR Management",
//   "Biometric Integration",
//   "GPS & Bus Tracking",
//   "Library Management",
//   "Staff Payroll",
//   "Digital Content",
//   "RFID System",
// ];
// // const Plans = ["Paid memberships", "For students", "Business solutions"];
// // const Community = ["Forums", "Chapters", "Events"];

// const   Footer = () => {
//   return (
//     <div className="bg-richblack-800">
//       <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-500 leading-6 mx-auto relative py-14">
//         <div className="border-b w-[100%] flex flex-col justify-center lg:flex-row pb-5 border-richblack-700">
//           {/* Section 1 */}
//           <div className="lg:w-[70%] flex  flex-row justify-between  pl-3 lg:pr-5 gap-3">
//             <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
//               <img src={Logo} alt="" className="object-contain w-[60%] mb-3" /> 
//               <h1 className="text-richblack-500 font-semibold text-[16px]">
//                 Company
//               </h1>
//               <div className="flex flex-col gap-2">
//                 {["About", "Careers", "Affiliates"].map((ele, i) => {
//                   return (
//                     <div
//                       key={i}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.toLowerCase()}>{ele}</Link>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="flex gap-3 text-lg">
//                 <FaFacebook />
//                 <FaGoogle />
//                 <FaTwitter />
//                 <FaYoutube />
//               </div>
//               <div></div>
//             </div>

//             {/* resources */}
//             <div className="w-[60%] md:w-[90%] mb-7 lg:pl-0">
//               <h1 className="text-richblack-500 font-semibold text-[16px]">
//                 Services
//               </h1>

//               <div className=" grid grid-rows-5 md:grid-cols-4 grid-cols-2 md:gap-x-11 md:gap-y-4 gap-4 mt-4">
//                 {Resources.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] md:w-[130%]  cursor-pointer hover:text-richblack-900 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()} className=" w-fit">
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* support */}
//               {/* <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
//                 Support
//               </h1>
//               <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
//                 <Link to={"/help-center"}>Help Center</Link>
//               </div> */}


//             </div>

//             {/* plans */}
//             {/* <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
//               <h1 className="text-richblack-50 font-semibold text-[16px]">
//                 Plans
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {Plans.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>

//               community
//               <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
//                 Community
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {Community.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div> */}
//           </div>

//         </div>
//       </div>

//       <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
//         {/* Section 1 */}
//         <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
//           <div className="flex flex-row">
//             {BottomFooter.map((ele, i) => {
//               return (
//                 <div
//                   key={i}
//                   className={` ${
//                     BottomFooter.length - 1 === i
//                       ? ""
//                       : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                   } px-3 `}
//                 >
//                   <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
//                     {ele}
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="text-center">Made with ❤️ LiveUpX Pvt Ltd © 2024</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// Images
import Logo from "../assets/Images/SMS-logo.png";

const Footer = () => {
  const companyLinks = ["About", "Careers", "Affiliates"];
  const quickLinks = ["Privacy Policy", "Cookie Policy", "Terms"];
  const services = [
    "Digital Learning Platform", "Virtual Classroom", "Secure Payment Solutions", "School Mobile Application", "Financial Management", "Tuition Management", "Visitor Tracking System", "Student Information System", "Enrollment Management", "Online Exam Monitoring", "Transportation Management", "Human Resources Management", "Biometric Authentication", "GPS & Bus Tracking", "Library Administration", "Employee Payroll Management", "Digital Educational Content", "RFID Tracking System"
  ];

  const helpCenter = [
    "Discord Server",
    "Twitter",
    "Facebook",
    "Contact Us"
  ]

  return (
    <div className="bg-gray-800 text-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="flex sm:flex-row flex-col gap-8 justify-center  items-start ">
          {/* Company Info */}
          <div className="flex flex-col gap-4 lg:w-1/4">
            <img src={Logo} alt="Logo" className="object-contain w-32 mb-3" />
            <h1 className="text-lg font-semibold">Company</h1>
            <div className="flex flex-col gap-2">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm hover:text-gray-400 transition duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 text-2xl mt-4">
              <FaFacebook className="hover:text-blue-600 transition duration-200 cursor-pointer" />
              <FaGoogle className="hover:text-red-600 transition duration-200 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 transition duration-200 cursor-pointer" />
              <FaYoutube className="hover:text-red-700 transition duration-200 cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 md:w-[60%] md:border-r  border-gray-700">
            <h1 className="text-lg font-semibold">Services</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/${service.split(" ").join("-").toLowerCase()}`}
                  className="text-sm hover:text-gray-400 transition duration-200 "
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Help center */}
          <div className="flex flex-col gap-4 md:w-[30%]">
            <h1 className="text-lg font-semibold">Help Center</h1>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {helpCenter.map((service, index) => (
                <Link
                  key={index}
                  to={`/${service.split(" ").join("-").toLowerCase()}`}
                  className="text-sm hover:text-gray-400 transition duration-200"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          

        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={`/${link.split(" ").join("-").toLowerCase()}`}
                className="text-sm hover:text-gray-400 transition duration-200"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="text-center mt-4 lg:mt-0">
            Made with ❤️ by LiveUpX Pvt Ltd © 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


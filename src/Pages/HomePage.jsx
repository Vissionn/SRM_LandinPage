import React, { useEffect } from 'react'
// import Banner from "../assets/Images/Banner.mp4"
// import { CardData } from '../Data/CardsData'
// import SchoolImg from "../assets/Images/Schoolimg.png"
import { Services} from "../Data/Services"
// import {RightSideService} from "../Data/Services"
import CommonBtn from '../Common/CommonBtn'
import Footer from '../Common/Footer'
// import whySmsLogo from "../assets/Images/why sms.png"
// import implementationPhase from "../assets/Images/working-process.png"
import school from "../assets/Images/school.jpeg"
import { IoIosArrowRoundForward } from "react-icons/io";
// import ContactForm from '../Common/ContactForm'
import { Link, useNavigate } from 'react-router-dom'
 import boyOnline from "../assets/Images/covid-education.jpg"
 import ManLaptop from "../assets/Images/man-with-laptop.jpeg"
 import Data from '../Data/SectionThirdData'
 import * as Icons from "react-icons/fa"
 import man from "../assets/Images/dedicated.jpg"
 import gaol from "../assets/Images/goal.png"
 import history from "../assets/Images/history.png"
import ExploreMore from '../core/ExploreMore'
import AOS from "aos";
import 'aos/dist/aos.css';
import TallyForm from '../Common/TallyForm'

const HomePage = () => {

  // const navigate = useNavigate()

useEffect(() => {
  AOS.init({
    duration: 2000, // animation duration in ms
    once: false, // whether animation should happen only once
  });
},[])
    
  


  return (
    <div className="">
       {/* herosection */}
        <div className="flex lg:flex-row md:flex-row flex-col  justify-around mt-28 py-8 md:px-16 mx-auto lg:gap-x-16
            xl:h-[600px] w-full">
        {/* <video
            muted
            loop
            autoPlay
            width={1800}
            className="rounded-lg"
          >
            <source src={Banner} type="video/mp4"/>
          </video> */}
          <div className='xl:w-[40%] lg:w-full md:w-[70%] flex flex-col gap-y-6 md:items-start items-center md:justify-center '>
          <h1 className=' xl:text-5xl md:text-4xl text-3xl font-bold font-inter lg:w-full w-fit px-6 md:px-0  text-richblack-900'>Start Learning and Define Your Future</h1>
          <p className='w-[90%] text-md font-semibold font-inter text-richblack-600  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          <div className='flex gap-x-4'>
          <Link to="/about-us">
          <button className='rounded-full px-3 py-2 bg-green-700 border  border-green-200 text-white hover:text-white transition-all duration-200  hover:scale-95'>Learn More
          </button>
          </Link>
          
       
          <Link to="/contact-us">
            <button className='flex items-center gap-x-1 rounded-full px-3 py-2 text-red-500 text-center  bg-white border border-richblack-800 font-semibold hover:text-richblack-800 transition-all duration-200  hover:scale-95'>
            Get Started
            <IoIosArrowRoundForward/>
            </button>
          </Link>
         
          </div>
         
          </div>

          <div className='flex lg:gap-x-6 lg:px-8 md:w-fit mt-6 '>

          <div className=' mb-10 md:w-fit w-full flex justify-center '>
          <img src={boyOnline} alt='boyonline' width={250}  className=' lg:rounded-full rounded-lg lg:h-full h-full md:object-cover shadow-lg '/>
          </div>

          <div className='mt-16'>
          <img src={ManLaptop} alt='manlaptop' width={250}  className='lg:block hidden rounded-full lg:h-full h-[70%] object-cover mt-5 shadow-lg'/>
          </div>
          
          
          
          </div>
        
         
         
        </div>

        {/* section 2 */}
        {/* <div className='flex justify-center'>
        <div className=' relative lg:bottom-44 z-20 grid lg:grid-cols-4 grid-cols-2 place-content-center place-items-center justify-center w-[50%] gap-8 gap-x-28'>
        {
          CardData.map((card , index) => {
            return(
              <div key={index} className=' rounded-xl bg-white flex flex-col gap-y-1 items-center justify-center py-3 px-8 max-w-[150px] h-[200px] shadow-lg '>
                <img src={card?.icon} alt='Customer Satisfaction' width={100}/>
                <h1 className='text-2xl font-mono font-bold'>{card?.value}</h1>
                <span className='w-18 text-center'>{card?.desc}</span>
              </div>
            )
          })
        }
        </div>
        </div> */}

        {/* section 3 */}
        <div className='flex flex-col items-center justify-center lg:mt-0 mt-10 bg-smoke shadow-sm '>

        {/* heading */}
        <div className='flex flex-col justify-center items-center gap-y-2 mb-7 mt-7'>    
       
        <h1 className=' text-4xl text-center font-Inter font-semibold '>School ERP Management Software</h1>
        <p className=' text-lg font-inter md:w-full px-1 text-center text-richblack-800'>Most Affordable Self-Hosted School Management System Software. There is No Monthly/Yearly Charges</p>
        </div>
    
        {/* <div className='flex gap-x-5 mb-2 '> */}
        {/* left cards */}
        {/* <div className=' px-3 py-6 flex flex-col gap-y-8 justify-center'>
          {leftSideService.map((service , index) => {
            return(
              <div key={index} className='flex lg:flex-row flex-col gap-x-2 rounded-3xl border py-2 lg:px-10 shadow-md items-center bg-white lg:w-fit w-full lg:h-fit h-[80%] lg:p-0 p-4'>
              <div>
                <img src={service?.icon} alt='serviceIcon' width={110} />
              </div>
              <div className=' flex flex-col gap-y-3'>
              <h1 className=' text-xl font-edu-sa '>{service?.heading}</h1>
              <p className=' text-base font-inter '>{service?.desc}</p>
              <div className=' mb-1'>
              <CommonBtn text={service?.btntext} navigate={navigate} />
              </div>
              
              </div>
              </div>
            )
          })}
        </div> */}
        {/* School Image */}
        {/* <div className=' max-w-fit flex items-center'>
        <img src={SchoolImg} width={1000} alt='SchoolImg' className=' bg-white rounded-full py-24 px-5  lg:block hidden'/>
        </div> */}
        
        {/* Right Cards */}
        {/* <div className=' px-3 py-6 flex flex-col justify-center gap-y-8'>
        {RightSideService.map((service , index) => {
            return(
              <div key={index} className='flex lg:flex-row flex-col gap-x-2 rounded-3xl border py-2 lg:px-10 shadow-md items-center bg-white lg:w-fit lg:h-fit h-[80%] lg:p-0 p-4'>
              <div>
                <img src={service?.icon} alt='serviceIcon' className='text-lg' width={110}/>
              </div>
              <div className=' flex flex-col gap-y-3'>
              <h1 className=' text-xl font-edu-sa '>{service?.heading}</h1>
              <p className=' text-base font-inter '>{service?.desc}</p>
              <div className=' mb-1'>
              <CommonBtn text={service?.btntext} navigate={navigate}/>
              </div>
              </div>
              </div>
            )
          })}
        </div> */}
        {/* </div> */}

        <div>
          {Data.map((section,index) => {
            return(
              <div key={index} className={`flex md:flex-row flex-col ${section?.count % 2 == 0 ? " md:flex-row-reverse flex-col" : " md:flex-row flex-col"} justify-center items-center mx-auto w-11/12 py-10`}>

              <div className='flex gap-x-4 md:w-[50%] items-start'>
              <span className=' rounded-full px-5 py-3 bg-blue-300 w-fit text-4xl shadow-md'>{section?.count}</span>
              <div className='flex flex-col gap-y-3 md:w-fit'>
                <h1 className=' text-2xl font-semibold font-inter '>{section?.heading}</h1>
                <p className='font-smibold font-inter text-md text-richblack-600 w-[90%]'>{section?.desc}</p>
              </div>

              </div>

              <div className='md:w-[20%] md:mt-0 mt-2' data-aos="fade-up">
                <img src={section?.icon} alt='section' className=' shadow-lg' />
              </div>
              </div>
            )
          })}
        </div>

        
        </div>


        {/* Section 4 -Implementation */}

        <div className=' bg-white flex items-center justify-center flex-col gap-y-12 py-7'>
          <h1 className=' lg:text-4xl text-3xl font-inter mt-4 font-semibold text-center'>Eerything You Need to Manage Your School</h1>
          <img src={school} alt='school' data-aos="fade-in"/>
          <div className=' grid grid-cols-2 md:grid-cols-4 gap-10 p-4 '>
          {Services.map((service,index) => {
            const Icon = Icons[service?.icon]
            return(
              <div key={index} className=' cursor-pointer '>
              <Link to={service?.path} className='flex flex-col items-center gap-y-2'>
              <figure className=' text-blue-500 text-4xl transition-all duration-150 hover:-translate-y-1'>
                <Icon/>
              </figure>
              <span className=' font-medium text-richblack-700'>{service?.name}</span>
              </Link>
          
              
              </div>
            )
          })}
          </div>
          
        </div>

        {/* Section 5- Why SMS */}
        <div className='flex lg:flex-row flex-col gap-y-4 gap-x-1 bg-smoke py-12 px-10 items-center justify-evenly lg:text-balance text-center h-fit lg:h-[400px] mt-24 shadow-xl'>

        {/* Left Card Section */}
        <div className='flex flex-col gap-y-16'>

        <div className='flex flex-col gap-y-2'>
        <h1 className=' text-3xl md:text-4xl leading-8 font-inter text-richblack-700 font-semibold'> We Are Fully Dedicated To Support</h1>
        <p className=' text-richblack-600 font-medium'>There's this notion that to grow a business, you have to be rutless But we know there's a better way to grow</p>
        </div>
        
        <div className='flex flex-col gap-y-9'>
        {/* card 1 */}
        <div className='flex gap-x-8 '>
          <figure className='w-full md:w-fit'>
            <img src={gaol} alt='goal' />
          </figure> 
          <div className='flex flex-col gap-y-2 items-start'>
            <h1 className='font-medium text-2xl'>Our Mission</h1>
            <p className=' text-start text-richblack-600 font-inter xl:w-[90%]'>Ryun ipsum dolor sit ametconsecteturing elit sed do eiusmod tempor incididunt laboret dolore magna aliqua minaquaerat.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex gap-x-8'>
          <figure className='w-full md:w-fit'>
            <img src={history} alt='history'/>
          </figure>
          <div className='flex flex-col gap-y-2 items-start'>
            <h1 className='font-medium text-2xl'>Our Story</h1>
            <p className='text-start  text-richblack-600 font-inter xl:w-[90%]'>Ryun ipsum dolor sit ametconsecteturing elit sed do eiusmod tempor incididunt laboret dolore magna aliqua minaquaerat.</p>
          </div>
        </div>

        </div>
       
        </div>

        {/* Right - Image Section */}
        <div>
        <img src={man} alt='man' className=' lg:border-gray-400 rounded-full shadow-md ' data-aos="fade-left"/>
        </div>
        
        
        </div>
        <div className=' h-[50px] shadow-lg px-4 py-3 bg-richblack-50'></div>

           {/* section 6 */}
           <div className=' mt-14 py-5  flex justify-center' >
           <ExploreMore />
           </div>
           

        {/* Section-7 Get In Touch */}
        <div className=' flex flex-col gap-y-6 justify-center items-center px-3 bg-smoke py-20 mx-auto'>
        <h1 className='  text-4xl font-inter font-semibold'>Get in Touch Now</h1>
        <div className=' md:w-[60%] lg:w-full'>
        <TallyForm/>
        </div>
        
        </div>
        

        {/* Footer */}
        <Footer/>
        
    </div>


  
  )
}

export default HomePage
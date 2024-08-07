import React, { useEffect, useState } from 'react'
import {HomePageExplore} from "../Data/HomePageExplorer"
import AOS from "aos";
import 'aos/dist/aos.css';
import {motion} from "framer-motion"

const ExploreMore = () => {

    const tabName = ["Interface","Security","Support","Accessibility","Migrations","Communication","Paperless"]
    const [currentTab , SetCurrentTab] = useState(tabName[0])
    const [Card , SetCard] = useState(HomePageExplore[0].Card)
    
    const SetmyCard =(tab) => {
      SetCurrentTab(tab)
      const result = HomePageExplore.filter((card) => card?.tag == tab) 
      SetCard(result[0]?.Card)
    }

    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration in ms
            once: false, // whether animation should happen only once
          });
    },[])

    useEffect(() => {
      AOS.refresh();
    },[Card])
  

  return (
    <div className=' py-10'>
      <div className="flex flex-col rounded-md md:flex-row md:gap-x-2 gap-5 text-richblack-200 items-center bg-richblack-50  mx-auto w-max  md:p-1 py-2  lg:rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25) ">
        {tabName.map((tab, index) => {
          return (
            <span
              key={index}
              className={`text-base lg:px-7 lg:py-[7px] px-3 py-2 rounded-full shadow-lg transition-all duration-200 cursor-pointer hover:bg-richblack-800 hover:text-richblack-5 ${
                currentTab === tab
                  ? "bg-richblack-800 text-richblack-5 font-medium"
                  : " text-richblack-600"
              }`}
              onClick={() => SetmyCard(tab)}
            >
              {tab}
            </span>
          );
        })}
      </div>

      
        <motion.div key={Card.heading} 
        initial={{opacity:0}} animate={{opacity:1}} className= {`flex md:flex-row flex-col-reverse items-center md:justify-center max-w-[70%] mx-auto mt-14 rounded-lg shadow-lg`}>
          <div className=" flex flex-col md:items-start md:w-[80%] xl:w-[80%] gap-y-4 px-8">
            <h1 className=" text-4xl font-medium font-inter px-8 md:px-0" data-aos="fade-down">{Card.heading}</h1>
            <p className=" md:w-[80%] w-full text-richblack-600 text-lg px-8 md:px-0 py-8 md:py-0" data-aos="zoom-in-up">
              {Card.description}
            </p>
          </div>

          <motion.div  className=" md:w-[40%] py-4 ">
            <img src={Card.img} width={1500} alt='Card' data-aos="zoom-in" />
          </motion.div>
        </motion.div>
      

    </div>
  );
}

export default ExploreMore
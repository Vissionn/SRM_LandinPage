import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const CommonBtn = ({text,custom,linkto}) => {
  const navigate = useNavigate()
  return (
    <div>
        <button className= {`rounded-full px-3 py-2 text-red-500 text-center flex gap-x-1 items-center border border-red-600 
         transition-all duration-200 hover:text-richblack-500 hover:scale-95 ${custom} `} onClick={() => {navigate(linkto)}}>
        {text}
        <IoIosArrowRoundForward/>
        </button>
    </div>
  )
}

export default CommonBtn
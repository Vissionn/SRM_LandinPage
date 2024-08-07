import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {register,handleSubmit,formState:{errors}} = useForm()

  const SubmitHandler = (Data) => {
    console.log(Data);
  }

  return (
   
      <form onSubmit={handleSubmit(SubmitHandler)}>
      <div className=' flex flex-col gap-y-8 h-fit border px-3 py-6 bg-white shadow-md rounded-lg '>
     <div className='flex lg:flex-row flex-col gap-x-4'>
       {/* First Name */}
       <div className='flex flex-col gap-y-1'>
        <label className=' font-inter text-lg'>First Name:</label>
        <input
          type='text'
          id='firstname'
          placeholder='Enter first Name'
          className='form-style'
          {...register("FirstName",{required:true})}
        />
        {errors.FirstName && <span className=' text-yellow-600'>First Name Field is Required</span>}
      </div>

      {/* last name */}
      <div className='flex flex-col gap-y-1'>
        <label className=' font-inter text-lg'>Last Name:</label>
        <input
          type='text'
          id='LastName'
          placeholder='Enter Last Name'
           className='form-style'
          {...register("LastName",{required:true})}
        />
        {errors.LastName && <span className=' text-yellow-600'>Last Name Field is Required</span>}
      </div>
     </div>

      {/* Email */}
      <div className='flex flex-col gap-y-1'>
        <label className=' font-inter text-lg'>Email:</label>
        <input
          type='email'
          id='Email'
          placeholder='Enter Email'
           className='form-style'
          {...register("Email",{required:true})}
        />
        {errors.Email && <span className=' text-yellow-600'>Email Field is Required</span>}
      </div>

      {/* Mobile No. */}
      <div className='flex flex-col gap-y-1'>
        <label className=' font-inter text-lg'>Mobile Number:</label>
        <input
          type='tel'
          id='PhoneNo'
          placeholder='Enter Mobile Number'
           className='form-style'
          {...register("PhoneNo",{required:true})}
        />
        {errors.PhoneNo && <span className=' text-yellow-600'>Mobile Number Field is Required</span>}
      </div>

      {/* message */}
      <div className='flex flex-col gap-y-1'>
        <label className=' font-inter text-lg'>Message:</label>
        <textarea
          cols={5}
          rows={4}
          id='Message'
          placeholder='Enter Message'
           className='form-style'
          {...register("Message",{required:true})}
        />
        {errors.Message && <span className=' text-yellow-600'>Message Field is Required</span>}
      </div>

      <div className=' flex justify-end mt-2'>
      <button className={`flex items-center bg-yellow-500 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 transition-all duration-200 hover:scale-90`}>Submit</button>
      </div>
      </div>
      </form>
  
  )
}

export default ContactForm
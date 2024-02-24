import React from 'react'
import img from '../assets/Job-Board-Images/Testimonial1.jpg'

const Testimonials = () => {
  return (
    <section className='w-full  h-80 bg-cover bg-center flex justify-center items-center rounded-2xl mt-3 relative shadow-lg bg-black-800 bg-opacity-100 mt-20 here'>
         {/* <div className="flex flex-col justify-center items-center py-6 px-4 font-bold w-100 shadow-lg text-white backdrop-blur-md backdrop-brightness-100 w-full h-full"> */}
         <div className="flex flex-col justify-center items-center py-6 px-4 w-100 shadow-lg text-white backdrop-blur-md bg-black/40 w-full h-full">
          {/* <h4>Testimonials</h4> */}
          <img src={img} alt="" className='p mb-6' />
          <p className='mb-6'>Towards any serious attempt to do things differently. We’re
            Talented people but these people are difficult to recruit, </p>
            <span className='mb-2'>name</span>
            <span>Country</span>
        </div>
    </section>
  )
}

export default Testimonials
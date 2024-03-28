import React from 'react'
import img from '../assets/Job-Board-Images/img1.jpg'
import { Link } from 'react-router-dom'


const Blog = () => {
  return (
    <section className='my-0 mx-auto mt-20 mb-20 lg:p-20'>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='mb-2 font-bold'>QUICK CAREER TIPS</h4>
        <p className='text-[#a2a3a4] m-auto mt-4 max-w-lg  text-center info-text'>found by employers communicate directly with hiring managers and recruiters.</p>
      </div>
      <div className='w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-2 p-6'>
        <div className='p-4 border'>
            <img src={img} alt="" className='w-full'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Corporis vel praesentium, 
                expedita qui quas neque ab hic voluptates 
                quisquam architecto fugiat minima, itaque 
                voluptate tenetur. Perspiciatis doloribus voluptate neque ex!</p>   
                <Link to='/blogpage' className='pt-6 text-black hover:text-[#55A747] cursor-pointer'>Read More...</Link> 
            </div>
        </div>
        <div className=' p-4  border'>
            <img src={img} alt="" className='w-full'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Corporis vel praesentium, 
                expedita qui quas neque ab hic voluptates 
                quisquam architecto fugiat minima, itaque 
                voluptate tenetur. Perspiciatis doloribus voluptate neque ex!</p>  
                <Link to='/blogpage' className='pt-6 text-black hover:text-[#55A747] cursor-pointer'>Read More...</Link> 
            </div>
        </div>
        <div className='p-4  border'>
            <img src={img} alt="" className='w-full'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Corporis vel praesentium, 
                expedita qui quas neque ab hic voluptates 
                quisquam architecto fugiat minima, itaque 
                voluptate tenetur. Perspiciatis doloribus voluptate neque ex!</p> 
                <Link to='/blogpage' className='pt-6 text-black hover:text-[#55A747] cursor-pointer'>Read More...</Link>   
            </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
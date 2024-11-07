import React from 'react';
import { Link } from 'react-router-dom';
import { blog } from '../utils/companies';


const Blog = () => {
  return (
    <section className='my-0 mx-auto mt-20 mb-20 container select-none'>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='font-bold text-2xl'>QUICK CAREER TIPS</h4>
        <p className='text-[#a2a3a4] m-auto mt-4 max-w-lg  text-center info-text'>found by employers communicate directly with hiring managers and recruiters.</p>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-2 p-6'>
        {
            blog.map((b, idx) => (
              <div key={idx}className='p-4 border'>
              <img src={b.profileUrl} alt="" className='w-full'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <p>{b.about}</p>   
                <Link to='/blogpage' className='pt-6 text-black hover:text-[#55A747] cursor-pointer'>Read More...</Link> 
            </div>
            </div>
            ))
          }
      </div>
    </section>
  )
}

export default Blog;
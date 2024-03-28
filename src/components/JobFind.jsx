import React from 'react'
import img from '../assets/Job-Board-Images/about-image.jpg'

const JobFind = () => {
  return (
    <section className=' grid-cols-1 md:grid md:grid-cols-2 md:bg-[#55A747] '>
        <div className='flex flex-col py-4 sm:py-20 px-6 sm:px-20 bg-[#55A747] text-white '>
            <h4 className='text-2xl text-bold font-bold mb-4 '>We'll always match you up with opportunities that are the right fit</h4>
            <p className=''>Thought I would never be able to find a good job. Anyhow I took a look
                 at the jobs posted by. I was looking for a job after matriculation 
                 due to some personal and domestic issues. I found a job but they 
                 did not pay me well. I thought I would never be able to find a 
                 good job. Anyhow I took a look.</p>
        </div>
        <div className='lifestyle-img backdrop-blur-xl backdrop-brightness-150'>
            <img src={img} alt="" className='image '/>
        </div>

    </section>
    )
}

export default JobFind
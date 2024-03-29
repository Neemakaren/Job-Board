import React from 'react'
import img from '../assets/Job-Board-Images/logo1.jpg'

const Agency = () => {
  return (
    <section className='s mt-20'>
        <div className='flex flex-col justify-center items-center'>
            <h4 className='font-bold text-2xl p-2'>AGENCIES AND IN HOUSE TEAMS</h4>
            <p className='pl-4 text-[#5c5a5a]'>the world's leading digital Leading employaers already using joband talent</p>
        </div>
        <div className=' w-full grid grid-cols-3 items-center  sm:grid-cols-4 lg:grid-cols-6 mt-4'>
            <img src={img} alt="" className='items-center justify-center' />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
        </div>
    </section>
  )
}

export default Agency
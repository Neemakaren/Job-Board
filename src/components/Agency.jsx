import React from 'react'
import { labels } from '../utils/companies'


const Agency = () => {
  return (
    <section className=' my-0 mx-auto lg:px-40  mt-10'>
        <div className='flex flex-col justify-center items-center'>
            <h4 className='font-bold text-2xl p-2'>AGENCIES AND IN HOUSE TEAMS</h4>
            <p className='pl-4 text-[#5c5a5a]'>the world's leading digital Leading employaers already using joband talent</p>
        </div>
        <div className=' w-full grid grid-cols-4 items-center  sm:grid-cols-6 lg:grid-cols-6'>
          {
            labels.map((label, idx) => (
              <img src={label.imgUrl} alt="" key={idx}/>
            ))
          }
        </div>
    </section>
  )
}

export default Agency
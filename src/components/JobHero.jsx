import { useState } from 'react'

const JobHero = ({search, setSearch}) => {
  

  return (
    <section className="w-full h-96 bg-cover bg-center flex justify-center items-center mt-3 relative here">
        <div className="flex flex-col justify-center items-center backdrop-blur-md bg-black/60 w-full h-full pt-8 pb-8 ">
        <h4 className='flex flex-row font-bold text-2xl s mx-4 my-6 text-white'>EXPLORE THOUSAND OF JOBS WITH JUST SIMPLE SEARCH...</h4>
        <form action="" className='w-[1280px] my-0 mx-auto flex flex-col w-full px-4 sm:items-center sm:justify-center sm:flex sm:flex-row'>
            <div className='flex flex-col'>
            <input 
              type="text" 
              placeholder='search job' 
              className='bg-white p-4 outline-none sm:mr-8 sm:pt-2 sm:pr-10 sm:pl-4 sm:pb-2' 
              onChange={(e) => setSearch(e.target.value)}

              />
            <span className='mb-4 text-white text-sm'>Search keywords e.g. web design</span>
            </div>
            <div className='flex flex-col'>
            <input 
              type="text" 
              placeholder='search keywords' 
              className='bg-white p-4 outline-none sm:mr-8 sm:pt-2 sm:pr-10 sm:pl-4 sm:pb-2' 

              />
            <span className='mb-4 text-white text-sm'>Filter by specialisms e.g. developer, designer</span>
            </div>
            <div className='flex flex-col sm:items-center sm:justify-center sm:mb-10 '>
            <button className='bg-[#55A747] p-2 text-bold text-white sm:py-2 sm:px-10'>Find Jobs</button>
            </div>
        </form>
        </div>
        
    </section>
  )
}

export default JobHero
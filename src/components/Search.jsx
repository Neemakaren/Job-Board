import React from 'react'

const Search = () => {
  return (
   
    
    <section className=' mt-6 -bottom-[100] shadow-lg sm:flex sm:justify-center sm:items-center sm:bg-[#F5F6F8] sm:p-7 sm:rounded-1.5xl sm:max-w-90 sm:mt-5 s'>
      <section className='mx-auto flex flex-col px-2 bg-[#F5F6F8] sm:flex sm:flex-row '>
      <input type="text" placeholder='Search Job' className=' mt-4 py-4 pl-4 w-full border mb-5 sm:mr-8 sm:pt-2 sm:pr-10 sm:pl-4 sm:pb-2'/>
      <input type="text" placeholder='Search Keywords' className=' mt-4 py-4 pl-4 w-full mb-5 sm:mr-8 sm:pt-2 sm:pr-10 sm:pl-4 sm:pb-2' />

      <button className="py-2 bg-[#55A747] bg-opacity-100  sm:px-10 text-black bg-[#55A747] sm:mt-6 sm:mb-6
      baseline text-white sm:bg-[#55A747] bg-opacity-100 
      hover:text-white hover:bg-gray-400 hover:bg-opacity-100 md:max-md:bg-white">FindJob</button>
      
      </section>
      
    </section>

  
      
  )
}

export default Search
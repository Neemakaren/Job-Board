import React from 'react'

const Search = () => {
  return (
   
    // <section className='cont'>
    // <section className='flex justify-center items-center bg-[#F5F6F8] p-7 rounded-1.5xl max-w-90 mt-5 s'>
    <section className=' -bottom-[5%] shadow-lg sm:flex sm:justify-center sm:items-center sm:bg-[#F5F6F8] sm:p-7 sm:rounded-1.5xl sm:max-w-90 sm:mt-5 s'>
      <section className=' mx-auto flex flex-col px-2 bg-[#F5F6F8] sm:flex sm:flex-row '>
      {/* <input type="text" placeholder='Search Job' className='mr-8 pt-2 pr-10 pl-4 pb-2'/> */}
      <input type="text" placeholder='Search Job' className=' w-full mb-5 sm:mr-8 sm:pt-2 sm:pr-10 sm:pl-4 sm:pb-2'/>
      <input type="text" placeholder='Search Keywords' className='w-full mb-5 sm:mr-8 sm:pt-2 sm:pr-10 sm:pl-4 sm:pb-2' />

      <button className="bg-[#55A747] bg-opacity-100 sm:pt-2 sm:pr-10 text-black bg-black 
      baseline text-white sm:bg-[#55A747] bg-opacity-100 
      hover:text-white hover:bg-gray-400 hover:bg-opacity-100 md:max-md:bg-white">FindJob</button>
      </section>
      {/* <button className="sm:p-3 sm:px-8 sm:pt-2 sm:text-black sm:bg-black 
      baseline sm:text-white sm:bg-[#55A747] sm:bg-opacity-100 
      hover:text-white hover:bg-gray-400 hover:bg-opacity-100 sm:flex sm:flex-col s">FindJob</button> */}
    </section>

  
      
  )
}

export default Search
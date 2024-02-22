import React from 'react'

const Search = () => {
  return (
   
    // <section className='cont'>
    <section className='flex justify-center items-center bg-[#F5F6F8] p-7 rounded-1.5xl max-w-90 mt-5 s'>
      <section className='flex '>
      <input type="text" placeholder='Search Job' className='mr-8 pt-2 pr-10 pl-4 pb-2'/>
      <input type="text" placeholder='Search Keywords' className='mr-8 mr-6 pt-2 pr-10 pl-4 pb-2' />
      <select name="" id="" className='mr-6 mr-6 pt-2 pr-10 pl-4 pb-2'>
        <option value="">Country</option>
      </select>

      </section>
      {/* <button className="p-3 px-6 pt-2 mt-5 text-black bg-black rounded-full baseline bg-gray-400 bg-opacity-50 hover:text-white hover:bg-gray-900 hover:bg-opacity-100 ">Find Job</button> */}
      <button className="p-3 px-8 pt-2 text-black bg-black baseline text-white bg-[#55A747] bg-opacity-100 hover:text-white hover:bg-gray-400 hover:bg-opacity-100 ">Find Job</button>
    </section>

  
      
  )
}

export default Search
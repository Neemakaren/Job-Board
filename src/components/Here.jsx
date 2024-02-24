import React from 'react';
import img from '../assets/Job-Board-Images/job-1.jpg'

const Here = () => {
  return (
    // <div className='text-white'>
    //   <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    //     <p className='text-[#00df9a] font-bold p-2'>
    //       GROWING WITH DATA ANALYTICS
    //     </p>
    //     <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    //       Grow with data.
    //     </h1>
    //     <div className='flex justify-center items-center'>
    //       <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
    //         Fast, flexible financing for
    //       </p>
    //       {/* <Typed
    //       className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
    //         strings={['BTB', 'BTC', 'SASS']}
    //         typeSpeed={120}
    //         backSpeed={140}
    //         loop
    //       /> */}
    //     </div>
    //     <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
    //     <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
    //     <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black md:max-lg:bg-white md:text-7xl '>Get Started</button>
    //   </div>
    // </div>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl b">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Man looking at item at a store"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
  )
}

export default Here

// import React from 'react'
// import {companies} from '../utils/companies';


// const Jobs = () => {
//   return (
//     <section className='container mx-auto mt-4 flex flex-col justify-center items-center gap-3 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#F5F6F8] shadow-lg'>
//         <h4 className=''>BROWSE JOBS BY SPECIALISMS</h4>
//         <p>29 jobs live - 0 added today.</p>
//         {/* <section className='flex flex-col w-10/12 mx-auto rounded-2xl border-4 pt-6 pb-2 pr-4 pl-3 shadow-lg justify-center k'>{ */}
//         <section className=' w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10'>{
//           companies.map((item, _id) => (
//             <>
//             <p key={_id} className='k bg-[#F5F6F8] py-4 pl-2 text-[#292a2b]'>{item.name}</p>
//             <p></p>
//             </>
           
//           ))
//           }</section>
//     </section>
//   )
// }

// export default Jobs
import React from 'react'

const UploadJob = () => {
  return (
    <section className='wi bg-[#F5F6F8] w-[1280px] my-0 mx-auto border border-black flex flex-col p-10 space-y-6 mt-4 mb-6 rounded'>
      <p className='font-bold text-lg'>Job Title</p>
      <input 
        type="text"
        placeholder='eg. software engineer'
        className='w-full border border-black px-2 py-4'
       />
       <div className='flex items-center gap-10 '>
        <div className='w-full'>
       <p className='font-bold text-lg'>Job Type</p>
      <input 
        type="text"
        placeholder='eg. software engineer'
        className='w-full border border-black px-2 py-4'
       />
        </div>
        <div className='w-full'>
       <p className='font-bold text-lg'>Salary (USD)</p>
      <input 
        type="text"
        placeholder='eg. 1500'
        className='w-full border border-black px-2 py-4'
       />
        </div>
       </div>

      <div className='flex items-center gap-10 '>
        <div className='w-full'>
       <p className='font-bold text-lg'>No. of Vacancies</p>
      <input 
        type="text"
        placeholder='eg. Vacancies'
        className='w-full border border-black px-2 py-4'
       />
        </div>
        <div className='w-full'>
       <p className='font-bold text-lg'>Years of Experience</p>
      <input 
        type="text"
        placeholder='eg. Vacancies'
        className='w-full border border-black px-2 py-4'
       />

        </div>
      </div>
       <p className='font-bold text-lg'>Job Location</p>
      <input 
        type="text"
        placeholder='eg. New York'
        className='w-full border border-black px-2 py-4'
       />
       <p className='font-bold text-lg'>Job Description</p>
       <textarea 
        name="" 
        id="" 
        cols="5" 
        rows="5"
        className='w-full border border-black px-2 py-4 resize-none'
        ></textarea>
       <p className='font-bold text-lg'>Core Responsibilities</p>
       <textarea 
        name=""  
        id="" 
        cols="5" 
        rows="5"
        className='w-full border border-black px-2 py-4 resize-none'
        ></textarea>
       {/* <button className='bg-[#55A747] p-4'>Submit</button> */}
       <button className='w-40 inline-flex justify-center rounded-md border border-transparent bg-[#55A747] px-8 py-2 text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none'>Submit</button>
    </section>
  )
}

export default UploadJob
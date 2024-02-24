import React from 'react'
import {companies} from '../utils/companies';
import {FaAngleRight } from 'react-icons/fa'


const Jobs = () => {
  return (
    <section className='container mx-auto mt-4 mb-10 flex flex-col justify-center items-center gap-3 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#F5F6F8] shadow-lg'>
        <h4 className=''>BROWSE JOBS BY SPECIALISMS </h4>
        <p>29 jobs live - 0 added today.</p>
        {/* <section className='flex flex-col w-10/12 mx-auto rounded-2xl border-4 pt-6 pb-2 pr-4 pl-3 shadow-lg justify-center k'>{ */}
        <section className=' w-full grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3 mt-4'>{
          companies.map((item, _id) => (
            <>
            <p key={_id} className=' flex flex-row justify-between px-4 border border-[#434545] bg-[#F5F6F8] py-4 pl-2 text-[#292a2b] '>{item.name} <span ><FaAngleRight/></span>
            </p>
            </>
           
          ))
          }</section>
    </section>
  )
}

export default Jobs
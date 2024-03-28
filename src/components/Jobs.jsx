import React from 'react'
// import {jobs} from '../utils/companies';
import {FaAngleRight } from 'react-icons/fa'
import { useState } from 'react';
import JobSec from '../Pages/JobSec';
import { Link, useParams } from 'react-router-dom';



const Jobs = ({jobs,filterItems}) => {
  // console.log(jobs)
  

  return (
    
    <section className='container mx-auto mt-20 mb-20 flex flex-col justify-center items-center gap-3 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#F5F6F8] shadow-lg'>
        <h4 className='mt-4'>BROWSE JOBS BY SPECIALISMS </h4>
        <p>{jobs.length} jobs live - 0 added today.</p>
        <section className='w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4 '>{
          jobs.map((item, index) => (
            <Link to={`/jobsec`}>
            <section className='' key={index} onClick={() => filterItems(item)}>
            <p  className='flex flex-row justify-between px-4 border border-[#434545] bg-[#F5F6F8] py-4 pl-2 text-[#292a2b] hover:text-[#55A747] cursor-pointer '>{item} <span ><FaAngleRight /></span>
            </p>
            </section>
            </Link>
          ))
          }</section>
    </section>
  )
}

export default Jobs
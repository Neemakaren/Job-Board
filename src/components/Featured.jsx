import {useState} from 'react'
import {companies} from '../utils/companies';
import {jobs} from '../utils/companies'
import img from '../assets/Job-Board-Images/emp.png'
import img1 from '../assets/Job-Board-Images/emp1.png'
import { Link, useParams } from 'react-router-dom';




const Featured = () => {
    
  return (
    <section className='container my-0 mx-auto select-none'>
        <section className='mt-12 md:flex md:justify-between md:my-0 md:mx-auto md:mt-20 md:md:p-5 md:mb-10'> 
        <section className='flex flex-col flex-start'>
        <h4 className='font-bold mb-2 text-2xl'>FEATURED JOBS</h4>
        <p className='mb-4 text-[#a2a3a4] '>Leading Employers already using job and talent.</p>
        <div className='flex flex-col mx-auto'>
            {
                companies.map((items, _id) => {
                   return ( <div key={_id} className='flex gap-8 mb-4 py-6 px-10 shadow-lg cursor-pointer'>
                        <img src={items.profileUrl} alt="" className='w-14 lg:w-20' />
                        <p>{items.description}</p>
                        <p>{items.location}</p>
                        <Link to={`/companies/${items.id}`} className='text-[#55A747]'>more info</Link>
                    </div>
                   )
                })
            }
        </div>
        </section>
        <section className='flex flex-col w-100 items-center justify-center mt-20 sm:justify-start sm:w-80 '>
        <h4 className='font-bold mb-2'>TOP RECRUITERS</h4>
        <p className='mb-4 text-[#a2a3a4]'>Employers already using job talent.</p>
        <div className='sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-60'>
            <img src={img} alt="" className=' mb-6'/>
            <img src={img} alt="" className=' mb-6'/>
            <img src={img1} alt="" className=' '/>
        </div>
        </section>
        </section>
    </section>
  )
}

export default Featured
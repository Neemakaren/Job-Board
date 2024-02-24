import React from 'react'
import {companies} from '../utils/companies';
import {jobs} from '../utils/companies'


const Featured = () => {
  return (
    <section className='flex justify-between s mt-20 p-5 m'>
        <section className='flex flex-col flex-start'>
        <h4 className='font-bold mb-2'>FEATURED JOBS</h4>
        <p className='mb-4'>Leading Employers already using job and talent.</p>
        <div className='flex flex-col mx-auto '>
            {
                companies.map((items, _id) => (
                    <div key={_id} className='j gap-8 mb-6 border border-[#434545] py-6 px-10 shadow-lg'>
                        <img src={items.profileUrl} alt="" className='i' />
                        <p>{items.description}</p>
                        <p>{items.location}</p>
                    </div>
                ))
            }
        </div>
        </section>
        <section className='a'>
        <h4 className='font-bold mb-2'>TOP RECRUITERS</h4>
        <p className='mb-4'>Employers already using job talent.</p>
        <div className='flex flex-col'>
        {
                companies.map((items, _id) => (
                    <div key={_id} className=' flex flex-col border border-[#434545]'>
                        <img src={items.profileUrl} alt="" className='i' />
                        {/* <p>{items.description}</p> */}
                        {/* <p>{items.location}</p> */}
                    </div>
                ))
            }
        </div>
        </section>
    </section>
  )
}

export default Featured
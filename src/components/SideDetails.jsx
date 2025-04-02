import React from 'react'
import { useParams } from 'react-router-dom'

const SideDetails = ({valid}) => {
    const { productId } = useParams()
  return (
    <section className='flex flex-col w-100 items-center justify-center lg:mt-20 sm:justify-start sm:w-80'>
    <h4 className='font-bold mb-2'>TOP RECRUITERS</h4>
    <div className='text-[#a2a3a4] sm:flex sm:flex-col sm:items-start gap-8 sm:justify-center sm:w-60'>
    {valid
            .filter((item) => item.id === productId)
            .map((item, index) => (
              <div key={index}>
                   <div className='flex flex-col'>
       
       <h6 className='mb-2'>Offered Salary</h6>
       <span>{item.salaryRange}</span>
       </div>
       <div className='flex flex-col'>
      
       <h6 className='mb-2'>Career Level </h6>
       <span>Executive</span>
       </div>
       <div className='flex flex-col'>
       
       <h6 className='mb-2'>experience </h6>
       <span>2 years</span>
       </div>
       <div className='flex flex-col'>
    
       <h6 className='mb-2'>Qualification</h6>
       <span>Bachelor Degree</span>
       </div>
              </div>
            ))}
       
        
    </div>
    </section>
  )
}

export default SideDetails
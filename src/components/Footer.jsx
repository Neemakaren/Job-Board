import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    // <section className='h bg-[#333333] text-[#7e7b7b] md:flex sm:flex sm:justify-center sm:items-center sm:py-8 '>
    <section className='w-full bg-[#333333] text-[#7e7b7b] grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 mt-4 sm:pt-8 sm:pb-8'>
        <div className='flex flex-col mx-4 my-6 w-80 sm:pl-10'>
            <h4 className='mb-2 text-white'>NEWSLETTER</h4>
            <p className='mb-4'>Subscribe to Jobcareer Pacific 
                newsletter to get the latest 
                jobs posted, candidates ,and 
                other latest news stay updated.</p>
                <input type="text" placeholder='Enter Your Email address' className='rounded-full p-4 bg-[#333333] border border-[#55A747] w-60' />
        </div>
        <div className='flex flex-col mx-4 my-6'>
            <h4 className='pb-4 text-white'>FREQUENTLY ASKED QUESTIONS</h4>
            <div className='flex'>
            <ul className='mr-8 pb-4 '>
                <li className='mb-2'>privacy and security</li>
                <li className='mb-2'>communications</li>
                <li className='mb-2'>lending licences</li>
                <li className='mb-2'>support</li>
                <li className='mb-2'>contact us</li>
            </ul>
            <ul>
                <li className='mb-2'>Terms of service</li>
                <li className='mb-2'>Referals</li>
                <li className='mb-2'>disclaimers</li>
                <li className='mb-2'>how it works</li>
                <li className='mb-2'>underwrittig</li>
            </ul>

            </div>
        </div>
        <div className='flex flex-col mx-4 my-4'>
            <h4 className='mb-2 text-white'>Contact Us</h4>
            <span className='mb-2'>Schönhaus er Allee 167c 10435 Berlin Newland,</span>
            <span className='mb-2'>Germany1435345435</span>
            <span className='mb-4'>info@jobcareer.com</span>
        <div className='flex g w-80  md:'>
          <FaFacebook className='mr-8 hover:text-[#55A747]'/>
          <FaInstagram className='mr-8 hover:text-[#55A747]'/>
          <FaTwitter className='mr-8 hover:text-[#55A747]'/>
          <FaYoutube className='mr-8 hover:text-[#55A747]'/>
        </div>
        </div>
    </section>
  )
}

export default Footer
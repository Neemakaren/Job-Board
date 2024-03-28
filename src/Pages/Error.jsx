import React from 'react'
import img from '../assets/Job-Board-Images/404-bg-img.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <section className='w-full h-40 bg-cover bg-center flex justify-center items-center rounded-2xl mt-8 relative shadow-lg bg-black-800 bg-opacity-100 mt-20 here'>
      <div className="flex justify-center items-center py-6 px-4 font-bold w-100 text-2xl  text-white backdrop-blur-md bg-black/80 w-full h-full">
      ERROR 404
      </div>
    </section>
      <div className='flex flex-col s mt-10 items-center justify-center'>
        <img src={img} alt="" className='bg-[#55A747] w-80 my-8' />
        <h4 className='text-2xl'>We Are Sorry, Page Not Found</h4>
        <p className='text-[#a2a3a4] p-4 m-auto mt-4 max-w-lg  text-center info-text'>Unfortunately the page you were looking for could not be found.  It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again.</p>
            <Link to='/' className='bg-[#343232] text-white py-2 px-4 mt-2 mb-8'>Back To HomePage</Link>
      </div>

    </>
  )
}

export default Error
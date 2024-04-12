import React from 'react'
import img from '../assets/Job-Board-Images/about-map.jpg'

const AboutUs = () => {
  return (
    <>
    <section className='w-full h-60 bg-cover bg-center flex  mt-8 shadow-lg bg-black-800 bg-opacity-100 mt-20 here'>
      <div className="py-6 px-4 font-bold w-100 text-white backdrop-blur-md bg-black/80 w-full h-full">
        <div className='flex flex-col justify-center items-center mt-8 py-6 my-0 mx-auto'>
      <h4 className='text-2xl'>ABOUT US</h4>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>This quest has led us to be a Multi-Awarded & Professional team that never forgets where they
          always listen and adapts aesthetics ergonomics design.</p>
          <span></span>

        </div>
      </div>
    </section>
    <section>
      <div className='flex flex-col items-center justify-center m-8'>
      <h5 className='text-2xl py-4'>OUR SERVICES</h5>
      <p className='text-[#757575]'>When an unknown printer took a galley of type and scrambled it to make a type specimen</p>
      </div>
      <div className=' my-0 mx-auto w-full grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-3 mt-8 p-10 lg:px-[10em]'>
        <div>
        <h5 className='font-bold pb-4'>ADVERTISE A JOB</h5>
        <p>Underwrote much the and thi rancorously abominably. secretly nefariously less.</p>
        </div>
        <div>
        <h5 className='font-bold pb-4'>TEMP SEARCH</h5>
        <p>Underwrote much the and thi rancorously abominably. secretly nefariously less.</p>
        </div>
        <div>
        <h5 className='font-bold pb-4'>CV SEARCH</h5>
        <p>Underwrote much the and thi rancorously abominably. secretly nefariously less.</p>
        </div>

      <div>
        <h5 className='font-bold pb-4'>DISPLAY JOB</h5>
        <p>Underwrote much the and thi rancorously abominably. secretly nefariously less.</p>
      </div>

      <div>
        <h5 className='font-bold pb-4'>RECRUITER PROFILES</h5>
        <p>Underwrote much the and thi rancorously abominably. secretly nefariously less.</p>
      </div>

        <div>
        <h5 className='font-bold pb-4'>FOR AGENCIES</h5>
        <p>Underwrote much the and thi rancorously abominably. secretly nefariously less.</p>
        </div>
      </div>
    </section>

    <section className=' grid-cols-1 md:grid md:grid-cols-2  my-0 mx-auto my-8 p-4 lg:px-20'>
        <div className='flex flex-col py-4 sm:py-20 px-6 sm:px-20  space-y-4'>
            <h5 className='text-2xl text-bold font-bold mb-4 '>ABOUT JOB CAREER</h5>
            <p className='font-bold '>Every single one of our jobs has some kind of flexibility option - 
          such as telecommuting a part-time schedule or a flexible or flextime schedule.</p>
          <p className='text-[#757575]'>Track your results on the local or global market , depending on your needs. 
            You can track everything in the most popular search engines - Google, Bing, 
            Yahoo and Yandex. Improve your search performance and increase traffic with our turn-key.
            </p>
            <p className='text-[#757575]'>Positionly is the only solution on the market that provides a simple 
              and transparent way to monitor.the effectiveness.</p>
        </div>
        <div className='flex items-center justify-center'>
            <img src={img} alt="" className='w-[100%] h-[70%]  lg:w-[100%] lg:h-[100%]'/>
        </div>

    </section>

    </>
  )
}

export default AboutUs
import React from 'react'
import {companies} from '../utils/companies';
import { useParams } from 'react-router';

const DetailHero = ({valid}) => {
  const { productId } = useParams()
  
  return (
    <section className='w-full h-60 bg-cover bg-center flex justify-center items-center rounded-2xl mt-8 relative shadow-lg bg-black-800 bg-opacity-100 here'>
    <div className="flex flex-col justify-center items-center py-6 px-4 font-bold w-100 shadow-lg  text-2xl text-white bg-black backdrop-blur-md bg-black/60 w-full h-full">
    {valid
            .filter((item) => item.id === productId)
            .map((item, index) => (
              <div key={index}>
                <h6 className='font-bold'>{item.title}</h6>
               
              </div>
            ))}
   </div>
</section>
  )
}

export default DetailHero
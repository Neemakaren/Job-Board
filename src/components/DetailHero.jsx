import React from 'react'
import {companies} from '../utils/companies';
import { useParams } from 'react-router';

const DetailHero = () => {
  const { productId } = useParams()
  const product = companies.find((product) => product.id === productId)
  const {name, location, about} = product
  return (
    <section className='w-full h-60 bg-cover bg-center flex justify-center items-center rounded-2xl mt-8 relative shadow-lg bg-black-800 bg-opacity-100 mt-20 here'>
    <div className="flex flex-col justify-center items-center py-6 px-4 font-bold w-100 shadow-lg  text-2xl text-white bg-black backdrop-blur-md bg-black/60 w-full h-full">
     <h4>{name}</h4>
     <p>{location}</p>
   </div>
</section>
  )
}

export default DetailHero
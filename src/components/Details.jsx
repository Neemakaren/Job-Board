import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SideDetails from './sideDetails'
import CurrencyConverter from './Convert'

const Details = ({valid}) => {
    const { productId } = useParams()
  return (
    <section className="px-4 sm:flex sm:justify-between my-0 mx-auto sm:mt-2 sm:p-5 sm:mb-10 m w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:flex-col lg:flex lg:flex-row lg:grid-cols-3 mt-2 p-2 container">
      <section className="flex flex-col flex-start text-[#a2a3a4] m-2 p-10">
        <div className="flex flex-col mx-auto">
          <h4 className="font-bold text-black">Job Overview</h4>

          {/* <p>{about}</p> */}

          {valid
            .filter((item) => item.id === productId)
            .map((item, index) => (
              <div key={index}>
                <h4 className="font-bold text-black mt-10 mb-6">
                  {item.comapany}
                </h4>
                <p className="leading-8">{item.description}</p>
              </div>
            ))}
        </div>
        <CurrencyConverter />
        <Link
          to="/"
          className="flex items-center justify-center p-2 mt-4 border border-[#55A747]"
        >
          Back Home
        </Link>
      </section>
      <SideDetails valid={valid} />
    </section>
  );
}

export default Details
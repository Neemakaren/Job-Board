import React from "react";
import img from "../assets/Job-Board-Images/emp.png";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { companies } from "../utils/companies";
import img1 from "../assets/Job-Board-Images/emp1.png";
import { Link, useParams } from "react-router-dom";
import Details from "./Details";

const DetailMain = ({ filterItems, valid }) => {
  const { productId } = useParams();

  return (
    <>
      <section className="flex flex-col px-4 sm:flex-row  sm:flex sm:items-center sm:justify-center mt-10 container my-0 mx-auto">
        <div className="flex justify-between px-6">
          {/* <img src={img} alt="" /> */}
          <div className="flex flex-col items-center justify-center px-6 ml-10 ">
            {valid
              .filter((item) => item.id === productId)
              .map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt="" />
                  <h6 className="font-bold">{item.location}</h6>
                  <span>Posted: {item.datePosted}</span>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Details valid={valid} />
    </>
  );
};

export default DetailMain;

{
  /* <div className='flex gap-4 pr-20  flex-row sm:flex sm:items-center sm:flex-row sm:justify-center'> 
            <h6 className='pr-6'>Share</h6>
            <FaFacebook className='mr-2 sm:mr-8 text-2xl hover:text-[#55A747]'/>
          <FaInstagram className='sm:mr-8 text-2xl hover:text-[#55A747]'/>
          <FaTwitter className='sm:mr-8 text-2xl hover:text-[#55A747]'/>
          <FaYoutube className='sm:mr-8 text-2xl hover:text-[#55A747]'/>
        </div> */
}

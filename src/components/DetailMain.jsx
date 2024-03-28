import React from 'react'
import img from '../assets/Job-Board-Images/emp.png'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {companies} from '../utils/companies';
import img1 from '../assets/Job-Board-Images/emp1.png'
import { Link, useParams } from 'react-router-dom';




const DetailMain = ({filterItems}) => {
  const { productId } = useParams()
  const product = companies.find((product) => product.id === productId)
  const {name, location, about} = product
  // console.log(name)
  return (
    <>
    <section className='flex flex-col sm:flex-row  sm:flex sm:items-center sm:justify-center gap-10 mt-10 sm:px-20 my-0 mx-auto convo'>
        <div className='flex justify-between px-6'>
        <img src={img} alt="" />
        <div className='flex flex-col items-center justify-center px-6 ml-10 '>
            <h6 className='font-bold'>{location}</h6>
            {/* <span>Posted: 8 months Ago</span>
            <span>Specialism: Accountancy</span>        
            <span>LocationSheffield, United Kingdom</span>  */}
            <span>here: {name}</span> 
        </div>
        </div>
        <div className='flex gap-4 pr-20  flex-row sm:flex sm:items-center sm:flex-row sm:justify-center'> 
            <h6 className='pr-6'>Share</h6>
            <FaFacebook className='mr-2 sm:mr-8 text-2xl hover:text-[#55A747]'/>
          <FaInstagram className='sm:mr-8 text-2xl hover:text-[#55A747]'/>
          <FaTwitter className='sm:mr-8 text-2xl hover:text-[#55A747]'/>
          <FaYoutube className='sm:mr-8 text-2xl hover:text-[#55A747]'/>
        </div>

    </section>

    <section className=' sm:flex sm:justify-between s my-0 mx-auto sm:mt-2 sm:p-5 sm:mb-10 m w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:flex sm:flex-col lg:flex lg:flex-row lg:grid-cols-3 mt-2 p-6 lg:px-20'>
        <section className='flex flex-col flex-start text-[#a2a3a4] m-10 p-10'>
        <div className='flex flex-col mx-auto '>
          <h4 className='font-bold text-black'>Job Overview</h4>
            {/* <p className='leading-8'>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much dog out the much alas evasively neutral lazy reset.
            Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much dog out the much alas evasively neutral lazy reset.
            Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and.</p> */}
            <p>{about}</p>
          <h4 className='font-bold text-black mt-10 mb-6'>Skills Required</h4>
            <p className='leading-8'>
              Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously. Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally.

              Strong Market connections for business development of the bank.
              Strong knowledge of Corporate products and regulatory requirements.
              Proficiency in spoken and written English.
              Analytical skills
              Knowledge of Corporate Banking, Risk Management, Compliance and Central Bank regulations.
            </p>

        </div>
            <Link to='/' className='flex items-center justify-center p-2 mt-4 border border-[#55A747]'>Back Home</Link>
        </section>
        <section className='flex flex-col w-100 items-center justify-center lg:mt-20 sm:justify-start sm:w-80'>
        <h4 className='font-bold mb-2'>TOP RECRUITERS</h4>
        <div className='text-[#a2a3a4] sm:flex sm:flex-col sm:items-start gap-8 sm:justify-center sm:w-60'>
            <div className='flex flex-col'>
           
            <h6 className='mb-2'>Offered Salary</h6>
            <span>£15,000 - £20,000</span>
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
        </section>
        {/* <section className='flex flex-col w-100 items-center justify-center mt-20 sm:justify-start sm:w-80 '>
        <h4 className='font-bold mb-2'>Contact</h4>
        <p className='mb-4 text-[#a2a3a4]'>Employers already using job talent.</p>
        <div className='sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-60'>
            <img src={img} alt="" className=' mb-6'/>
            <img src={img} alt="" className=' mb-6'/>
            <img src={img1} alt="" className=' '/>
        </div>
        </section> */}
    </section>
    </>
  )
}

export default DetailMain
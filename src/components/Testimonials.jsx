import {useState} from 'react'
import people from '../utils/data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];


  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };


  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };



  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
 
  return (
    <section className='w-full h-100 bg-cover bg-center flex justify-center items-center rounded-2xl mt-3 relative shadow-lg bg-black-800 bg-opacity-100 mt-20 here'>
         <div className="flex flex-col justify-center items-center py-6 px-4 w-100 shadow-lg text-white backdrop-blur-md bg-black/80 w-full h-full">
          {/* <h4>Testimonials</h4> */}
          <img src={image} alt="profile" className='p mb-6' />
          <p className='mb-6 w-50 text-center'>{text} </p>
            <span className='mb-2'>{name}</span>
            <div className='button-container'>
        <button className='prev-btn cursor-pointer' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn cursor-pointer' onClick={randomPerson}>
        random
      </button>
        </div>
    </section>
  )
}

export default Testimonials
import {useState} from 'react'
import img from '../assets/Job-Board-Images/footer-logo.png'
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="relative container mx-auto p-6">
    
    <div className="flex items-center justify-between">
      
      <div className="pt-2">
        <img src={img} alt="" />
      </div>
      
      <div className="hidden space-x-6 md:flex">
        <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
        <a href="#" className="hover:text-darkGrayishBlue">Product</a>
        <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
        <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
        <a href="#" className="hover:text-darkGrayishBlue">Community</a>
      </div>
      
      <a
        href="#"
        className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >Get Started</a>

      
<button
            className='block lg:hidden text-slate-900'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
    </div>

   
    {/* <div class="md:hidden">
      <div
        id="menu"
        class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
      >
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </div> */}
     {/* <div
          className={`${
            isOpen ? "absolute flex bg-[#f7fdfd] " : "hidden"
          } container mx-auto lg:hidden flex-col pl-8 gap-3 py-5`}
        >
          <Link to='/' onClick={handleCloseNavbar}>
            Find Job
          </Link>
          <Link to='/companies' onClick={handleCloseNavbar}>
            Companies
          </Link>
          <Link to='/about-us' onClick={handleCloseNavbar}>
            About
          </Link>
        </div> */}
  </nav>
  )
}

export default Navbar
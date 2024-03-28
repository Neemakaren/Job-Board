import {useState, useRef} from 'react'
import img from '../assets/Job-Board-Images/footer-logo.png'
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <nav className="container mx-auto p-6  z-10">
    
    <div className="flex items-center justify-between ">
      
      <div className="pt-2">
        <img src={img} alt="" />
      </div>
      
      <div className="hidden space-x-6 md:flex">
        <Link to='/' className="hover:text-darkGrayishBlue">Home</Link>
        <Link to='/jobsec' className="hover:text-darkGrayishBlue">Jobs</Link>
        <Link to='/uploadjob' className="hover:text-darkGrayishBlue">UploadJob</Link>
        <Link to='/blogpage'className="hover:text-darkGrayishBlue" >Blog</Link>
        <Link to='/aboutus' className="hover:text-darkGrayishBlue">AboutUs</Link>
        <Link to='/terms' className="hover:text-darkGrayishBlue">Terms</Link>
        <Link to='faq' className="hover:text-darkGrayishBlue">Faq</Link>
      </div>
      
      <button className='flex flex-row items-center justify-center text-2xl cursor-pointer transition-all duration-0.3 linear md:hidden  lg:hidden text-slate-900 ' onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
    </div>

    <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex bg-[#55A747] " : "hidden"} lg:hidden flex-col fixed min-h-full left-0 w-full h-full items-center justify-center transition duration-5 z-10 text-2xl space-y-6 mt-4 text-[#423f3f]`}
        >
          <Link to='/' >Home</Link>
          <Link to='/jobsec'>Jobs</Link>
          <Link to='/uploadjob' >UploadJob</Link>
          <Link to='/blogpage'>Blog</Link>
          <Link to='/aboutus' >AboutUs</Link>
          <Link to='/terms'>Terms</Link>
          <Link to='/faq'>Faq</Link>
        </div>

  </nav>
  )
}

export default Navbar
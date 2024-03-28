import { useRef} from 'react'
import img from '../assets/Job-Board-Images/footer-logo.png'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag} from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
   
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  
  
  return (
    <>
    <div className='navbar'>
      <div className="logo-cont">
       <img src={img} alt="" className='logo' />
      </div>
      <div className="nav-content" ref={navRef}>
          <ul className='list-main'>
            <Link to='/' className='list1' >Home</Link>
            <Link to='/blog' className='list1'>blog</Link>
            <Link to='/contact' className='list1'>Contact</Link>
          </ul>
          
        <button className="nav-toggle nav-close-btn" onClick={showNavbar}><FaTimes /></button>
      </div>
        <button className="nav-toggle" onClick={showNavbar}><FaBars /></button>
    </div>
    </>
  )
}

export default Navbar
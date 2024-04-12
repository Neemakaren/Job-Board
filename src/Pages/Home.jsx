import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Hero2 from '../components/Hero2'
import Jobs from '../components/Jobs'
import Here from '../components/Here'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import JobFind from '../components/JobFind'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import Agency from '../components/Agency'



const Home = ({categories, filterItems, jobItems}) => {
 
  
  return (
    <>
   <Hero2 />
   {/* <Search /> */}
   <Jobs categories={categories} filterItems={filterItems} jobItems={jobItems} />
   <Banner />
   <Featured/>
   <JobFind />
   <Blog />
   <Testimonials/>
   <Agency />
    </>
  )
}

export default Home
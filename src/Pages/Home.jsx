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
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
   <Navbar />
   {/* <Hero /> */}
   <Hero2 />
   <Search />
   <Jobs />
   <Banner />
   <Featured />
   <JobFind />
   <Blog />
   <Testimonials />
   <Agency />
   <Footer />
   {/* <Here /> */}
    </>
  )
}

export default Home
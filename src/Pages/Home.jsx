import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Hero2 from '../components/Hero2'
import Jobs from '../components/Jobs'


const Home = () => {
  return (
    <>
   <Navbar />
   {/* <Hero /> */}
   <Hero2 />
   <Search />
   <Jobs />
    </>
  )
}

export default Home
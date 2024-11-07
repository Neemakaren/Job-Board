import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import {jobs} from './utils/companies'
import { Navbar, Footer } from './components'
import {Home, 
        JobDetail, 
        AboutUs, 
        Error, 
        UploadJob, 
        Terms, 
        Faq, 
        Blogpage, 
        JobSec
      } from './Pages'

     
      
const allCategories = ['all', ...new Set(jobs.map((item) => item.jobTitle))];



function App() {
  const [jobItems, setJobItems] = useState(jobs);
  const [categories, setCategories] = useState(allCategories);

  console.log(typeof(jobItems))
 

  const filterItems = (category) => {
    if(category === 'all') {
      setJobItems(jobs)
      return
    }
    const newItems = jobs.filter((job) => job.jobTitle === category)
    setJobItems(newItems); 
  }

  
  return (
    <>
    <Navbar />
  <Routes>
    <Route path='/' element={<Home filterItems={filterItems} jobItems={jobItems} categories={categories}/>} />
    
    <Route path='companies' >
      <Route index element={<Home />}/>
      <Route path=':productId' element={<JobDetail />}/>
      </Route> 
    {/* <Route path='/jobdetail' element={<JobDetail/>}  /> */}
    <Route path='/jobsec' element={<JobSec jobs={jobItems} />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/uploadjob' element={<UploadJob />}></Route>
    <Route path='blogpage' element={<Blogpage />} />
    <Route path='/terms' element={<Terms />} />
    <Route path='/faq' element={<Faq />} />
    <Route path='*' element={<Error />}></Route>
  </Routes>
  <Footer />
    </> 
  )
}

export default App

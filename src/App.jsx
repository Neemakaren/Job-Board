import { useState, useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import JobSec from './Pages/JobSec'
import JobDetail from './Pages/JobDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Error from './Pages/Error'
import Navbar from './components/Navbar'
import UploadJob from './Pages/UploadJob'
import {jobs} from './utils/companies'
import Footer from './components/Footer'
import Terms from './Pages/Terms'
import Faq from './Pages/Faq'
import Blogpage from './Pages/Blogpage'
import axios from 'axios'
import { fetchData, exerciseOptions } from './utils/FetchData'


// import { Navigate } from 'react-router-dom';




// const URL = 'https://api.hubapi.com/companies/v2/companies/paged?properties=name&properties=website&limit=2'
// const URL = 'https://jsonplaceholder.typicode.com/posts'



// const allCategories = ['all', ...new Set(jobs.map((job) => job.jobTitle))]

function App() {
  const [jobs, setJobs] = useState()
  const [jobItems, setJobItems] = useState()


  // const [categories, setCategories] = useState()
  const [query, setQuery] = useState("");


  const [actualQuery, setActualQuery] = useState("");
  const [actualLocation, setActualLocation] = useState("");

  let que = actualQuery == "" ? "Full Stack Developer" : actualQuery;
  let loc = actualLocation == "" ? "India" : actualLocation;


  const [error, setError] = useState(null);



  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: que + " in " + loc,
        page: "1",
        num_pages: "15",
        // employment_types: fullTime ? "FULLTIME" : "PARTTIME",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_SECRET_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => setJobs(res.data.data))
      // .then((res) => console.log(res.data.data))
      .catch((err) => setError(err));
    console.log(jobs)
  }, []);

  




  const filterItems = (category) => {
    if(category === 'all') {
      setJobItems(jobs)
      return
    }
    const newItems = jobs.filter((job) => job.jobTitle === category)
    setJobItems(newItems); 
  }

  
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home filterItems={filterItems} jobs={jobs}/>} />
        {/* <Route path='/companies/:id' element={<JobDetail />} /> */}
        <Route path='companies' >
          <Route index element={<Home />}/>
          <Route path=':productId' element={<JobDetail />}/>
          </Route> 
        <Route path='/jobdetail' element={<JobDetail/>}  />
        {/* <Route path='/jobsec' element={<JobSec jobs={jobItems} />} /> */}
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/uploadjob' element={<UploadJob />}></Route>
        <Route path='blogpage' element={<Blogpage />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

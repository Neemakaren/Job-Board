import {useState} from 'react'
import JobHero from '../components/JobHero'
import JobMain from '../components/JobMain'


const JobSec = ({jobs}) => {
  const [search, setSearch] = useState('')
  const [Vacancy, setVacancy] = useState()

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setVacancy(prevVacancy => {
      return {
        ...prevVacancy,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  
  return (
    <>
    <JobHero search={search} setSearch={setSearch} />
    <JobMain jobs={jobs} search={search} Vacancy={Vacancy} handleChange={handleChange}/>
    </>
  )
}

export default JobSec
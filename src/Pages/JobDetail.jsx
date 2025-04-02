import React from 'react'
import DetailHero from '../components/DetailHero'
import DetailMain from '../components/DetailMain'

const JobDetail = ({valid}) => {
  return (
    <>
    <DetailHero valid={valid}/>
    <DetailMain valid={valid}/>
    </>
  )
}

export default JobDetail
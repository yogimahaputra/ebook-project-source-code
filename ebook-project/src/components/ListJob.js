import React from 'react'

const ListJob = ({title, job_description}) => {
  return (
    <div className='card'>
        <h1>{title}</h1>
        <p>{job_description}</p>
    </div>
  )
}

export default ListJob
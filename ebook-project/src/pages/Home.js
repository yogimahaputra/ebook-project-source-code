import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [data, setdata] = useState(null)

    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            .then((res) => {
                setdata(res.data.data)
            })
    }, [])

    const handleSearch = (event) => {

        let search = data.filter((respons) => {

            if (event.target.value === "") {
                axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
                    .then((res) => {
                        setdata(res.data.data)
                    })
            }

            return Object.values(respons).join('').toLocaleLowerCase().includes(event.target.value)
        })
        setdata(search)
    }

    return (
        <div className='container'>
            <input onChange={handleSearch} type={'text'} placeholder="Cari Lowongan..." />

            <div>
                {data !== null && data.map((res, index) => {
                    return (
                        <div className='card' key={index}>
                            <h1>{res.title}</h1>
                            <p>{res.job_description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
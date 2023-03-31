import React, { useEffect, useState } from "react";
import axios from "axios";

const Materi = () => {
  const [data, setData] = useState(null)
  const [input, setinput] = useState({
    name: "",
  })

  const [fetchstatus, setfetchstatus] = useState(true)

  useEffect(() => {
    if (fetchstatus) {
      fetchData()
      setfetchstatus(false)
    }
  }, [fetchstatus, setfetchstatus])
  // console.log(data)

  const fetchData = () => {
    axios.get("http://backendexample.sanbercloud.com/api/contestants")
      .then((res) => {
        console.log(res.data)
        setData([...res.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (e) => {
    let value = e.target.value
    let name = e.target.name

    setinput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(input)
    let { name } = input

    axios.post('https://backendexample.sanbercloud.com/api/contestants', { name })
      .then((res) => {
        setfetchstatus(true)
        console.log(res)
      })

    setinput(
      {
        name: "",
      }
    )

  }

  const handleDelete = (e) => {
    let idData = e.target.value

    axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
      .then((res) => {
        setfetchstatus(true)
      })
  }

  return (
    <>
      <div className="container">
        {
          data !== null && data.map((res, index) => {
            return (
              <li key={index}>{res.name} | <button value={res.id} onClick={handleDelete}>Delete</button></li>
            )
          })
        }
        <form onSubmit={handleSubmit} >
          <p >FORM DATA</p>
          <input onChange={handleChange} value={input.name} name="name" type="text" placeholder="name..." required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Materi;
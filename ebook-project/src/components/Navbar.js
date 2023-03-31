import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Ebook Project</h1>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/materi'}>Materi</Link></li>
        </ul>
    </div>
  )
}

export default Navbar


import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div>
      <div className="image">
      <h2 className='writting-one'>WE CREATED STEPPING STONES FOR YOUR </h2>
      <h1 className='writting-two'>SUCCESS</h1>
      <Link id='home-link' to="/searchpage"> Search</Link>
      </div>
    </div>
  )
}
export default Homepage
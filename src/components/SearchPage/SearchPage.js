import React from 'react'
import './SearchPage.css'
function SearchPage() {
  return (
    <div>
      <div className='bgc-img'>
        <h1 className='Search-writting'>BUILD YOUR FUTURE</h1>
        <div>
          <p className='Search-para'>We offer 2,000+ job vacancies right now !</p>
        </div>
        <div className="searchpage-btn">
        <button className='job-title'>Job Title,Skills or Company</button>
        <button className='city'>City or State</button>
        <button className='find-job'>Find Job</button>
        <div>
          <ul className='ul'>
            <li className='login'>LoginUp</li>
            <li className='signup'>SignUp</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
export default SearchPage
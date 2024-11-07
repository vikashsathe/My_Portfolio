import React from 'react'
import './MyWork.css'
import mywork_Data from '../../assets/Mywork_data/mywork_data.js'
import arrowRight from '../../assets/Social/arrowRight.svg'

function MyWork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects.</h1>
        </div>
        <div className="work-container">
       {mywork_Data.map((work, index) => {
        return <img  src={work.w_img} alt='work_img' key={index} />
       })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img  src={arrowRight} alt="arrow icon" />
        </div>
    </div>
  )
}

export default MyWork
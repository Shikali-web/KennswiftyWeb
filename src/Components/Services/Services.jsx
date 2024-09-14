import React from 'react'
import './Services.css'
import service_1 from '../../assets/service_1.png'

function Services() {
  return (
    <div className='services'>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>IT Consolting</p>
        </div>
      </div>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>IT Consolting</p>
        </div>
      </div>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>IT Consolting</p>
        </div>
      </div>
    </div>
  )
}

export default Services

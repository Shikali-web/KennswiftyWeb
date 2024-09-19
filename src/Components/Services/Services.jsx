import React from 'react'
import './Services.css'
import service_1 from '../../assets/service_1.png'
import service_icon_1 from '../../assets/logo.png'

const Services = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>IT Consulting</p>
        </div>
      </div>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>IT Consulting</p>
        </div>
      </div>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>IT Consulting</p>
        </div>
      </div>
    </div>
  )
}

export default Services

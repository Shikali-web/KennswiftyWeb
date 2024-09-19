import React from 'react';
import { Row, Col, Typography } from 'antd';
import about_img from '../../assets/logo.png'; // Adjust the path as necessary
import './AboutUs.css'; // Import your custom CSS for additional styling

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="About Us" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>About Kennswifty</h3>
        <h2>Harnessing Knowledge and Technology to Foster Organizational and Societal Change</h2>
        <p>Kennswifty Consultancy Group Ltd (KCGL) is a Kenyan-based consulting company founded in 2017. 
          Headquartered in Nairobi, we have an outstanding background in providing consultancy services by 
          leveraging technology and applied research. KCGL is committed to serving all our clients with enthusiasm 
          and expertise toward providing lasting solutions to problems brought forward to us. Our knowledgeable and 
          experienced team is always working toward responding to clientele needs powered by its continuous pursuit 
          for personal and professional development to 
          keep it well-versed with the ever-changing landscape in the modern knowledge and technology spaces worldwide.</p>
        <p>Our knowledgeable and experienced team continuously adapts to the ever-evolving knowledge and technology landscape to stay ahead in serving our clients. We specialize in a range of services, including:</p>
        <ul>
          <li>Web Application Development – Building dynamic, scalable web applications tailored to meet specific business needs.</li>
          <li>Computer Hardware and Software Maintenance & Repair – Providing comprehensive hardware and software solutions to ensure your systems run smoothly and efficiently.</li>
          <li>Systems Administration and Networking – Managing IT systems and networks to enhance operational efficiency and security for businesses.</li>
          <li>Research and Writing – Offering expertise in academic and technical writing, especially in computer science, AI, machine learning, and emerging technologies.</li>
          <li>Computer and Technical Training – Delivering customized training in computer systems, applications, and related technical fields to equip teams with essential skills.</li>
        </ul>
        <p>KCGL continues to pursue excellence in helping businesses, organizations, and individuals harness the power of technology and knowledge to drive change.</p>
      </div>
    </div>
  );
};

export default AboutUs;

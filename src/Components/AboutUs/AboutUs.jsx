// AboutUs.jsx
import React from 'react';
import { Row, Col, Typography } from 'antd';
import aboutus from '../../assets/logo1.png'; // Adjust the path as necessary
import './AboutUs.css'; // Import your custom CSS for additional styling

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="about-us">
      <Row gutter={16} align="middle">
        <Col xs={24} md={12}>
          <img src={aboutus} alt="About Us" className="about-us-image" />
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>Who We Are</Title>
          <Paragraph>
          Kennswifty Consultancy Group Ltd (KCGL) is a Kenyan-based consulting company founded 
in 2017. Headquartered in Nairobi, we have an outstanding background in providing 
consultancy services by leveraging technology and applied research. KCGL is committed to 
serving all our clients with enthusiasm and expertise toward providing lasting solutions to 
problems brought forward to us. Our knowledgeable and experienced team is always working 
toward responding to clientele needs powered by its continuous pursuit for personal and 
professional development to keep it well-versed with the ever-changing landscape in the 
modern knowledge and technology spaces worldwide.   
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;

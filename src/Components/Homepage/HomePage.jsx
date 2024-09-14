import React from 'react';
import { Layout, Menu, Typography, Button } from 'antd';

import './HomePage.css'; // Import your custom CSS for additional styling

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">KCGL</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About Us</Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content className="hero-section">
        <div className="hero-content">
          <Title level={2}>Welcome to Kennswifty Consultancy Group Ltd</Title>
          <Paragraph>Harnessing Knowledge and Technology to Foster Organizational and Societal Change</Paragraph>
          <Button type="primary" size="large">Learn More</Button>
        </div>
          </Content>
    </Layout>
  );
};

export default HomePage;

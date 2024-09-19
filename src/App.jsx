import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HomePage from './Components/Homepage/HomePage';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Title from './Components/Title/Title';



const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
<div> 
<HomePage/>
<Title subTitle='About Us' title='Who We Are'/>
<AboutUs/>
<div className="container">
  <Title subTitle='Our Services' title='What We Offer'/>
<Services/>

</div>

 </div>
  );
};

export default App;

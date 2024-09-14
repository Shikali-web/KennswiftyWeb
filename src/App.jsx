import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HomePage from './Components/Homepage/HomePage';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';



const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
<div>
<HomePage/>
<Hero/>
<AboutUs/>


 </div>
  );
};

export default App;

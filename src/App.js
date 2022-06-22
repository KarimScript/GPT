import React from 'react';
import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";
import BLog from "./containers/blog/Blog";
import Header from "./containers/header/Header";
import Features from "./containers/features/Features";
import Footer from "./containers/footer/Footer";
import Possibility from "./containers/possibility/Possibility";
import WhatGPT from "./containers/whatGPT/WhatGPT";
import Blog from './containers/blog/Blog';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
import React,{useState} from 'react';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import "./navbar.css";
import logo from "../../assets/logo.svg";


const Navbar = () => {
const [toggleMenu,SetToggleMenu] = useState(false);

 
  return (
    <div className='gpt3_navbar'>
      <div className="gpt3_navbar-links">
         <div className="gpt3_navbar-links-logo">
            <img src={logo} alt="" />
         </div>
         <div className="gpt3_navbar-links-container">
           <p><a href="#home">Home</a></p>
           <p><a href="#wgpt3">What is GPT?</a></p>
           <p><a href="#possibility">Open AI</a></p>
           <p><a href="#features">Case Study</a></p>
           <p><a href="#blog">Library</a></p>
         </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up </button>
      </div>
      <div className="gtp3_navbar-menu">
        
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => SetToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => SetToggleMenu(true)} />
          
          }
        
        {
          toggleMenu &&(
            <div className='gpt3_navbar-menu-container scale-up-center'>
              <div className="gpt3_navbar-menu-container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Study</a></p>
                <p><a href="#blog">Library</a></p>
              </div>
              <div className="gpt3_navbar-menu-container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
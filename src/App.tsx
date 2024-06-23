import './App.css'
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { CgMenuHotdog } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function App() {
  const [selectedLink, setSelectedLink] = useState("dashboard");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);

  const linkClickHandler = (linkName: string) => {
    setSelectedLink(linkName);
  }

  const burgerMenuHandler = (burgerParam: boolean) => {
    setIsBurgerOpen(burgerParam);
  }

  const userOptionsHandler = (userOptionParam: boolean) => {
    setIsUserOptionsOpen(userOptionParam)
  }

  return (
    <>
      <div className="nav--main-container">
        <div className="nav--position-modifier">
          <section className='hamburger--menu-container'>
            {!isBurgerOpen ? <CgMenuHotdog onClick={() => burgerMenuHandler(true)} className='burger-icon'/> : <IoClose onClick={() => burgerMenuHandler(false)} className='burger-icon'/>}
          </section>
          <section className='nav--left-section-container'>
            <img className='nav--logo-img' src="./public/images/SabzLearn Logo.png" alt="SabzLearn Logo" />
            <h4 className="nav--title-h4">SabzLearn</h4>
          </section>
          <section className='nav--middle-section-container'>
            <ul className="nav--site-links-container">
              <li className={'nav--site-links-li'} onClick={() => linkClickHandler("dashboard")}><a href="#" className={Boolean(selectedLink === "dashboard") ? 'nav--site-links-a active' : 'nav--site-links-a'}>Dashboard</a></li>
              <li className={'nav--site-links-li'} onClick={() => linkClickHandler("profile")}><a href="#" className={Boolean(selectedLink === "profile") ? 'nav--site-links-a active' : 'nav--site-links-a'}>Profile</a></li>
              <li className={'nav--site-links-li'} onClick={() => linkClickHandler("messages")}><a href="#" className={Boolean(selectedLink === "messages") ? 'nav--site-links-a active' : 'nav--site-links-a'}>Messages</a></li>
              <li className={'nav--site-links-li'} onClick={() => linkClickHandler("about_us")}><a href="#" className={Boolean(selectedLink === "about_us") ? 'nav--site-links-a active' : 'nav--site-links-a'}>About us</a></li>
              <li className={'nav--site-links-li'} onClick={() => linkClickHandler("login")}><a href="#" className={Boolean(selectedLink === "login") ? 'nav--site-links-a active' : 'nav--site-links-a'}>Login</a></li>
            </ul>
          </section>
          <section className='nav--right-section-container'>
            <div className="icons--container">
              <IoSearch className='nav--icon' />
              <FaRegBell className='nav--icon' />
              <MdOutlineSettings className='nav--icon' />
            </div>
            <div className="user--profile-container">
              <h4 className="nav--user-status">Online</h4>
              {isUserOptionsOpen ? <IoClose className='burger-icon' onClick={() => userOptionsHandler(false)}/> : <img src="./public/images/profile picture sample.jpg" alt="user picture" className="nav--user-image" onClick={() => userOptionsHandler(true)}/>}
            </div>
          </section>
          {isBurgerOpen && <div className="burger-menu-box">
            <ul className="hamburger-menu-ul">
              <li className="hamburger-menu-li" onClick={() => linkClickHandler("dashboard")}><a href="#" className={Boolean(selectedLink === "dashboard") ? 'link-reset active' : 'link-reset'}>Dashboard</a></li>
              <li className="hamburger-menu-li" onClick={() => linkClickHandler("profile")}><a href="#" className={Boolean(selectedLink === "profile") ? 'link-reset active' : 'link-reset'}>Profile</a></li>
              <li className="hamburger-menu-li" onClick={() => linkClickHandler("messages")}><a href="#" className={Boolean(selectedLink === "messages") ? 'link-reset active' : 'link-reset'}>Messages</a></li>
              <li className="hamburger-menu-li" onClick={() => linkClickHandler("about_us")}><a href="#" className={Boolean(selectedLink === "about_us") ? 'link-reset active' : 'link-reset'}>About us</a></li>
              <li className="hamburger-menu-li" onClick={() => linkClickHandler("login")}><a href="#" className={Boolean(selectedLink === "login") ? 'link-reset active' : 'link-reset'}>Login</a></li>
            </ul>
          </div>}
          {isUserOptionsOpen && <div className="user-option-box">
          <ul className="user-option-ul">
              <li className="user-option-li"><a href="#" className='link-reset status'>Online</a></li>
              <li className="user-option-li"><a href="#" className='link-reset icon'><IoSearch /></a></li>
              <li className="user-option-li"><a href="#" className='link-reset icon'><FaRegBell /></a></li>
              <li className="user-option-li"><a href="#" className='link-reset icon'><MdOutlineSettings /></a></li>
            </ul>
          </div>}
        </div>
      </div>
    </>
  )
}

export default App

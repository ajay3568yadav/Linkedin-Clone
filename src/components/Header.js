import React from "react"
import "../styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from "./HeaderOptions";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import {logout} from "../features/userSlice.js"
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">

      <div className="header__left">

        <img src={require('/Users/ajayyadav/Documents/react-app/linkedin-clone/src//images/linkedin.png')} alt="logo"/>

          <div className="header__search">

              <SearchIcon/>
              
              <input type="text"></input>

          </div>

      </div>

      <div className="header__right">
          <HeaderOptions Icon= {HomeIcon} title="Home" />
          <HeaderOptions Icon= {SupervisorAccountIcon} title="My Network" />
          <HeaderOptions Icon= {WorkIcon} title="Jobs" />
          <HeaderOptions Icon= {MessageIcon} title="Messages" />
          <HeaderOptions Icon= {NotificationsIcon} title="Notifications" />
          <Link to="/about"><HeaderOptions avatar={require('/Users/ajayyadav/Documents/react-app/linkedin-clone/src/images/ajay.jpg')} title="Me"/></Link>
      </div>

    </div>
  )
}

export default Header



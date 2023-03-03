import React from "react"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from "./HeaderOptions";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">

      <div className="header__left">

        <img src={require('/Users/ajayyadav/Documents/react-app/tesla-clone/src/linkedin.png')} alt="logo"/>

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
          <HeaderOptions avatar="/Users/ajayyadav/Documents/react-app/tesla-clone/src/ajay.jpg" title="Me" />
      </div>

    </div>
  )
}

export default Header



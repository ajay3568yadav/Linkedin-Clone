
import React from 'react'
import "../styles/HeaderOptions.css"

import { Avatar } from '@mui/material';


function HeaderOptions({avatar,Icon,title,onClick}) {
  return (
    <div onClick={onClick}className="headerOption">
      {Icon && < Icon className="headerOption__icon"/>}
      {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
      <h3 className="headerOption__title"> {title}</h3>
    </div>
  )
}

export default HeaderOptions

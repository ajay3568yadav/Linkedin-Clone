import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import "../styles/Post.css"
import InputOptions from './InputOptions';

function Post({name, description,message,photoUrl}) {
  if (description.length > 30) {
    description = description.slice(0, 30) + '...';}
  return (
    <div className="post">
      <div className="post__header">
      <Avatar className="avatar" src={require('/Users/ajayyadav/Documents/react-app/linkedin-clone/src/images/ajay.jpg')}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
      </div>
      <div className="post__body">
        {photoUrl && <img src={photoUrl}></img>}
        <p>{message}</p>
      </div>
        <hr className="solid"></hr>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
        <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
        <InputOptions Icon={CommentOutlinedIcon} title="Comment" color="gray"/>
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
      </div>

    </div>
  )
}

export default Post

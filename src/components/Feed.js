import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions.js'

function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input type="text"></input>
                    <button>send</button>
                </form>
            </div>
            <InputOptions/>
        </div>
      
    </div>
  )
}

export default Feed

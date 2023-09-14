import React from 'react'
import '../styles/Sidebar.css'
import { Avatar } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AddIcon from '@mui/icons-material/Add';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb
          -4.0.3&ixid=MnwxMjA3fDB8MH xzZWFyY2h8M3x8Z3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80" alt="banner"></img>
          <Avatar className="sidebar__avatar" src={require('/Users/ajayyadav/Documents/react-app/linkedin-clone/src/images/ajay.jpg')}/>
          <h2>Ajay Yadav</h2>
          <p>ML Research intern @ASU||Researcher@DigIng||Research Assitant @SOLETLab||Teaching Assistant/UGTA||NSF Research Assistant||Production Specialist @ASUPrintingAndImagingLab</p>
      </div>

      <div className="sidebar__stats">

        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar__statNumber">168</p>
        </div>

        <div className="sidebar__stat">
          <p>Impressions of your post</p>
          <p className="sidebar__statNumber">1,575</p>
        </div>

      </div>

      <div className="sidebar_sub">
      <div className="subsription">
          <p>Access exclusive tools and insights</p>
          <div className="premium">
          <WorkspacePremiumIcon className="premium__icon" /> 
          <p className="premium_link">Try Premium for free</p>
          </div> 
        </div>

        <div className="bookmark">
          <BookmarkIcon className="bookmark__icon "/>
          <p>My Items</p>
        </div>
        
      </div>
      
      <div className="sidebar__bottom">
          <p>Groups</p>
          <div className="events">
              <p>Events</p>
              <AddIcon className="add__icon"/>
          </div>
        
          <p>Followed Hashtags</p>
          <div className="discover__section">
              <h3>Discover more</h3>
          </div>
      </div>
    </div>
  )
}

export default Sidebar

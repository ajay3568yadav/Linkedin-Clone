import React, { useState, useEffect } from 'react';
import '../styles/Feed.css';
import { Dialog, DialogContent } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import SortPanel from './SortPanel';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

import Post from './Post';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const [open,setOpen] =useState(false);
  const [file,setFile] = useState();
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  useEffect(() => {
    db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  
  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'Ajay Yadav',
      description: 'this is a test',
      message: input,
      photoUrl: URL.createObjectURL(file),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
    setOpen(!open);
    setFile("")
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onClick={()=>{setOpen(!open)}}>
           {/* <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />*/}
            <button>send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={PhotoSizeSelectActualIcon} title="Photo" color="#4F8CE2" />
          <InputOptions Icon={SmartDisplayIcon} title="Video" color="#6D994C" />
          <InputOptions Icon={CalendarTodayIcon} title="Events" color="#B98032" />
          <InputOptions Icon={ArticleIcon} title="Write article" color="#D26D4D" />
        </div>
      </div>
      <SortPanel />
      <Dialog
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "700px",  
          },
        },
      }}
      >
      <DialogContent>
        <div className="maincontent">
          <div className="heading-and-cancel">
            <div className="heading-img-p">
              <img src={require("/Users/ajayyadav/Documents/react-app/linkedin-clone/src/images/ajay.jpg")}/>
              <p>Ajay Yadav</p>
            </div>
            <button onClick={() => {setOpen(!open)}}>X</button>
          </div> 
          <div className="text-entry">
          <textarea type="text" placeholder="What are you thinking about today?" onChange={(e)=>{setInput(e.target.value)}}></textarea>
          </div>
          <div className="add-content-and-post">
  {file && <img src={URL.createObjectURL(file)} alt="Uploaded file" />}
  <label htmlFor="file-input">
    <img
      src={require("/Users/ajayyadav/Documents/react-app/linkedin-clone/src/images/image-gallery.png")}
      alt="Image Gallery"
    />
  </label>
  <input
    id="file-input"
    type="file"
    style={{ display: "none" }}
    onChange={handleChange}
  />
  <span>
    <img src={require("/Users/ajayyadav/Documents/react-app/linkedin-clone/src/images/video-camera.png")} alt="Video" />
  </span>
  <span>
    <img src={require("/Users/ajayyadav/Documents/react-app/linkedin-clone/src/images/more.png")} alt="More" />
  </span>
</div>
          <button onClick={sendPost}>Post</button>
        </div>
        </DialogContent>
      </Dialog>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;

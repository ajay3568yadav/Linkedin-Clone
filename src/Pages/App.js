import '../styles/App.css';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from "../components/firebase.js";
import { login,logout } from "../features/userSlice.js";
import NewsBar from "../components/NewsBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
          })
        );
      }
      else{
        dispatch(logout());
      }
    })
  },[])

  return ( 
    <Router>
          <Routes>
      <Route path="/" element={!user ? (
        <Login/>
      ) : (
        <div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Feed/>
      <NewsBar/>
      </div>
    </div> 
      )}/>
      <Route path="/about" element={<Home/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;

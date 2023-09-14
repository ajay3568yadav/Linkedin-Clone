import React, { useState } from 'react';
import Linkpng from "../images/Linkedin-logo-png.png";
import "../styles/Login.css";
import Google from "../images/google-icon.png";
import { auth } from "../components/firebase.js";
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice.js"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pageName, setPageName] = useState("Join LinkedIn");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const dispatch =useDispatch();

    const join = (e) => {
        e.preventDefault()
        if (pageName === "Join LinkedIn") {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userAuth) => {
                    userAuth.user.updateProfile({
                        displayName: fname +" "+lname
                    }).then(()=>{
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: userAuth.user.displayName
                            })
                        )
                    });
                })
                .catch((error) => {
                    alert(error)
                });
        }
        else{
            auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName
                    })
                )
            });
        }
    };

    const switchHeading = (e) => {
        setPageName((prevPageName) => {
            if (prevPageName === "Join LinkedIn") {
                return "Sign In";
            } else {
                return "Join LinkedIn";
            }
        });
        e.preventDefault();
    };

    const loginSignUp = (
        <h3> Already on Linkedin? <span style={{ cursor: `pointer`, color: `#0074b7`, fontWeight: `400` }} onClick={switchHeading}>Sign in</span></h3>
    );

    const joinLinkedIn = (
        <h3> New to Linkedin? <span style={{ cursor: `pointer`, color: `#0074b7`, fontWeight: `400` }} onClick={switchHeading}>Join now</span></h3>
    );

    const forgotPassword = (
        <span className="passwordForget">Forgot Password?</span>
    );

    const firstname = (
        <input type="text" placeholder="First Name" value={fname} onChange={(e) => { setFname(e.target.value) }} />
    );

    const lastname = (
        <input type="text" placeholder="Last Name" value={lname} onChange={(e) => { setLname(e.target.value) }} />
    );

  return (
    <div className="login">
        <img src={Linkpng} className="head-png"></img>
        <div className="form-wrapper">
        <form className="login-page">
            <h1>{pageName}</h1>
            {pageName === "Join LinkedIn"? firstname:""}
            {pageName === "Join LinkedIn"? lastname:""}
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            {pageName === "Sign In"?forgotPassword:(<p>By clicking Agree & Join, you agree to the LinkedIn<br/>
            User Agreement, Privacy Policy, and Cookie Policy.</p>)}
            <button className="join-and-agree" onClick={join}>{pageName === "Sign In"?"Sign In":"Agree & Join"}</button>
            <span className="third-party-join">
                <span className="third-party-join-or">or</span>
            </span>
            <button className="third-party" onClick={(e)=>{e.preventDefault()}}>
                <img src={Google} className="google-png"></img>
                <h3>{pageName === "Sign In"?"Sign in with Google":"Join with Google"}</h3>
            </button>
            {pageName === "Sign In"? loginSignUp:joinLinkedIn}
        </form>
        </div>
        
    </div>
  )
}

export default Login

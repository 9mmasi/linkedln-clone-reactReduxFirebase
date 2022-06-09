import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import "./login.css"
import{auth} from "./firebase"
import {login} from "./features/user/userSlice"


function Login() {

const[name,setName]=useState("")
const[profilepic,setProfilepic]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
    const dispatch =useDispatch();
    const signin=(e)=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
        dispatch(login({
          uid:userAuth.user.uid,
          email:userAuth.user.email,
          profilepic:userAuth.user.photoURL,
          displayName:userAuth.user.displayName
        }))
      }).catch(error=>console.error);
      setEmail("")
      setPassword("")

    }
    const register=()=>{
      if(!name){
        return alert("Please enter your full name to accomlish registration")
      
      }
      auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
        userAuth.user.updateProfile({
          displayName:name,
          photoURL:profilepic
        }).then(()=>{
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoURL:profilepic
          }))
        })
      }).catch((error)=>alert(error.message))

    }
  return (
    <div className='login'>
        <img src='https://www.pinterest.com/pin/630292910349512155/' alt='linkedin_logo' />
        <form>

            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Full Name(required if it's registration)" />
            <input value={profilepic} onChange={(e)=>{setProfilepic(e.target.value)}} type="text" placeholder='Optional(Profile picture url)'/>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
            <button onClick={signin}>Signin</button>
            <p>if not member?<span className="register onChange={}" onClick={register}>
              register</span></p>
        </form>
    </div>
  )
}

export default Login
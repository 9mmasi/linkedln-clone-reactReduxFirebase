import React ,{useEffect}from 'react';
import './App.css';
import Header from "./header";
import SideBar from './SideBar';
import Feed from './feed';
import Widget from './widget';
import Login from "./Login";
import{auth} from "./firebase"
import {useDispatch,useSelector} from "react-redux"
import{login,logout} from "./features/user/userSlice"

function App() {
  const user=useSelector((state)=>state.user.value)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.user.uid,
          email:userAuth.user.email,
          profilepic:userAuth.user.photoURL,
          displayName:userAuth.user.displayName
        }))
      }
      else{
        dispatch(logout())
      }
    })
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
     <Header />
     {!user?(
       <Login />
     ):( 
     <div className='app_body'>
     <SideBar />
     <Feed />
     <Widget />
     
     </div>)}
     
    
     
    </div>
  );
}

export default App;

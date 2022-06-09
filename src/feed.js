import React,{useState,useEffect} from 'react';
import './feed.css'
import FeedInputOption from './FeedInputOption';
import CreateIcon from  '@mui/icons-material/Create';
import ImageIcon from  '@mui/icons-material/Image';
import SubscriptionsIcon from  '@mui/icons-material/Subscriptions';
import EventNoteIcon from  '@mui/icons-material/EventNote';
import CalendarViewDayIcon from  '@mui/icons-material/CalendarViewDay';
import PostOption from './postoption'
import  {useSelector} from "react-redux"
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from "react-flip-move"
function Feed() {
  const user = useSelector(state=>state.user.value);
  const[input,setInput]=useState("");
  const[posts,setPosts]=useState([]);
  
  useEffect(()=>{
    db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot)=>{
      setPosts(
        snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data(),
        }))
      )
      
    });
  },[]);

  const sendPost= (e) =>{
    e.preventDefault();
    db.collection('posts').add(
      {
        name:user.displayName,
        description:user.email,
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
      
    )
    setInput("")
  };
  return (
    <div className='feed'>
      <div className='feedInputContainer'>
        <div className='feedinput'>
          <CreateIcon />
          <form>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={sendPost} type="submit">send</button>
          </form>
        </div>
        <div className='feedinputoption'>
        <FeedInputOption color='#70B5F9' Icon={ImageIcon} title='Photo' />
        <FeedInputOption color='#E7A33E' Icon={SubscriptionsIcon} title='Video' />
        <FeedInputOption color='#C0CBCD' Icon={EventNoteIcon} title='Event' />
        <FeedInputOption color='#7FC15E' Icon={CalendarViewDayIcon} title='Write article' />
      </div>
      </div>
     
    
     
      <FlipMove>
      {posts.map(({id,data:{name,message,description}})=>(
        <PostOption
        key={id}
        name={name}
        description={description}
        message={message}
        
        
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

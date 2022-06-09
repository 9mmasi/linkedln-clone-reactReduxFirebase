import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './sideBar.css'

function SideBar() {
    const user = useSelector(state=>state.user.value);
    const recently_activity=(topic)=>(
        
            <div className='recently_activities'>
                <span className='sidebar_hash'>#</span>
                <p>{topic}</p>

            </div>
        
    );

    
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <img src='https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            <Avatar className='avatar' />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar_starts'>
            <div className='side_start'>

            <p>who views you</p>
            <p className='side_viewnumber'>2,390</p>

            </div>
            <div className='side_start'>
                <p>views on post</p>
                <p className='side_viewnumber'>2,509</p>
            </div>

           
        </div>

        <div className='sideBottom'>
            <p>Recent</p>
            {recently_activity('javascript')}
            {recently_activity('java')}
            {recently_activity('Python')}
            {recently_activity('java')}
            {recently_activity('Kotlin')}
            {recently_activity('Php')}
            {recently_activity('C#')}
            
        </div>

      
    </div>
  );
}

export default SideBar;

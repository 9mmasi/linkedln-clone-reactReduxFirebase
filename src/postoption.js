import { Avatar } from '@mui/material';
import React,{forwardRef} from 'react';
import FeedInputOption from './FeedInputOption';
import './posts.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"


const PostOption=forwardRef(({description,message,name},ref)=> {
  return <div ref={ref} className='post'>
      <div className='post_header'>
      <Avatar />
      <div className='post_info'>
      <h4>{name}</h4>
      <p>{description}</p>
      </div>
      </div>
      
      <div className='post_body'>
      <p>{message}</p>
      </div>
  
  <div className='post_button'>
      <FeedInputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
      <FeedInputOption Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
      <FeedInputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
      <FeedInputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
  </div>
 
  </div>;
})

export default PostOption;

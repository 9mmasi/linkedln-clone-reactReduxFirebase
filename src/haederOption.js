import React from 'react';
import "./headerOption.css"

 function HeaderOption({Avatar,title,Icon}) {
  return (
    <div className='HeaderOption'>
      { Icon && <Icon className='header_icon' /> }
     {Avatar &&<Avatar className='header_icon' src={Avatar} />}
      <h3 className='header_title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
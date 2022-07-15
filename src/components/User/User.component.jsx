import React from 'react'
import "./User.styles.css";


const User = ({ userName }) => {
  return (
    <div className='user'>
    
      <span className='userName'>{userName}</span>
    </div>
  );
};

export default User;
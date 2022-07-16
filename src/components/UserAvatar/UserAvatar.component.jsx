 import React from 'react'
import "./UserAvatar.styles.css";


const UserAvatar = ({ userName }) => {

  // var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var randomColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";;

  return (
    <div className='avatarWrapper'>
      <div
        className='avatar'
        data-label={userName.charAt(0)}
        style={{ backgroundColor: randomColor }}
      ></div>
      <h5 className='avatarName' style={{ color: randomColor }}>
        {userName}
      </h5>
    </div>
  );
};

export default UserAvatar;
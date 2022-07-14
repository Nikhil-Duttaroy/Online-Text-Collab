import React from 'react'
import logo from "../../assets/logo.svg"
import  "./HomePage.styles.css"

const HomePage = () => {
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='logoImage' src={logo} alt='text-collaboration-logo' />
        <h4 className='label'>Join a Existing Room</h4>
        <div className='inputContainer'>
          <input type='text' className='inputBox' placeholder='Room Id' />
          <input type='text' className='inputBox' placeholder='User Name' />
          <button className='btn joinBtn'>Join Room</button>
          <button className='btn createBtn'>
           Create Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./HomePage.styles.css";

import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  
  const notify = () =>toast.success("New Room Created");
  
  const createNewRoom = (e) => {
    const id = uuid();
    setRoomId(id);
    notify();
  };



  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='logoImage' src={logo} alt='text-collaboration-logo' />
        <h4 className='label'>Join &nbsp;/&nbsp; Create a Room</h4>
        <div className='inputContainer'>
          <input
            type='text'
            className='inputBox'
            placeholder='Room Id'
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
          />
          <input
            type='text'
            className='inputBox'
            placeholder='User Name'
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <button className='btn joinBtn'>Join Room</button>
          <button className='btn createBtn' onClick={createNewRoom}>
            Create Room
          </button>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default HomePage;

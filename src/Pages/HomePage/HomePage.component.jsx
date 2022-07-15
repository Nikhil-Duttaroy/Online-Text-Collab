import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./HomePage.styles.css";
import { useNavigate } from "react-router-dom";

import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  //States
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  //hooks
  const navigate = useNavigate();

  //functions
  const notifySuccess = () =>
    toast.success("New Room Created", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyError = () =>
    toast.error("Room Id and UserName Required", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      joinRoom();
    }
  };

  const createNewRoom = (e) => {
    const id = uuid();
    setRoomId(id);
    notifySuccess();
  };

  const joinRoom = (e) => {
    if (!roomId || !userName) {
      notifyError();
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
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
            onKeyUp={handleInputEnter}
            value={roomId}
          />
          <input
            type='text'
            className='inputBox'
            placeholder='User Name'
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleInputEnter}
            value={userName}
          />
          <button className='btn joinBtn' onClick={joinRoom}>
            Join Room
          </button>
          <button className='btn createBtn' onClick={createNewRoom}>
            Create Room
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;

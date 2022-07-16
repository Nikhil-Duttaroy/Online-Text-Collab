import React, { useRef, useState, useEffect } from "react";
import "./EditorPage.Styles.css"
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";


import UserAvatar from "../../components/UserAvatar/UserAvatar.component";
import Editor from './../../components/Editor/Editor.component';

import { FaCopy } from "react-icons/fa";


import { initSocket } from './../../socket';
import { ACTIONS } from './../../Actions';

const EditorPage = () => {

  const location=useLocation()
   const socketRef = useRef(null);

   useEffect(() => {
    const init=async()=>{
      socketRef.current=await initSocket();
      // socketRef.Ref.emit(ACTIONS.JOIN, {
      //   roomId,
      //   userName: location?.state?.userName,
      // });
    }
    init()
   },[])

  //state
  const [users, setUsers] = useState([
    {
      socketId: 1,
      userName: "Nikhil",
    },
    {
      socketId: 2,
      userName: "ABCD",
    },
    {
      socketId: 3,
      userName: "Nikhil",
    },
    {
      socketId: 4,
      userName: "ABCD",
    },
    {
      socketId: 5,
      userName: "Nikhil",
    },
    {
      socketId: 6,
      userName: "ABCD",
    },
  ]);


  return (
    <div className='mainWrapper'>
      <div className='sideBar'>
        <div className='sideBarUpper'>
          <img src={logo} alt='logo' className='sideBarLogo' />
          <h3 className='label'>Connected Users</h3>
          <div className='userList'>
            {users.map((user) => (
              <UserAvatar key={user.socketId} userName={user.userName} />
            ))}
          </div>
        </div>
        <button className='btn copyBtn'>
          <FaCopy /> &nbsp;Room ID
        </button>
        <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className='editorWrapper'>
        <Editor />
      </div>
    </div>
  );
}

export default EditorPage
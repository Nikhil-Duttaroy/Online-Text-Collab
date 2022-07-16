import React,{ useState } from 'react'
import "./EditorPage.Styles.css"
import logo from "../../assets/logo.svg";

import UserAvatar from "../../components/UserAvatar/UserAvatar.component";
import Editor from './../../components/Editor/Editor.component';


const EditorPage = () => {

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
          <i className='fa fa-copy'></i> Room Id
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
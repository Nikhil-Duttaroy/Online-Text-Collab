import React,{ useState } from 'react'
import "./EditorPage.Styles.css"
import logo from "../../assets/logo.svg";

import User from "../../components/User/User.component";


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
  ]);


  return (
    <div className='mainWrapper'>
      <div className='sideBar'>
        <div className='sideBarInner'>
          <img src={logo} alt='logo' className='sideBarLogo' />
          <h3 className='label'>Connected Users</h3>
          <div className='userList'>
            {users.map((user) => (
              <User key={user.socketId} userName={user.userName} />
            ))}
          </div>
        </div>
      </div>
      <div className='editorWrapper'>2</div>
    </div>
  );
}

export default EditorPage
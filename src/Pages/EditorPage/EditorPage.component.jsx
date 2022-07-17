import React, { useRef, useState, useEffect } from "react";
import "./EditorPage.Styles.css";
import logo from "../../assets/logo.svg";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import UserAvatar from "../../components/UserAvatar/UserAvatar.component";
import Editor from "./../../components/Editor/Editor.component";

import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { initSocket } from "./../../socket";
import ACTIONS from "../../actionsClient";

const EditorPage = () => {
  //hooks
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigate = useNavigate();

  //state
  const socketRef = useRef(null);
  const [users, setUsers] = useState([]);

  //functions
  const notifyJoin = (userName) =>
    toast.success(`${userName} Joined`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyDisconnect = (userName) =>
    toast.error(`${userName} Left the Room`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      function handleErrors(e) {
        console.log("socket error", e);
        reactNavigate("/");
      }

      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      //User Joining
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: location?.state?.userName,
      });

      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, userName, socketId }) => {
          if (userName !== location.state?.userName) {
            notifyJoin(userName);
            console.log(userName);
          }
          setUsers(clients);
        }
      );

      //User disconnecting
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        notifyDisconnect(userName);
        setUsers((prev) => {
          return prev.filter((user) => user.socketId !== socketId);
        });
      });
    };

    init();
    //cleanup Listeners
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
    };
  }, []);

  if (!location.state) {
    return <Navigate to='/' />;
  }

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
};

export default EditorPage;

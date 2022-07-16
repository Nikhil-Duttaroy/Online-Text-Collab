import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  // return io(process.env.REACT_APP_BACKEND_URL, options);
  return io(import.meta.env.VITE_BACKEND_URL, options);
  // return io("http://localhost:3001", options);
};

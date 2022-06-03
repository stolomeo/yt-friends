import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Home from "./components/Home/Home";
import GlobalStyle from "./GlobalStyle";
// import {
//   ClientToServerEvents,
//   ServerToClientEvents,
// } from "./interfaces/socket";
const socket: any = io("http://localhost:3001");
socket.connect();

function App() {
  const [message, setMessage] = useState("");
  const [messageReceieved, setMessageReceieved] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receieve_message", (data: any) => {
      setMessageReceieved(data.message);
    });
  }, [socket]);

  return (
    <>
      <GlobalStyle />
      <Home />
      <input
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send message</button>
      <h1>Message: </h1>
      {messageReceieved}
    </>
  );
}

export default App;

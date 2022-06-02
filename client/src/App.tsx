import { io, Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "./interfaces/socket";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3001"
);
socket.connect();

function App() {
  const sendMessage = () => {};
  return (
    <>
      <input placeholder="Message..." />
      <button onClick={sendMessage}>Send message</button>
    </>
  );
}

export default App;

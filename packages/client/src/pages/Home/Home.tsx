import { useEffect } from "react";
import useSocketContext from "../../hooks/useSocketContext";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const socketRef = useSocketContext();
  const navigate = useNavigate();

  useEffect(() => {
    socketRef!.current = io(import.meta.env.VITE_BACKEND);
    socketRef!.current.on("disconnect", () => {
      console.log("disconnect");
    });
  }, [socketRef]);

  const handleJoin = () => {
    navigate("/room");
  };

  return (
    <div>
      <button onClick={handleJoin}>submit</button>
    </div>
  );
};

export default Home;

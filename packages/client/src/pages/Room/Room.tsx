import { io } from "socket.io-client";
import useSocketContext from "../../hooks/useSocketContext";
import { useEffect, useRef } from "react";

import styles from "./Room.module.scss";

const Room = () => {

  // const servers = {
  //   iceServers:[
  //       {
  //           urls:['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
  //       }
  //   ]
  // }

  const socketRef = useSocketContext();
  // const audioElem = useRef<HTMLAudioElement>(null);
  // const localStream = useRef<MediaStream>();
  const peerConnection = useRef<RTCPeerConnection>()
  const username = "jackass"

  useEffect(() => {
    socketRef!.current = io(import.meta.env.VITE_BACKEND);
    peerConnection.current = new RTCPeerConnection();

    socketRef!.current.emit("room:join", username)
  },[socketRef])

  return (
    <div className={styles.room}></div>
  );
}
 
export default Room;
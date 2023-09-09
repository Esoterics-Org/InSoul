import { io } from "socket.io-client";
import useSocketContext from "../../hooks/useSocketContext";
import { useEffect, useRef, useState } from "react";

import styles from "./Room.module.scss";
import Message from "../../component/Message/Message";

const Room = () => {
  const socketRef = useSocketContext();
  const audioElem = useRef<HTMLAudioElement>(null);
  const localStream = useRef<MediaStream>();
  const remoteStream = useRef<MediaStream>();
  const peerConnection = useRef<RTCPeerConnection>()

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Array<{soulName: string, msg: string}>>([]);
  const username = "jackass"

  useEffect(() => {
    const servers = {
      iceServers: [
        {
          urls: [
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
    };

    const handleInit = () => {
      console.log("init");
      socketRef!.current!.on("msg:recieve", (msg) => {
        setMessages(prev => [...prev, {soulName: "ok", msg: msg.text}])
      });
    };

    const createPeerConnection = async () => {
      peerConnection.current = new RTCPeerConnection(servers);
      remoteStream.current = new MediaStream();
      audioElem.current!.srcObject = remoteStream.current;

      if (!localStream.current) {
        localStream.current = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
      }

      localStream.current.getAudioTracks().forEach((track) => {
        peerConnection.current!.addTrack(
          track,
          localStream.current as MediaStream
        );
      });

      peerConnection.current.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.current!.addTrack(track);
        });
      };

      peerConnection.current.onicecandidate = (event) => {
        if (event.candidate) {
          socketRef!.current!.emit("iceCandidate:send", {
            candidate: event.candidate,
          });
        }
      };
    };

    socketRef!.current = io(import.meta.env.VITE_BACKEND);

    socketRef!.current.on("connect", () => console.log("connected"));
    socketRef!.current.emit("room:join", username);
    socketRef!.current.on("init", handleInit);

    socketRef!.current.on("wrtc:init", async () => {
      console.log("wrtc:init");
      await createPeerConnection();

      const offer = await peerConnection.current!.createOffer();
      await peerConnection.current?.setLocalDescription(offer);

      socketRef!.current!.emit("sdpOffer:send", { sdp: offer });
    });

    socketRef!.current.on("sdpOffer:recieve", async (offer) => {
      console.log(offer);
      await createPeerConnection();

      await peerConnection.current?.setRemoteDescription(offer.sdp);
      const answer = await peerConnection.current?.createAnswer();
      await peerConnection.current?.setLocalDescription(answer);
      socketRef!.current!.emit("sdpAnswer:send", { sdp: answer });
    });

    socketRef!.current.on("sdpAnswer:recieve", (answer) => {
      if (peerConnection.current) {
        console.log(answer);
        peerConnection.current.setRemoteDescription(answer.sdp);
      }
    });

    socketRef!.current.on("iceCandidate:recieve", (iceCandidate) => {
      console.log(iceCandidate);
      peerConnection.current?.addIceCandidate(iceCandidate.candidate);
    });
  }, [socketRef]);

  const handleSendMsg = () => {
    socketRef!.current!.emit("msg:send", {text: message})
    setMessages((prev) => [...prev, {soulName: username, msg: message}]);
    setMessage("");
  }

  return (
    <div className={styles.room}>
      <div className={styles["voice-chat"]}>
        <audio ref={audioElem} autoPlay playsInline></audio>
      </div>
      <div className={styles["text-chat"]}>
        <div className={styles["msg-container"]}>
          {
            messages.map((message) => (
              <Message msg={message.msg} isSelfMsg={message.soulName === username}/>
            ))
          }
        </div>
        <div className={styles["msg-form"]}>
          <input 
            className={styles["msg-input"]} 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={styles["msg-send-btn"]} onClick={handleSendMsg}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Room;

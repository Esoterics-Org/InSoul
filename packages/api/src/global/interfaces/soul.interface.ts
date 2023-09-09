import { Socket } from "socket.io";

interface Soul {
    roomId: string,
    peerConnection: RTCPeerConnection,
    socket: Socket,
    audioStream: MediaStream,
}

export {Soul}
import { MutableRefObject, useContext } from "react"
import { SocketContext } from "../context/SocketContext"
import { Socket } from "socket.io-client";

const useSocketContext = (): MutableRefObject<Socket | undefined> | undefined => {
    return useContext(SocketContext);
}

export default useSocketContext;
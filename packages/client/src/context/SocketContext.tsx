import { ReactNode, createContext, useRef, MutableRefObject, Context } from "react";
import { Socket } from "socket.io-client";

const SocketContext: Context<MutableRefObject<Socket | undefined> | undefined> = createContext<MutableRefObject<Socket | undefined> | undefined>(undefined);

const SocketContextProvider = ({children}: {children: ReactNode}) => {
  const socket = useRef<Socket>();

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

export { SocketContextProvider, SocketContext };
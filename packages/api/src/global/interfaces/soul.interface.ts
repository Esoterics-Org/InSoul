import { Socket } from "socket.io";

interface Soul {
  userName: string;
  socket: Socket;
}

export { Soul };

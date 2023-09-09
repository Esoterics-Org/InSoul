import { Socket } from "socket.io";
import * as States from "@states";
import { io } from "src/server";

const init = (socket: Socket) => {
  let roomId: string | null = null;

  for (const id of socket.rooms.values()) {
    if (States.rooms.has(id)) {
      roomId = id;
      break;
    }
  }

  if (roomId === null) {
    return;
  }
  io.sockets.in(roomId).emit("init");

  const room = States.rooms.get(roomId);

  room!.forEach((elem) => {
    elem.socket.on("msg:send", (msg) => {
      elem.socket.broadcast.to(roomId as string).emit("msg:recieve", msg)
    })

    elem.socket.on("sdpOffer:send", (offer) => {
      elem.socket.broadcast.to(roomId as string).emit("sdpOffer:recieve", offer)
    })

    elem.socket.on("iceCandidate:send", (candidate) => {
      elem.socket.broadcast.to(roomId as string).emit("iceCandidate:recieve", candidate)
    })

    elem.socket.on("sdpAnswer:send", (answer) => {
      elem.socket.broadcast.to(roomId as string).emit("sdpAnswer:recieve", answer)
    })
  })

  socket.emit("wrtc:init");
}

export { init };

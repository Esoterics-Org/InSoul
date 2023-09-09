import { Socket } from "socket.io";

const onConnection = (socket: Socket) => {
  socket.on("room:join", async (username) => {
    console.log(username)
  })
}

export {onConnection}
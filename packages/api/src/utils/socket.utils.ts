import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import * as States from "@states";
import * as Controllers from "@controllers";

const onConnection = (socket: Socket) => {
  socket.on("room:join", async (username) => {
    let emptyRoomId = null;
    const rooms = States.rooms;

    for (const room of rooms.entries()) {
      if (room[1].length < 2) {
        emptyRoomId = room[0];
        break;
      }
    }

    if (emptyRoomId) {
      socket.join(emptyRoomId);
      rooms.get(emptyRoomId)?.push({ userName: username, socket: socket });
      Controllers.Socket.init(socket);
      return;
    }

    const uid = uuidv4();
    socket.join(uid);
    rooms.set(uid, [{ userName: username, socket: socket }]);
  });

  socket.on("disconnecting", async () => {
    socket.rooms.forEach((roomId) => States.rooms.delete(roomId));
  });
};

export { onConnection };

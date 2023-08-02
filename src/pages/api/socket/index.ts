import { Server } from "socket.io";
import { type NextApiRequest } from "next";
import { type NextApiResponseWithSocket } from "~/interfaces/socket";

const SocketHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  const server = res.socket.server.io;
  if (server) {
    server.on("connection", (socket) => {
      socket.emit("msg", {
        msg: "hola mundo",
      });
      socket.on("unirse-room", async (room: string, callback) => {
        await socket.join(room);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        callback(`Te has unido a la sala ${room}`);
      });
    });
  } else {
    const io = new Server(res.socket.server, {
      addTrailingSlash: false,
    });
    res.socket.server.io = io;
  }
  res.end();
};

export default SocketHandler;

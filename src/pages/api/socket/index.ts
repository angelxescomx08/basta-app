import { Server } from "socket.io";
import { type NextApiRequest } from "next";
import { type NextApiResponseWithSocket } from "~/interfaces/socket";

const SocketHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server, {
      addTrailingSlash: false,
    });
    res.socket.server.io = io;
  }
  res.end();
};

export default SocketHandler;

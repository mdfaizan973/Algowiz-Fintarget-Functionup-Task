// WebSocketConnection.js
import { useEffect } from "react";
import io from "socket.io-client";

const WebSocketConnection = ({ onData }) => {
  useEffect(() => {
    const socket = io(
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    );

    socket.on("connect", () => {
      console.log("Connected to WebSocket");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket");
    });

    socket.on("message", (data) => {
      onData(JSON.parse(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [onData]);

  return null;
};

export default WebSocketConnection;

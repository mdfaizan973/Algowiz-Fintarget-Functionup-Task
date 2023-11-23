import "./App.css";
import { useEffect, useState } from "react";
import Chart from "./Components/Chart";

function App() {
  const [ltpData, setLtpData] = useState([]);
  useEffect(() => {
    const socket = new WebSocket(
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    );
    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onmessage = (event) => {
      // console.log("Received message:", event.data);
      const data = JSON.parse(event.data);
      // console.log(data);
      setLtpData(data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    // socket.onclose = (event) => {
    //   console.log("WebSocket Closed:", event);
    // };

    return () => {
      socket.close();
    };
  }, []);

  // console.log(ltpData);

  return (
    <div className="App">
      <nav>
        <p>Nifty:{ltpData.Nifty}</p>
        <p>BankNifty: {ltpData.Banknifty}</p>
        <p>FinNifty: {ltpData.Finnifty}</p>
      </nav>

      <Chart chartData={ltpData} />
    </div>
  );
}

export default App;

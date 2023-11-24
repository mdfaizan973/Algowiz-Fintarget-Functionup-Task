import "./App.css";
import { useEffect, useState } from "react";
import Chart from "./Components/Chart";

function App() {
  const [ltpData, setLtpData] = useState([]);
  const [selectedAxis, setSelectedAxis] = useState("Nifty");

  useEffect(() => {
    const socket = new WebSocket(
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    );

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLtpData(data);
    };

    socket.onerror = (error) => {
      console.error(error);
    };

    // socket.onclose = (event) => {
    //   console.log("WebSocket Closed:", event);
    // };

    return () => {
      socket.close();
    };
  }, []);
  const handleAxisChange = (selectedAxis) => {
    setSelectedAxis(selectedAxis);
  };

  return (
    <div className="App">
      <nav>
        <img src="https://algowiz.in/_next/image?url=%2Flogo.png&w=256&q=75" />
        <div>
          <p onClick={() => handleAxisChange("Nifty")}>Nifty:{ltpData.Nifty}</p>
          <p onClick={() => handleAxisChange("Banknifty")}>
            BankNifty: {ltpData.Banknifty}
          </p>
          <p onClick={() => handleAxisChange("Finnifty")}>
            FinNifty: {ltpData.Finnifty}
          </p>
        </div>
      </nav>

      <div className="middle-Comtent">
        <div className="sidebar">
          <img
            style={{ marginLeft: "80px", width: "100px" }}
            src="https://algowiz.in/_next/image?url=%2Flogo.png&w=256&q=75"
          />

          <a href="#home">Home</a>
          <a href="#nifty">Nifty:{ltpData.Nifty}</a>
          <a href="#bankNifty">BankNifty: {ltpData.Banknifty}</a>
          <a href="#finNifty">FinNifty: {ltpData.Finnifty}</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#settings">Settings</a>
        </div>
        <div className="charts">
          <Chart chartdata={ltpData} selectedAxis={selectedAxis} />
        </div>
      </div>
    </div>
  );
}

export default App;

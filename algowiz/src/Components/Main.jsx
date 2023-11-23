// App.js
import { useState } from "react";
import WebSocketConnection from "./WebSocketConnection";
import CandlestickChart from "./CandlestickChart";

const Main = () => {
  const [ltpData, setLtpData] = useState({});
  const [selectedInstrument, setSelectedInstrument] = useState("Nifty");
  const [selectedTimeframe, setSelectedTimeframe] = useState("1min");

  const handleData = (data) => {
    setLtpData(data);
  };

  const handleInstrumentChange = (e) => {
    setSelectedInstrument(e.target.value);
  };

  const handleTimeframeChange = (e) => {
    setSelectedTimeframe(e.target.value);
  };
  const name = "faizan";
  return (
    <div>
      <WebSocketConnection onData={handleData} />
      {/* <WebSocketConnection /> */}
      <h1>Last Traded Price</h1>
      <p>{ltpData[selectedInstrument]}</p>
      <select value={selectedInstrument} onChange={handleInstrumentChange}>
        <option value="Nifty">Nifty</option>
        <option value="BankNifty">BankNifty</option>
        <option value="FinNifty">FinNifty</option>
      </select>
      <select value={selectedTimeframe} onChange={handleTimeframeChange}>
        <option value="1min">1 Minute</option>
        <option value="3min">3 Minutes</option>
        <option value="5min">5 Minutes</option>
      </select>
      {/* <CandlestickChart data={} /> */}
      <CandlestickChart data={name} />
    </div>
  );
};

export default Main;

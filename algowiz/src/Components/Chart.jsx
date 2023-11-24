import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
const Chart = ({ chartdata, selectedAxis }) => {
  const [series, setSeries] = useState([]);

  const generateRandomData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const randomY = Array.from(
        { length: 4 },
        () => Math.random() * 10 + chartdata[selectedAxis]
      );

      return {
        x: new Date().getTime() + i * 60000,
        y: randomY,
      };
    });
  };

  const chartOptions = {
    chart: {
      type: "candlestick",
      height: 350,
      background: "#f5f5f5",
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
      style: {
        fontSize: "20px",
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    if (!selectedAxis || !chartdata[selectedAxis]) {
      console.error("Invalid selectedAxis:", selectedAxis);
      return;
    }

    setSeries([
      {
        data: generateRandomData(),
      },
    ]);
  }, [chartdata, selectedAxis]);

  return (
    <div className="chart-container">
      <h2 className="chart-heading">{selectedAxis}</h2>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default Chart;

import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import "../App.css";
const Chart = ({ chartdata, selectNifty }) => {
  const [series, setSeries] = useState([]);

  const generateRandomData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const randomY = Array.from(
        { length: 4 },
        () => Math.random() * 10 + chartdata[selectNifty]
      );

      return {
        x: new Date().getTime() + i * 60000,
        y: randomY,
      };
    });
  };

  const chartOptions = {
    chart: {
      height: 350,
      type: "candlestick",
      background: "#f5f5f5",
      borderRadius: "25px",
    },
    title: {
      text: "CandleStick Chart - Category X-axis",
      align: "left",
    },

    annotations: {
      xaxis: [
        {
          x: "Oct 06 14:00",
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              fontSize: "12px",
              color: "#fff",
              background: "#00E396",
            },
            orientation: "horizontal",
            offsetY: 7,
            text: "Annotation Test",
          },
        },
      ],
    },

    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    if (!selectNifty || !chartdata[selectNifty]) {
      console.log(selectNifty);
      return;
    }

    setSeries([
      {
        data: generateRandomData(),
      },
    ]);
  }, [chartdata, selectNifty]);

  return (
    <div className="container">
      <h2 className="heading">{selectNifty}</h2>
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
Chart.propTypes = {
  chartdata: PropTypes.object.isRequired,
  selectNifty: PropTypes.string.isRequired,
};

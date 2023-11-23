import { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HCMore from "highcharts/highcharts-more";

// Initialize the Highcharts More module
HCMore(Highcharts);

const Chart = (ltpData) => {
  console.log(ltpData.chartData);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://demo-live-data.highcharts.com/aapl-ohlc.json"
      ).then((response) => response.json());
      const isUpLineColorGreen = true;
      //  const dataArray = Object.entries(ltpData.chartData).map(
      //         ([key, value]) => [key, ...value]
      //       );
      Highcharts.stockChart("container", {
        rangeSelector: {
          selected: 1,
        },
        title: {
          text: "AAPL Stock Price",
        },
        plotOptions: {
          candlestick: {
            color: isUpLineColorGreen ? "green" : "red",
            upColor: isUpLineColorGreen ? "green" : "red",
            lineColor: isUpLineColorGreen ? "green" : "red",
            upLineColor: isUpLineColorGreen ? "green" : "red",

            borderColor: "red",
            downColor: "red",
            downLineColor: "red",
          },
        },
        series: [
          {
            type: "candlestick",
            name: "AAPL Stock Price",
            data: data,
            dataGrouping: {
              units: [
                [
                  "week", // unit name
                  [1], // allowed multiples
                ],
                ["month", [1, 2, 3, 4, 6]],
              ],
            },
          },
        ],
      });
    };

    fetchData();
  }, []);

  return <div id="container">Chart</div>;
};

export default Chart;

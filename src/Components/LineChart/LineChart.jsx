import React from "react";
import Chart from "react-google-charts";
const data = [
  ["Year", "Sales", "Expenses"],
  ["Jan", 1000, 400],
  ["Feb", 1170, 460],
  ["March", 660, 1120],
  ["April", 1030, 540],
  ["May", 1030, 540],
  ["June", 1030, 540],
  ["July", 1030, 540],
  ["August", 1030, 540],
  ["September", 1030, 540],
  ["October", 1030, 540],
  ["November", 1030, 540],
  ["December", 140, 1540],
];

const options = {
    title: "সলিড পারফরমেন্স",
    hAxis: { title: "", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "100%", height: "70%" },
  };
const LineChart = () => {
  return (
    <div>
      <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
};

export default LineChart;

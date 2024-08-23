import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["তেল", 13],
  ["বাদাম", 1.4],
  ["মধু", 83],
  ["খেজুর", 2.3],
  
];

export const options = {
  title: "পণ্য বিক্রয়",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
const PieChart = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default PieChart;

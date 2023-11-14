import React from "react";
import { Bar } from "react-chartjs-2";
import { BarElement, Chart } from "chart.js";

const BarChart = () => {
  Chart.register(BarElement);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;

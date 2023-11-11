import React from "react";
import { Line } from "react-chartjs-2";
import { LinearScale } from "chart.js";
import { Chart } from "chart.js";
import { PointElement } from "chart.js";
import { LineElement } from "chart.js";
import { CategoryScale } from "chart.js";

const LineChart = () => {
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);
  Chart.register(CategoryScale);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;

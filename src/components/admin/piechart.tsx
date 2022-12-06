import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function PieChart({ chartData }:any) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Sales report between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;
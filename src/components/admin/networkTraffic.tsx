import React from "react";
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function NetworkTraffic({ chartData }:any) {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Overall Traffic Status"
            }
          }
        }}
      />
    </div>
  );
}
export default NetworkTraffic;
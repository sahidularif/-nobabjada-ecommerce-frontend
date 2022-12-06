import React from 'react';
import '../../styles/dashboard.css'
import { useState } from "react";
import DashboardSammary from './dashboardSammary';
import PieChart from './piechart';
import { MdAddChart, MdNetworkWifi } from 'react-icons/md';
import NetworkTraffic from './networkTraffic';
import LatestOrder from './latestOrder';

const Details = () => {
  const data = [
    {
      "id": 1,
      "year": 2016,
      "sales": 50000,
      "exprenses": 40823
    },
    {
      "id": 2,
      "year": 2017,
      "sales": 60000,
      "exprenses": 1045
    },
    {
      "id": 3,
      "year": 2018,
      "sales": 70000,
      "exprenses": 78555
    },
    {
      "id": 4,
      "year": 2019,
      "sales": 80000,
      "exprenses": 40555
    },
    {
      "id": 5,
      "year": 2020,
      "sales": 90000,
      "exprenses": 39334
    }
  ]
  const [chartData, setChartData] = useState({
    labels: data.map((chart) => chart.year),
    datasets: [
      {
        label: "Sales",
        data: data.map((chart) => chart.sales),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "skyblue",
        borderWidth: 2
      }
    ]
  });

  return (
    <section>
      
      <div className="container-fluid dashboard-sammary">
        <div className="row g-4">
          <div className='col-md-12'><DashboardSammary /></div>
          <div className="col-sm-6  col-md-4 sammary-block">
            <div className="p-2 border sammary-body">
              <div className="card border-0">
                <div className="card-header  border-0 d-flex justify-content-between">
                  <span>Sales report between 2016-2020</span><MdAddChart size={30} />
                </div>
                <div className="card-body justify-content-center">
                  <PieChart chartData={chartData} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6  col-md-8 sammary-block">
            <div className="p-2 border sammary-body">
              <div className="card border-0">
                <div className="card-header  border-0 d-flex justify-content-between">
                  <span>Overall Traffic Status</span><MdNetworkWifi size={30} />
                </div>
                <div className="card-body justify-content-center">
                  <NetworkTraffic chartData={chartData} />
                </div>
              </div>
            </div>
          </div>
          
          <div className='col-md-12'>
          <div className="p-2 border sammary-body">
              <div className="card border-0">
                <div className="card-header  border-0 d-flex justify-content-between">
                  <span>Overall Traffic Status</span><MdNetworkWifi size={30} />
                </div>
                <div className="card-body justify-content-center">
                <LatestOrder />
                </div>
              </div>
            </div></div>
        </div>
      </div>
    </section>
  );
};

export default Details;
{/* <PieChart chartData={chartData} /> */ }
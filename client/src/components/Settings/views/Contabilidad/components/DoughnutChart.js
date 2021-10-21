import React from "react";
import { Chart } from "primereact/chart";

export default function DoughnutChart(props) {
  const chartData = {
    labels: [`Salón: ${props.salon}`, `Delivery: ${props.delivery}`, `Take Away: ${props.takeAway}`],
    datasets: [
      {
        data: [props.salon, props.delivery, props.takeAway],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  };

  return (
    <div className="card p-d-flex p-jc-center">
      <Chart
        type="doughnut"
        data={chartData}
        options={lightOptions}
        style={{ position: "relative", width: "350px" }}
      />
    </div>
  );
}

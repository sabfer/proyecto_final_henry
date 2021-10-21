import React from "react";
import { Chart } from "primereact/chart";

export default function BarChart({ salOrds, taOrds, devOrds }) {
  console.log("Ordenes Salon por dia:", salOrds);
  const basicData = {
    labels: [
      "14-10-21",
      "15-10-21",
      "16-10-21",
      "17-10-21",
      "18-10-21",
      "19-10-21",
      "20-10-21",
    ],
    datasets: [
      {
        label: "Salon",
        backgroundColor: "#002366",
        data: [
          salOrds[1],
          salOrds[2],
          salOrds[3],
          salOrds[4],
          salOrds[5],
          salOrds[6],
          salOrds[7],
        ],
      },
      {
        label: "Delivery",
        backgroundColor: "#008891",
        data: [
          taOrds[1],
          taOrds[2],
          taOrds[3],
          taOrds[4],
          taOrds[5],
          taOrds[6],
          taOrds[7],
        ],
      },
      {
        label: "Take away",
        backgroundColor: "#16C79A",
        data: [
          devOrds[1],
          devOrds[2],
          devOrds[3],
          devOrds[4],
          devOrds[5],
          devOrds[6],
          devOrds[7],
        ],
      },
    ],
  };

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#FFFFF",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };
    return {
      basicOptions,
    };
  };

  let stackedOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  const { basicOptions } = getLightTheme();

  return (
    <>
      <div className="card">
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
    </>
  );
}

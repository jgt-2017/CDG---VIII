import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const state = {
    labels: ["June", "July", "August"],
    datasets: [
      {
        label: "System Production (MWh)",
        backgroundColor: "rgb(70,130,180)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 2,
        data: [416, 373, 369],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Production per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

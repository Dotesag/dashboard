"use client";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartActivity() {
  const activity = [
    { day: "Su", hours: 5.26},
    { day: "Mo", hours: 6.23 },
    { day: "Tu", hours: 2.4 },
    { day: "We", hours: 8.6 },
    { day: "Th", hours: 5.43 },
    { day: "Fr", hours: 1.3 },
    { day: "Sa", hours: 6.53 },
  ];

  const highlightIndex = activity.findIndex((a) => a.day === "We");

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: 8,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1f1e30"],

    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: activity.map((item) => item.day),
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (val) => `${Math.round(val)}`,
        style: { colors: "#9b9aa6", fontSize: "12px" },
      },
    },
    tooltip: {
      fillSeriesColor: true,
      style: {
        fontSize: "14px",
        
      },
      
      x: { show: false },
      y: {
        formatter: function (value) {
          return `<p style="color:white; ">${Math.floor(value)}h ${Math.floor(((value - Math.floor(value)) * 100))}m <br> </p>`;
        },
      },
    },
  };

  const series = [{ name: "", data: activity.map((item) => item.hours) }];

  return (
    <Chart options={chartOptions} series={series} type="bar" height={250} />
  );
}

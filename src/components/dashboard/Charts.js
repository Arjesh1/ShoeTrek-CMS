import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Charts = () => {
  const { product, orders } = useSelector((state) => state.product);

  const options = {
    responsive: true,
    plugins: {
      legend: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Income",
      },
    },
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Orders",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthlyTotalIncomes = {};
  const totalRevenue = orders.reduce((acc, obj) => acc + +obj.totalPrice, 0);
  const totalOrders = orders.reduce((acc, obj) => acc + +obj.product.length, 0);

  labels.forEach((month) => {
    const filteredArray = orders.filter((obj) => {
      const objDate = new Date(obj.orderDate);
      return objDate.getMonth() === labels.indexOf(month);
    });

    const totalIncome = filteredArray.reduce(
      (acc, obj) => acc + +obj.totalPrice,
      0
    );
    monthlyTotalIncomes[month] = totalIncome;
  });

  const monthlyTotalOrders = {};
  labels.forEach((month) => {
    const filteredArray = orders.filter((obj) => {
      const objDate = new Date(obj.orderDate);
      return objDate.getMonth() === labels.indexOf(month);
    });

    const totalOrders = filteredArray.reduce(
      (acc, obj) => acc + +obj.product.length,
      0
    );
    monthlyTotalOrders[month] = totalOrders;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        fill: true,
        data: [
          monthlyTotalIncomes.January,
          monthlyTotalIncomes.February,
          monthlyTotalIncomes.March,
          monthlyTotalIncomes.April,
          monthlyTotalIncomes.May,
          monthlyTotalIncomes.June,
          monthlyTotalIncomes.July,
          monthlyTotalIncomes.August,
          monthlyTotalIncomes.September,
          monthlyTotalIncomes.October,
          monthlyTotalIncomes.November,
          monthlyTotalIncomes.December,
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const data1 = {
    labels,
    datasets: [
      {
        label: "Orders",
        fill: true,
        data: [
          monthlyTotalOrders.January,
          monthlyTotalOrders.February,
          monthlyTotalOrders.March,
          monthlyTotalOrders.April,
          monthlyTotalOrders.May,
          monthlyTotalOrders.June,
          monthlyTotalOrders.July,
          monthlyTotalOrders.August,
          monthlyTotalOrders.September,
          monthlyTotalOrders.October,
          monthlyTotalOrders.November,
          monthlyTotalOrders.December,
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className=" d-flex gap-2 justify-content-between charts_group ">
      <div className=" pe-1 w-100 shadow-lg rounded p-2 py-3  charts_item">
        <div className="d-flex align-items-center gap-2">
          <h6 className=""> Total Sales: </h6>
          <h5 className="p-2 shadow-sm text-success fw-bold rounded">
            ${totalRevenue}
          </h5>
        </div>

        <Line options={options} data={data} className="mb-5" />
      </div>

      <div className="ps-2 w-100 shadow-lg rounded p-2 py-3 charts_item ">
        <div className="d-flex align-items-center gap-2">
          <h6 className="">Products Sold: </h6>
          <h5 className="p-2 shadow-sm text-danger fw-bold rounded">
            {totalOrders}
          </h5>
        </div>
        <Bar options={options1} data={data1} className="mb-5" />
      </div>
    </div>
  );
};

export default Charts;

import React from "react";


import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const Chart = ({ myData }) => {
  const getCategoryCounts = (data) => {
    const counts = {};
    data.forEach((book) => {
      const category = book.category;
      // console.log(category);
      if (counts[category]) {
        counts[category] += 1;
      } else {
        counts[category] = 1;
      }
    });
    // console.log(counts);

    return Object.keys(counts).map((category) => ({
      name: category,
      totalBook: counts[category],
    }));
  };

  const chartData = getCategoryCounts(myData);
  //   console.log(chartData);

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalBook" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

import { useGetDashboardMetricsQuery } from '@/state/api';
import React, { useState } from 'react'

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardSalesSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const salesData = data?.salesSummary || [];
  
  const [timeframe, setTimeFrame] = useState("weekly");

  const totalValueSum =
    salesData.reduce((accumulator, current) => {
      return accumulator + current.totalValue
    }, 0) || 0;

  const averageChangePercentage =
    salesData.reduce((accumulator, current, _, array) => {
      return accumulator + current.changePercentage! / array.length;
    }, 0) || 0;

  const highestValueData = salesData.reduce((accumulator, current) => {
    return accumulator.totalValue > current.totalValue ? accumulator : current;
  }, salesData[0] || {});

  const highestValueDate = highestValueData.date
    ? new Date(highestValueData.date).toLocaleDateString('en-us', {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      })
    : 'N/A';

  if (isError) {
    return <div className="m-5">
      Failed to fetch sales summary data
    </div>
  }

  return (
    <div className="flex flex-col justify-between row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      
    </div>
  );
};

export default CardSalesSummary;

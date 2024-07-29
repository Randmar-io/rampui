import React from "react";
import { Area, CartesianGrid, AreaChart as RechartsAreaChart, XAxis } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 2210, amt: 2290 },
  { name: 'Mar', uv: 200, pv: 2290, amt: 2000 },
  { name: 'Apr', uv: 278, pv: 2000, amt: 2181 },
  { name: 'May', uv: 189, pv: 2181, amt: 2500 },
  { name: 'Jun', uv: 239, pv: 2500, amt: 2100 },
];

export function AreaChart() {
  return (
    <RechartsAreaChart width={400} height={200} data={data} margin={{ left: 20, right: 20 }}>:
      <defs>
        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#e28a8a" stopOpacity={0.7} />
          <stop offset="95%" stopColor="#e28a8a" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#e0e0e0" strokeWidth={0.5} vertical={false} />
      <XAxis dataKey="name" stroke="#8d8d8d" tickLine={false} interval={0} axisLine={false} tickMargin={8} style={{ fontSize: 12 }} />
      <Area type="monotone" dataKey="uv" stroke="#e28a8a" fillOpacity={1} fill="url(#color)" />
    </RechartsAreaChart>
  )
}
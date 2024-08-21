import { useTheme } from "@emotion/react";
import React from "react";
import { Area, CartesianGrid, AreaChart as RechartsAreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Color as ThemeColor, baseThemeColor } from "../../Provider/theme";
import { ChartTooltipContent } from "./ChartTooltipContent";

export interface DataPoint {
  [key: string]: string | number;
}

export interface AreaChartProps {
  data: DataPoint[];
  units?: string;
  unitsPosition?: "left" | "right";
  color?: ThemeColor;
  width?: string | number;
  height?: string | number;
}

export function AreaChart({ data, units, unitsPosition = "right", color: propsColor, width, height }: AreaChartProps) {
  const dataKeys = Object.keys(data[0]);
  const theme = useTheme();
  const color = propsColor ? baseThemeColor[propsColor] : theme.color; // If color is not specified, use the theme color

  return (
    <ResponsiveContainer width={width || "100%"} height={height || 200}>
      <RechartsAreaChart data={data} margin={{ left: 20, right: 20 }}>:
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color[300]} stopOpacity={0.7} />
            <stop offset="95%" stopColor={color[300]} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#e0e0e0" strokeWidth={0.5} vertical={false} />
        <XAxis dataKey={dataKeys[0]} stroke="#8d8d8d" tickLine={false} axisLine={false} tickMargin={8} style={{ fontSize: 12 }} />
        <Area type="monotone" dataKey={dataKeys[1]} stroke={color[400]} fillOpacity={1} fill="url(#color)" />
        <Tooltip
          contentStyle={{
            border: 'none',
            borderRadius: "12px",
            boxShadow: "var(--r-shadow-md)",
            fontSize: "12px",
            color: "#424242"
          }}
          cursor={false}
          content={<ChartTooltipContent units={units} unitsPosition={unitsPosition} />}
          labelStyle={{ fontWeight: 500, fontSize: 12, color: "#424242" }}
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  )
}
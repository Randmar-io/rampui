import { Icon } from "@phosphor-icons/react";
import React from "react";
import { Color } from "../colors";
// import grey from "../colors/grey";

export interface ChipProps {
  label?: string;
  color?: Color;
  icon?: Icon;
}

const grey = {
  50: '#f1f1f1',
  100: '#ebebeb',
  200: '#dcdcdc',
  300: '#bfbfbf',
  400: '#989898',
  500: '#787878',
  600: '#5d5d5d',
  700: '#424242',
  800: '#383838',
  900: '#292929',
  950: '#161616',
};

export function Chip({ label, color, icon: Icon }: ChipProps) {
  return (
    <span style={{
      padding: "4px 8px",
      backgroundColor: (color || grey)[100],
      borderRadius: 10,
      width: 'max-content',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 21.6
    }}
    >
      {
        Icon &&
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Icon size={11} style={{ color: (color || grey)[600] }} weight="bold" />
        </span>
      }
      <span style={{ fontSize: 11, fontWeight: 500, color: (color || grey)[600] }}>{label}</span>
    </span>
  );
}
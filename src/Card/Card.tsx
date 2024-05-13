import { Stack } from "@mui/material";
import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import { Paper } from "../Paper";

export interface CardProps {
  title?: string;
  icon?: PhosphorIcon;
  children?: React.ReactNode;
  actions?: React.ReactNode[];
  headerColor?: string;
}

export function Card({ title, icon: Icon, children, actions, headerColor }: CardProps) {
  const getContrastColor = (hexColor: string) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "#000" : "#fff";
  };

  const headerTextColor = headerColor ? getContrastColor(headerColor) : "#000";

  return (
    <Paper>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          style={{
            margin: '-16px',
            padding: '16px',
            backgroundColor: headerColor,
            color: headerTextColor,
            borderRadius: '12px 12px 0 0'
          }}
        >
          {Icon && <Icon size={20} />}
          <p style={{ fontSize: 16, fontWeight: 600 }}>{title}</p>
        </Stack>
        <div>
          {children}
        </div>
        <Stack direction="row" justifyContent="flex-end" spacing={0.5}>
          {actions}
        </Stack>
      </Stack>
    </Paper>
  );
}
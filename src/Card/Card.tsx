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
  headerTextColor?: string;
}

export function Card({ title, icon: Icon, children, actions, headerColor, headerTextColor }: CardProps) {
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
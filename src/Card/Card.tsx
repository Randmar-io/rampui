import { Stack } from "@mui/material";
import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import { Chip, ChipProps } from "../Chip";
import { Paper } from "../Paper";
import { Typography } from "../Typography";

export interface CardProps {
  title?: string | React.ReactNode;
  tags?: ChipProps[];
  icon?: PhosphorIcon;
  children?: React.ReactNode;
  actions?: React.ReactNode[];
  headerColor?: string;
  headerTextColor?: string;
}

export function Card({ title, tags, icon: Icon, children, actions, headerColor, headerTextColor }: CardProps) {
  return (
    <Paper>
      {tags &&
        <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
          {tags.map((tag, index) => <Chip key={index} {...tag} />)}
        </div>
      }
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
        <Typography variant="headingMd">{title}</Typography>
      </Stack>
      <div style={{ marginTop: 12 }}>
        {children}
      </div>
      <Stack direction="row" justifyContent="flex-end" spacing={0.5} mt="16px" >
        {actions}
      </Stack>
    </Paper>
  );
}
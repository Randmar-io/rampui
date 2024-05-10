import { Stack } from "@mui/material";
import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import { Paper } from "../Paper";
import { TextField } from "../TextField";

interface CardField {
  label: string;
  value: React.ReactNode;
  renderCondition?: boolean;
}

interface CardAction {
  element: React.ReactNode;
  renderCondition?: boolean;
}

interface DocumentCardProps {
  title?: string;
  icon?: PhosphorIcon;
  fields?: CardField[];
  actions?: React.ReactNode[];
}

export function DocumentCard({ title, icon: Icon, fields, actions }: DocumentCardProps) {
  return (
    <Paper>
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          {Icon && <Icon size={20} />}
          <p style={{ fontSize: 16, fontWeight: 600 }}>{title}</p>
        </Stack>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--r-spacing-20)' }}>
          {
            fields?.map((field, index) => {
              if (field.renderCondition === false) return null;

              return (
                <TextField key={index} readOnly {...field} />
              )
            })
          }
        </div>
        <Stack direction="row" justifyContent="flex-end" spacing={0.5}>
          {actions}
        </Stack>
      </Stack>
    </Paper>
  );
}
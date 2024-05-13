import React from "react";
import { Card, CardProps } from "../Card";
import { TextField } from "../TextField";

interface CardField {
  label: string;
  value: React.ReactNode;
  renderCondition?: boolean;
}

export interface DocumentCardProps extends CardProps {
  fields?: CardField[];
}

export function DocumentCard({ fields, ...rest }: DocumentCardProps) {
  return (
    <Card {...rest}>
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
    </Card>
  );
}
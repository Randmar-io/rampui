import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React from "react";
import { Paper } from "../../Paper";
import { Typography } from "../../Typography";

const Container = styled(Paper)`
  padding: 8px;
  font-size: 11px;
  border-radius: 8px;
  box-shadow: var(--r-shadow-lg);
`;

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: any;
  label?: string;
  units?: string;
  unitsPosition?: "left" | "right";
}

export function ChartTooltipContent({ active, payload, label, units, unitsPosition = "right" }: ChartTooltipContentProps) {
  if (active && payload && payload.length) {
    return (
      <Container>
        <Typography variant="bodyXs" style={{ fontWeight: 500, marginBottom: "6px" }}>{label}</Typography>
        <Stack spacing={0.75}>
          {
            payload.map((item: any, index: number) => (
              <Stack key={index} direction="row" alignItems="center" spacing={2}>
                <Typography variant="bodyXs" color="subdued" style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{ height: "9px", width: "3px", borderRadius: "4px", backgroundColor: item.stroke, marginRight: "6px" }} />
                  <span>{item.dataKey}</span>
                </Typography>
                <Typography variant="bodyXs">
                  {
                    unitsPosition === "left" &&
                    <span style={{ marginRight: "2px" }}>{units}</span>
                  }
                  <span>{item.value}</span>
                  {
                    unitsPosition === "right" &&
                    <span style={{ marginLeft: "2px" }}>{units}</span>
                  }
                </Typography>
              </Stack>
            ))
          }
        </Stack>
      </Container>
    );
  }

  return null;
}
import styled from "@emotion/styled";
import React from "react";
import { Typography } from "../Typography";
import { Color, grey } from "../colors";
import type { JSX } from "react";

interface TimelineItem {
  title: string;
  timestamp: string;
  description: string;
  marker?: string | JSX.Element;
  color?: Color;
}

export interface TimelineProps {
  items: TimelineItem[];
  color?: Color;
}

const Marker = styled.div<{ colorFromProps?: Color }>(({ theme, colorFromProps }) => `
    position: absolute;
    left: -14px;
    height: 28px;
    width: 28px;
    font-size: 14px;
    border-radius: 50%;
    background-color: ${(colorFromProps || theme.color)[100]};
    color: ${(colorFromProps || theme.color)[500]};
    display: flex;
    align-items: center;
    justify-content: center;
  `);

export function Timeline({ items, color }: TimelineProps) {
  return (
    <div style={{ marginLeft: "14px" }}>
      {
        items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <div style={{ paddingLeft: "24px", position: "relative", borderLeft: isLastItem ? undefined : `1px solid ${grey[100]}`, paddingBottom: isLastItem ? undefined : "16px" }}>
              <Marker colorFromProps={item.color || color}>
                {item.marker}
              </Marker>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 8, paddingTop: 2 }}>
                <Typography variant="headingXs" style={{ flexGrow: 1 }}>{item.title}</Typography>
                <Typography variant="bodySm" color="subdued" style={{ flexShrink: 0 }}>{item.timestamp}</Typography>
              </div>
              <Typography>
                {item.description}
              </Typography>
            </div>
          )
        })
      }
    </div>
  )
}
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import { ArrowUpRight } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Button } from "../Button";
import { Paper } from "../Paper";
import { Typography } from "../Typography";
import { Color, grey } from "../colors";
import { colors } from "../colors/util";

interface LinkCardProps {
  title?: string;
  description?: string;
  imgUrl?: string;
  to?: string;
  external?: boolean;
  onClick?: () => void;
  color?: "default" | "reseller" | "manufacturer" | "shopify" | "success" | "error";
}

const CardBase = styled(Paper)<{ hoverColor?: Color }>(({ theme, hoverColor }) => `
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  color: ${grey[500]};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    transform: translateY(-4px);
    color: ${(hoverColor || theme.color)[500]};
  }
`);

export function LinkCard({ title, description, imgUrl, to, external, onClick, color: colorFromProps }: LinkCardProps) {
  const [hovered, setHovered] = useState(false);
  const color = colorFromProps ? colors[colorFromProps] : undefined;

  return (
    <a
      href={to}
      onClick={onClick}
      target={external ? "_blank" : "_self"}
      style={{ textDecoration: 'none', height: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardBase hoverColor={color}>
        <div>
          <Typography variant="headingSm" style={{ paddingBottom: 4, color: 'inherit' }}>{title}</Typography>
          <Typography variant="bodyMd" style={{ paddingBottom: 16, lineHeight: 1.2 }}>{description}</Typography>
        </div>
        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <link rel="preload" href={imgUrl} as="image" />
          <img src={imgUrl} alt={title} style={{ maxHeight: 80 }} />
          <Button variant={hovered ? "secondary" : "primary"} size="large" iconOnly starticon={ArrowUpRight} color={colorFromProps} />
        </Stack>
      </CardBase>
    </a>
  )
}
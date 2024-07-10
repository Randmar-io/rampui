import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import { ArrowUpRight } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../Button";
import { Paper } from "../Paper";
import { Typography } from "../Typography";
import { Color, grey } from "../colors";

interface LinkCardProps {
  title?: string;
  description?: string;
  imgUrl?: string;
  to?: string;
  external?: boolean;
  onClick?: () => void;
  color?: Color;
}

const CardBase = styled(Paper)<{ hoverColor?: Color }>(({ theme, hoverColor }) => `
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  color: ${grey[700]};

  :hover {
    transform: translateY(-4px);
    color: ${(hoverColor || theme.color)[500]};
  }
`);

export function LinkCard({ title, description, imgUrl, to, external, onClick, color }: LinkCardProps) {
  return (
    <a href={to} onClick={onClick} target={external ? "_blank" : "_self"} style={{ textDecoration: 'none' }}>
      <CardBase hoverColor={color}>
        <Typography variant="headingSm" style={{ paddingBottom: 4, color: 'inherit' }}>{title}</Typography>
        <Typography variant="bodyMd" style={{ paddingBottom: 16, lineHeight: 1.2 }}>{description}</Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
          <img src={imgUrl} alt={title} style={{ maxHeight: 80 }} />
          <Button variant="secondary" size="large" iconOnly starticon={ArrowUpRight} iconProps={{ color: color ? color[500] : undefined }} />
        </Stack>
      </CardBase>
    </a>
  )
}
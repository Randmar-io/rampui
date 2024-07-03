import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import { ArrowUpRight } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../Button";
import { Paper } from "../Paper";
import { Typography } from "../Typography";

interface LinkCardProps {
  title?: string;
  description?: string;
  imgUrl?: string;
  to?: string;
  external?: boolean;
  onClick?: () => void;
}

const CardBase = styled(Paper)`
  max-width: 300px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  :hover {
    transform: translateY(-4px);
  }
`;

export function LinkCard({ title, description, imgUrl, to, external, onClick }: LinkCardProps) {
  return (
    <a href={to} onClick={onClick} target={external ? "_blank" : "_self"} style={{ textDecoration: 'none' }}>
      <CardBase>
        <Typography variant="headingSm" style={{ paddingBottom: 4 }}>{title}</Typography>
        <Typography variant="bodyMd" style={{ paddingBottom: 8 }}>{description}</Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
          <img src={imgUrl} alt={title} style={{ maxHeight: 100 }} />
          <Button variant="secondary" size="large" iconOnly starticon={ArrowUpRight} />
        </Stack>
      </CardBase>
    </a>
  )
}
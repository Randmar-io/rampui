import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React from "react";

export interface PageProps {
  children?: React.ReactNode;
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  primaryAction?: React.ReactNode;
  secondaryActions?: React.ReactNode[];
}

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export function Page({ children, title, subtitle, primaryAction, secondaryActions }: PageProps) {
  return (
    <PageHeader>
      <Stack spacing={0.5}>
        <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: "#636363" }}>{subtitle}</div>
      </Stack>
      <Stack direction="row" spacing={0.75}>
        {secondaryActions}
        {primaryAction}
      </Stack>
    </PageHeader>
  )
}
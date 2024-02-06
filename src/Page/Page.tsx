import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React from "react";

export interface PageProps {
  children?: React.ReactNode;
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  primaryAction?: React.ReactNode;
  secondaryActions?: React.ReactNode[];
  midWidth?: boolean;
  narrowWidth?: boolean;
}

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: var(--r-spacing-70);
`;


const PageContainer = styled.div<PageProps>`
  max-width: ${props => props.narrowWidth ? '768px' : props.midWidth ? '1024px' : '100%'};
  margin-left: auto;
  margin-right: auto;
`;

export function Page({ children, title, subtitle, primaryAction, secondaryActions, midWidth, narrowWidth }: PageProps) {
  return (
    <PageContainer midWidth={midWidth} narrowWidth={narrowWidth}>
      {(title || subtitle || primaryAction || secondaryActions) && (
        <PageHeader>
          <Stack spacing={0.5}>
            <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{title}</div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: "#6b6b6b" }}>{subtitle}</div>
          </Stack>
          <Stack direction="row" spacing={0.75}>
            {secondaryActions}
            {primaryAction}
          </Stack>
        </PageHeader>
      )}

      {children}
    </PageContainer>
  )
}
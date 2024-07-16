import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { Typography } from "../Typography";

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
  margin-bottom: var(--r-spacing-40);
`;


const PageContainer = styled.div<PageProps>`
  max-width: ${props => props.narrowWidth ? '768px' : props.midWidth ? '1280px' : '100%'};
  margin-left: auto;
  margin-right: auto;
`;

export function Page({ children, title, subtitle, primaryAction, secondaryActions, midWidth, narrowWidth }: PageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer midWidth={midWidth} narrowWidth={narrowWidth}>
      {(title || subtitle || primaryAction || secondaryActions) && (
        <PageHeader>
          <Stack spacing={0.5}>
            {title && <Typography variant="headingLg">{title}</Typography>}
            {subtitle && <Typography color="subdued" weight="semibold">{subtitle}</Typography>}
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
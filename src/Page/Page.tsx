import styled from "@emotion/styled";
import { ArrowLeft } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../Button";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string | React.ReactNode;
  subHeading?: string;
  children?: React.ReactNode;
  primaryAction?: React.ReactNode;
  secondaryActions?: React.ReactNode[];
  midWidth?: boolean;
  narrowWidth?: boolean;
}

const PageContainer = styled('div')<PageProps>(props => {
  const maxWidth = props.narrowWidth ? '640px' : props.midWidth ? '1024px' : '100%'

  return (
    `
      max-width: ${maxWidth};
      margin: auto;
    `
  )
});

const PageHeaderContainer = styled('div')((
  `
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding-bottom: var(--r-spacing-60);
  `
));

const HeadingsContainer = styled('div')(
  `
    display: flex;
    gap: var(--r-spacing-20);
  `
)

const ActionsContainer = styled('div')(
  `
    display: flex;
    alignItems: center;
    gap: var(--r-spacing-15);
  `
)

export function Page({ children, heading, subHeading, primaryAction, secondaryActions, ...rest }: PageProps) {
  return (
    <PageContainer {...rest} style={{ backgroundColor: "white" }}>
      <PageHeaderContainer>
        <HeadingsContainer>
          <div>
            <Button variant="tertiary"><ArrowLeft size={20} color="#616161" weight="bold" style={{ height: 'max-content' }} /></Button>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', lineHeight: '20px', fontWeight: 600, marginBottom: 'var(--r-spacing-20)' }}>{heading}</div>
            <div style={{ color: "#3f3f3f", fontSize: '0.875rem' }}>{subHeading}</div>
          </div>
        </HeadingsContainer>
        <ActionsContainer>
          {secondaryActions}
          {primaryAction}
        </ActionsContainer>
      </PageHeaderContainer>
      <div>
        {children}
      </div>
    </PageContainer>
  )
}
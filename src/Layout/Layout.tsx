import styled from "@emotion/styled";
import React from "react";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--r-spacing-50);
`

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface Layout extends React.FC<LayoutProps> {
  Section: typeof Section;
}

export const Layout: Layout = function Layout({ children, ...rest }: LayoutProps) {
  return (
    <LayoutContainer {...rest}>{children}</LayoutContainer>
  )
}

const spans = {
  'oneThird': 2,
  'half': 3,
  'twoThirds': 4,
  'full': 6
}

interface SectionProps {
  span?: 'oneThird' | 'half' | 'twoThirds' | 'full';
  children?: React.ReactNode;
}

const Section = styled.div<SectionProps>`
  grid-column: span 6;
  
  @media screen and (min-width: 1024px) {
    grid-column: span ${({ span }) => spans[span || "full"]};
  }
`

Layout.Section = Section;



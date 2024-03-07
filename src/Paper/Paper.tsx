import styled from "@emotion/styled";
import React from "react";

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
}

const PaperContainer = styled.div<PaperProps>`
  padding: ${({ padding }) => `var(--r-spacing-${padding || "40"})`};
  box-shadow: var(--r-shadow-sm);
  border-radius: var(--r-border-radius-md);
  background-color: white;
`

export function Paper({ children, ...props }: PaperProps) {
  return (
    <PaperContainer {...props}>
      {children}
    </PaperContainer>
  )
}
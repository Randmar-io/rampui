import styled from '@emotion/styled';
import React from "react";

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  topBar?: React.ReactElement;
  navMenu?: React.ReactElement;
}

const AppShellContainer = styled('div')(
  `
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
  `
)

const AppShellContent = styled('div')(
  `
    background-color: white;
    border-radius: var(--r-border-radius-md);
    padding: var(--r-spacing-80);
    height: 100%;
    box-shadow: var(--r-shadow-centered-md);
    overflow-y: auto;
  `
)

export function AppShell({ children, topBar, navMenu, ...rest }: AppShellProps) {
  return (
    <AppShellContainer {...rest}>
      {topBar}
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <div style={{ flexShrink: 0, width: 240 }}>
          {navMenu}
        </div>
        <div style={{ flexGrow: 1, padding: 12, paddingTop: 0, overflow: 'hidden' }}>
          <AppShellContent>
            {children}
          </AppShellContent>
        </div>
      </div>
    </AppShellContainer>
  )
}
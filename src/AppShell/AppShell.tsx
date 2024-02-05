import styled from '@emotion/styled';
import React, { useState } from "react";
import { NavLinkProps, NavMenu } from '../NavMenu';
import { TopBar } from './TopBar';

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  logo?: React.ReactNode;
  searchBar?: React.ReactElement;
  rightMenu?: React.ReactElement;
  menuItems?: NavLinkProps[];
  footer?: React.ReactNode;
}

const AppShellContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  margin: auto;
`

const AppShellContent = styled.div`
  flex-grow: 1;
  padding: var(--r-spacing-60);
  overflow-y: auto;
`

export function AppShell({ children, menuItems, logo, searchBar, rightMenu, footer, ...rest }: AppShellProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppShellContainer {...rest}>
      <TopBar
        logo={logo}
        searchBar={searchBar}
        rightMenu={rightMenu}
        toggleShowMenu={() => setShowMenu(prev => !prev)}
      />
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <NavMenu menuItems={menuItems} show={showMenu} closeMenu={() => setShowMenu(false)} footer={footer}/>
        <AppShellContent>
          {children}
        </AppShellContent>
      </div>
    </AppShellContainer>
  )
}
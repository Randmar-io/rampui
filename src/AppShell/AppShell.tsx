import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from "react";
import { NavLinkProps, NavMenu } from '../NavMenu';
import { TopBar } from './TopBar';

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  logo?: React.ReactNode;
  searchBar?: React.ReactElement;
  rightMenu?: React.ReactElement;
  menuItems?: NavLinkProps[];
  footer?: React.ReactNode;
  pathname?: string;
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

export function AppShell({ children, menuItems, logo, searchBar, rightMenu, footer, pathname, ...rest }: AppShellProps) {
  const [showMenu, setShowMenu] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [pathname])

  return (
    <AppShellContainer {...rest}>
      <TopBar
        logo={logo}
        searchBar={searchBar}
        rightMenu={rightMenu}
        toggleShowMenu={() => setShowMenu(prev => !prev)}
      />
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {
          menuItems &&
          <NavMenu menuItems={menuItems} show={showMenu} closeMenu={() => setShowMenu(false)} footer={footer} />
        }
        <AppShellContent ref={contentRef}>
          {children}
        </AppShellContent>
      </div>
    </AppShellContainer>
  )
}
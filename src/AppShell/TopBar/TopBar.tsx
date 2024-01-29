import styled from "@emotion/styled";
import { List } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../../Button";
import { CenteredFlexbox } from "../../utility/CenteredFlexbox";

interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  searchBar?: React.ReactNode;
  rightMenu?: React.ReactNode;
  toggleShowMenu?: () => void;
}

const TopBarContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  height: var(--r-height-topbar);
  border-bottom: 1px solid #e0e0e0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: var(--r-width-nav-menu);
  
  @media screen and (min-width: 768px) {
    justify-content: center;
    border-right: 1px solid #e0e0e0;
  }
`

const MenuButton = styled(Button)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export function TopBar({ logo, searchBar, rightMenu, toggleShowMenu, ...rest }: TopBarProps) {
  return (
    <TopBarContainer {...rest}>
      <LogoContainer>
        <MenuButton variant="tertiary" startIcon={List} onClick={toggleShowMenu} />
        {logo}
      </LogoContainer>
      <CenteredFlexbox style={{ flexGrow: 1 }}>
        {searchBar}
      </CenteredFlexbox>
      <CenteredFlexbox style={{ flexShrink: 0, width: 'max-content', paddingRight: 'var(--r-spacing-30)' }}>
        {rightMenu}
      </CenteredFlexbox>
    </TopBarContainer>
  )
}
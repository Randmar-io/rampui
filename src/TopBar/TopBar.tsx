import { styled } from "@mui/system";
import React from "react";
import "../tokens/height.css";
import { CenteredFlexbox } from "../utility/CenteredFlexbox";



interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  searchBar?: React.ReactNode;
  rightMenu?: React.ReactNode;
}

const TopBarContainer = styled('div')(
  `
    display: flex;
    alignItems: center; 
    flex-shrink: 0;
    height: var(--r-height-140);
    border-bottom: 1px solid #e0e0e0;
  `
);

export function TopBar({ logo, searchBar, rightMenu, ...rest }: TopBarProps) {
  return (
    <TopBarContainer {...rest}>
      <CenteredFlexbox style={{ width: 'var(--r-width-nav-menu)', borderRight: '1px solid #e0e0e0' }}>
        {logo}
      </CenteredFlexbox>
      <CenteredFlexbox style={{ flexGrow: 1 }}>
        {searchBar}
      </CenteredFlexbox>
      <CenteredFlexbox style={{ flexShrink: 0, width: 'max-content', paddingRight: 'var(--r-spacing-30)' }}>
        {rightMenu}
      </CenteredFlexbox>
    </TopBarContainer>
  )
}
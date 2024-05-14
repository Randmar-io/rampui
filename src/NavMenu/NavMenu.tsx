import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import React from "react";
import { NavLink, NavLinkProps } from "./NavLink";

export interface NavMenuProps {
  menuItems?: NavLinkProps[];
  show?: boolean;
  closeMenu?: () => void;
  footer?: React.ReactNode;
  mobile?: boolean;
}

const NavMenuContainer = styled.div<NavMenuProps>`
  position: absolute;
  width: 100vw;
  height: calc(100vh - var(--r-height-topbar));
  background-color: #FFF;
  z-index: 10;
  display: flex;
  flex-flow: column;
  padding: var(--r-spacing-25);
  border-right: 1px solid #e0e0e0;
  overflow-y: scroll;
  left: ${({ show }) => show ? 0 : '-100vw'};
  transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({ show }) => show ? '0ms' : '300ms'};

  a {
    text-decoration: none;
  }
  
  @media screen and (min-width: 768px) {
    height: auto;
    flex-shrink: 0;
    width: 240px;
    position: static;
    border-right: 1px solid #e0e0e0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MobileViewContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StandardViewContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export function NavMenu({ menuItems, show, closeMenu, footer, mobile }: NavMenuProps) {
  const footerStyle: React.CSSProperties = {
    marginTop: 'auto',
  };

  return (
    <NavMenuContainer show={show}>
      <MobileViewContainer>
        <Grid container spacing={3}>
          {menuItems && menuItems.map((menuItem, idx) => {
            if (menuItem.hidden) return;

            return (
              <Grid item xs={4} onClick={closeMenu} key={idx}>
                <NavLink {...menuItem} mobile />
              </Grid>
            )
          })}
        </Grid>
      </MobileViewContainer>
      <StandardViewContainer>
        {
          menuItems && menuItems.map((menuItem, idx) => (
            <div onClick={closeMenu} key={idx}>
              <NavLink {...menuItem} />
            </div>
          ))
        }
      </StandardViewContainer>
      <div style={footerStyle}>
        {footer}
      </div>
    </NavMenuContainer>
  )
}
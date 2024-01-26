import styled from "@emotion/styled";
import React from "react";
import { NavLink, NavLinkProps } from "./NavLink";

export interface NavMenuProps {
  menuItems: NavLinkProps[];
}

const NavMenuContainer = styled.ul`
  display: flex;
  flex-flow: column;
  padding: var(--r-spacing-25);
`

export function NavMenu({ menuItems }: NavMenuProps) {
  return (
    <NavMenuContainer>
      {menuItems.map((menuItem, idx) => <NavLink {...menuItem} key={idx} />)}
    </NavMenuContainer>
  )
}
import { Stack } from "@mui/system";
import React from "react";
import { NavLink, NavLinkProps } from "./NavLink/NavLink";

interface NavMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  menuItems: NavLinkProps[];
}

export function NavMenu({ menuItems, ...rest }: NavMenuProps) {
  return (
    <Stack p={1} {...rest}>
      {menuItems.map((menuItem, idx) => <NavLink {...menuItem} key={idx} />)}
    </Stack>
  )
}
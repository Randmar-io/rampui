import styled from "@emotion/styled";
import { MenuItemProps, MenuItem as MuiMenuItem } from "@mui/material";
import React from "react";

const StyledMenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => `
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 13px;
  color: #424242;

  &:hover {
    background-color: #f8f8f8;
  }

  &.Mui-selected {
    background-color: ${theme.color[50]};
    color: ${theme.color[600]};
    font-weight: 500;
  }

  &.Mui-selected:hover {
    background-color: ${theme.color[50]};
  }
`);

export const MenuItem = (props: MenuItemProps) => <StyledMenuItem disableRipple {...props} sx={props.sx} />;
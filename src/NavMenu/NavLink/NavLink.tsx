import styled from '@emotion/styled';
import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import { CenteredFlexbox } from "../../utility/CenteredFlexbox";

export interface NavLinkContainerProps {
  selected?: boolean;
}

export interface NavLinkProps extends NavLinkContainerProps {
  icon?: PhosphorIcon;
  label: string;
}

const NavLinkContainer = styled('div')<NavLinkContainerProps>((props) =>
  `
    display: flex;
    align-items: center;
    padding: var(--r-spacing-20) var(--r-spacing-40);
    gap: var(--r-spacing-25 );
    background-color: ${props.selected ? "#e6e6e6" : "transparent"};
    font-size: 0.8125rem;
    border-radius: var(--r-border-radius-sm);
    cursor: pointer;

    &:hover {
      background-color: #ebebeb;
    }
  `
)

export function NavLink({ icon: Icon, label, selected }: NavLinkProps) {
  return (
    <NavLinkContainer selected={selected}>
      {
        Icon &&
        <CenteredFlexbox>
          <Icon color={"#272727"} size={16} weight={selected ? "bold" : "regular"} />
        </CenteredFlexbox>
      }
      <span style={{ fontWeight: selected ? 600 : 500 }}>{label}</span>
    </NavLinkContainer>
  )
}
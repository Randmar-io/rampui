import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import { CenteredFlexbox } from "../../utility/CenteredFlexbox";

export interface NavLinkProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: PhosphorIcon;
  label?: string;
  selected?: boolean;
  linkComponent?: React.ReactNode;
  mobile?: boolean;
}

const NavLinkContainer = styled('li')<NavLinkProps>(({ selected }) =>
  `
    display: flex;
    align-items: center;
    padding: var(--r-spacing-20) var(--r-spacing-40);
    gap: var(--r-spacing-25 );
    background-color: ${selected ? "#fafafa" : "transparent"};
    font-size: 0.8125rem;
    border-radius: var(--r-border-radius-sm);
    cursor: pointer;
    box-shadow: ${selected ? "var(--r-shadow-xs)" : "none"};
    z-index: ${selected ? 5 : 0};
    user-select: none;
    margin-bottom: var(--r-spacing-10);

    &:hover {
      background-color: ${selected ? "#fafafa" : "#fafafa"};    
    }
  `
);

export function NavLink({ icon: Icon, label, selected, linkComponent, hidden, mobile, ...rest }: NavLinkProps) {
  const theme = useTheme();

  const navLinkStandard = (
    <NavLinkContainer selected={selected} {...rest}>
      {
        Icon &&
        <CenteredFlexbox>
          <Icon color={selected ? theme.color[500] : "#545454"} size={16} weight={selected ? "bold" : "regular"} />
        </CenteredFlexbox>
      }
      <span style={{ fontWeight: selected ? 600 : 500, color: selected ? theme.color[600] : '#464646' }}>{label}</span>
    </NavLinkContainer>
  );

  const navLinkMobile = (
    <NavLinkContainer selected={selected} {...rest} style={{ justifyContent: 'center', alignItems: 'center', flexFlow: 'column', padding: 'var(--r-spacing-30)', }}>
      {
        Icon &&
        <CenteredFlexbox>
          <Icon color={selected ? theme.color[500] : "#545454"} size={16} weight={selected ? "bold" : "regular"} />
        </CenteredFlexbox>
      }
      <div style={{ fontWeight: selected ? 600 : 500, color: selected ? theme.color[600] : '#464646', textAlign: 'center' }}>{label}</div>
    </NavLinkContainer>
  );

  const navLink = mobile ? navLinkMobile : navLinkStandard;

  if (hidden) return null;

  if (linkComponent) {
    return React.isValidElement(linkComponent)
      ? React.cloneElement(linkComponent as React.ReactElement, { ...linkComponent.props }, navLink)
      : null;
  }

  return navLink;
}
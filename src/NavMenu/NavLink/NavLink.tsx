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

const NavLinkContainer = styled('li')<NavLinkProps>(({ selected, theme }) => `
  display: flex;
  align-items: center;
  padding: var(--r-spacing-20) var(--r-spacing-40);
  gap: var(--r-spacing-25);
  background-color: ${selected ? theme.color[50] : "transparent"};
  font-size: 0.8125rem;
  border-radius: var(--r-border-radius-sm);
  cursor: pointer;
  z-index: ${selected ? 5 : 0};
  user-select: none;
  margin-bottom: var(--r-spacing-10);
  position: relative;

  &:before {
    content: '';
    display: ${selected ? 'block' : 'none'};
    width: 4px;
    height: calc(100% - var(--r-spacing-30));
    background-color: ${theme.color[500]};
    position: absolute;
    left: 0;
    top: var(--r-spacing-15);
    border-radius: var(--r-border-radius-full);
    margin-right: var(--r-spacing-10);
  }

  &:hover {
    background-color: #f8f8f8;    
  }
`);

const Label = styled.div<NavLinkProps>(({ selected, theme }) => `
  font-weight: ${selected ? 600 : 500};
  color: ${selected ? theme.color[500] : "#545454"};
  text-align: center;

  @media screen and (min-width: 900px) {
    text-align: left;
  }
`);

export function NavLink({ icon: Icon, label, selected, linkComponent, hidden, mobile, ...rest }: NavLinkProps) {
  const theme = useTheme();

  const navLinkStandard = (
    <NavLinkContainer selected={selected} {...rest}>
      {Icon && (
        <CenteredFlexbox>
          <Icon color={selected ? theme.color[500] : "#545454"} size={16} weight={selected ? "bold" : "regular"} />
        </CenteredFlexbox>
      )}
      <span style={{ fontWeight: selected ? 600 : 500, color: selected ? theme.color[600] : '#464646' }}>{label}</span>
    </NavLinkContainer>
  );

  const navLinkMobile = (
    <NavLinkContainer selected={selected} {...rest} style={{ justifyContent: 'center', flexFlow: 'column', padding: 'var(--r-spacing-30)' }}>
      {Icon && (
        <CenteredFlexbox>
          <Icon color={selected ? theme.color[500] : "#545454"} size={16} weight={selected ? "bold" : "regular"} />
        </CenteredFlexbox>
      )}
      <Label>{label}</Label>
    </NavLinkContainer>
  );

  const navLink = mobile ? navLinkMobile : navLinkStandard;

  if (hidden) return null;

  if (linkComponent && React.isValidElement(linkComponent)) {
    const props = linkComponent.props as Record<string, any>;
    return React.cloneElement(linkComponent, { ...props }, navLink);
  }

  return navLink;
}
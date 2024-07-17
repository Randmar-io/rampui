import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import React, { forwardRef } from "react";
import { colors } from "../colors/util";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "default" | "reseller" | "manufacturer" | "shopify" | "success" | "error";
  external?: boolean;
}

const StyledLink = styled('a')<LinkProps>((props) => {
  const color = props.color ? colors[props.color] : props.theme.color;

  return css`
    text-decoration: none;
    color: ${color[600]};
    border-bottom: 1px solid ${color[500]};
    display: flex;
    align-items: center;
    gap: var(--r-spacing-5);
    width: max-content;

    &:hover {
      border-color: transparent;
    }
  `
})

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ external, children, ...props }, ref) => {
  return (
    <StyledLink
      ref={ref}
      {...props}
      target={external ? "_blank" : props.target}
    >
      <span>{children}</span>
      {external && <ArrowUpRight size={16} />}
    </StyledLink>
  );
});
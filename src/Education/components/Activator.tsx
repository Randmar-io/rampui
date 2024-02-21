import styled from "@emotion/styled";
import { GraduationCap, IconProps, Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import red from "../../colors/red";

const ActivatorContainer = styled.div`
  padding: var(--r-spacing-30);
  border-radius: var(--r-border-radius-full);
  position: absolute;
  bottom: var(--r-spacing-70);
  right: var(--r-spacing-70);
  background-color: ${red[500]};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  z-index: 25;
  cursor: pointer;

  :hover {
    background-color: ${red[600]};
  }
`

const IconContainer = styled.div`
  height: 28;
  width: 28;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ActivatorProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: PhosphorIcon;
}

const iconProps: IconProps = {
  size: 28,
  color: "#fff"
}

export function Activator({ icon: Icon, ...rest }: ActivatorProps) {
  return (
    <ActivatorContainer {...rest}>
      <IconContainer>
        {Icon ? <Icon {...iconProps} /> : <GraduationCap {...iconProps} />}
      </IconContainer>
    </ActivatorContainer>
  )
}
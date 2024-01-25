import { Stack } from "@mui/system";
import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import { ButtonBase } from "./ButtonBase";
import { ButtonLoader } from './ButtonLoader/ButtonLoader';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: "default" | "reseller" | "manufacturer" | "success" | "error";
  startIcon?: PhosphorIcon;
  endIcon?: PhosphorIcon;
  fullWidth?: boolean;
  loading?: boolean;
}

const renderContent = ({ startIcon: StartIcon, endIcon: EndIcon, children, loading, variant, size }: ButtonProps) => {
  const iconSize = {
    small: 13,
    medium: 15,
    large: 18
  }

  const spacing = {
    small: 0.5,
    medium: 0.75,
    large: 1
  }

  return (
    <div style={{ position: 'relative' }}>
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        display: loading ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ButtonLoader size={size} variant={variant} />
      </span>
      <Stack
        sx={{ color: loading ? 'transparent' : 'none' }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={spacing[size || "medium"]}
      >
        {StartIcon && <StartIcon size={iconSize[size || "medium"]} />}
        {children && <div>{children}</div>}
        {EndIcon && <EndIcon size={iconSize[size || "medium"]} />}
      </Stack>
    </div >
  )
};

export function Button({ loading, disabled, ...rest }: ButtonProps) {
  return (
    <ButtonBase disabled={loading || disabled} {...rest}>
      {renderContent({ loading, ...rest })}
    </ButtonBase>
  )
}
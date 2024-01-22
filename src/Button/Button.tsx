import { Stack } from "@mui/system";
import React from "react";
import { ButtonBase } from "./ButtonBase";
import { ButtonLoader } from './ButtonLoader/ButtonLoader';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: "default" | "reseller" | "manufacturer" | "success" | "error";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  fullWidth?: boolean;
  loading?: boolean;
}

const renderContent = ({ startIcon, endIcon, children, loading, variant, size }: ButtonProps) => (
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
    <Stack sx={{ color: loading ? 'transparent' : 'none' }} direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
      {startIcon}
      <div>{children}</div>
      {endIcon}
    </Stack>
  </div >
);

export function Button({ loading, disabled, ...rest }: ButtonProps) {
  return (
    <ButtonBase disabled={loading || disabled} {...rest}>
      {renderContent({ loading, ...rest })}
    </ButtonBase>
  )
}
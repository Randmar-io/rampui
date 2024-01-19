import { Stack } from "@mui/system";
import React from "react";
import { ButtonLoader } from './ButtonLoader/ButtonLoader';
import { color, height, thickness } from './ButtonLoader/styles/buttonLoaderStyles';
import { ButtonPrimary } from './variants/ButtonPrimary';
import { ButtonSecondary } from './variants/ButtonSecondary';
import { ButtonTertiary } from './variants/ButtonTertiary';

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
      <ButtonLoader
        height={height[size || "medium"]}
        thickness={thickness[size || "medium"]}
        color={color[variant || "primary"]}
      />
    </span>
    <Stack sx={{ color: loading ? 'transparent' : 'none' }} direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
      {startIcon}
      {children && <div>{children}</div>}
      {endIcon}
    </Stack>
  </div >
);

export function Button({ variant, loading, ...rest }: ButtonProps) {
  function ButtonVariant(props: ButtonProps) {
    if (variant === "primary") return <ButtonPrimary {...props} />
    if (variant === "tertiary") return <ButtonTertiary {...props} />
    return <ButtonSecondary {...props} />
  }

  return (
    <ButtonVariant disabled={loading} {...rest}>
      {renderContent({ variant, loading, ...rest })}
    </ButtonVariant>
  )
}
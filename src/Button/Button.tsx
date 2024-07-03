import { Stack } from "@mui/system";
import { Icon as PhosphorIcon, IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import React, { forwardRef, useState } from "react";
import { Modal } from "../Modal";
import { ButtonBase } from "./ButtonBase";
import { ButtonLoader } from './ButtonLoader/ButtonLoader';

interface ConfirmationDialog {
  title: string;
  content?: string;
  onConfirm: () => void | Promise<void>;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: "default" | "reseller" | "manufacturer" | "shopify" | "success" | "error";
  starticon?: PhosphorIcon;
  endicon?: PhosphorIcon;
  fullWidth?: boolean;
  loading?: boolean;
  iconProps?: PhosphorIconProps;
  iconOnly?: boolean;
  confirmationDialog?: ConfirmationDialog;
}

const ButtonContent = ({ starticon: StartIcon, endicon: EndIcon, children, loading, variant, size, iconProps }: ButtonProps) => {
  const iconSize = {
    small: 14,
    medium: 16,
    large: 18
  }

  const spacing = {
    small: 0.5,
    medium: 0.75,
    large: 1
  }

  const iconStyles: PhosphorIconProps = {
    size: iconSize[size || "medium"],
    weight: "bold",
    ...iconProps,
    color: loading ? 'transparent' : iconProps?.color ? iconProps.color : undefined
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
        {StartIcon && <StartIcon {...iconStyles} />}
        {children && <div>{children}</div>}
        {EndIcon && <EndIcon {...iconStyles} />}
      </Stack>
    </div >
  );
};

export const Button = forwardRef(({ loading, disabled, confirmationDialog, ...rest }: ButtonProps, ref) => {
  if (confirmationDialog) {
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const { title, content, onConfirm } = confirmationDialog;

    async function handleConfirm() {
      try {
        setLoading(true);
        await onConfirm();
        setOpen(false);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    return (
      <>
        <Modal
          title={title}
          open={open}
          onClose={() => setOpen(false)}
          actions={[
            <Button onClick={() => setOpen(false)}>Cancel</Button>,
            <Button variant="primary" onClick={handleConfirm} loading={isLoading}>Confirm</Button>
          ]}
        >
          <div>
            {content}
          </div>
        </Modal>
        <ButtonBase
          onClick={() => setOpen(true)}
          {...rest}
        >
          {ButtonContent({ loading, ...rest })}
        </ButtonBase>
      </>
    );
  }

  return (
    <ButtonBase disabled={loading || disabled} {...rest} ref={ref}>
      <ButtonContent loading={loading} {...rest} />
    </ButtonBase>
  );
});
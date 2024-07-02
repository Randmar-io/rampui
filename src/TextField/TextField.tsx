import { OutlinedInput, OutlinedInputProps } from "@mui/material";
import React from "react";

interface TextFieldProps extends OutlinedInputProps {
  value?: React.ReactNode;
}

export function TextField({ readOnly, sx, label, value, fullWidth, inputProps, ...rest }: TextFieldProps) {
  const labelMarkup = label ? <p style={{ fontSize: 12, paddingBottom: 4, color: "#616161" }}>{label}</p> : null;

  if (readOnly) return (
    <div style={{ height: 'max-content' }}>
      {labelMarkup}
      <p style={{ fontSize: 13, textWrap: "wrap" }}>{value}</p>
    </div>
  )

  return (
    <div style={{ height: 'max-content' }}>
      {labelMarkup}
      <OutlinedInput
        sx={{ padding: '8px 12px', backgroundColor: 'white', ...sx }}
        fullWidth={fullWidth || true}
        value={value}
        inputProps={{
          style: { fontSize: 13, padding: 0, ...inputProps?.style },
          ...inputProps,
        }}
        {...rest}
      />
    </div>
  )
}
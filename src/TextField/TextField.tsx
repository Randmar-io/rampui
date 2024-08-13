import styled from "@emotion/styled";
import { OutlinedInput, OutlinedInputProps, outlinedInputClasses } from "@mui/material/";
import React from "react";
import { grey } from "../colors";

export interface TextFieldProps extends OutlinedInputProps {
  value?: React.ReactNode;
}

const StyledInput = styled(OutlinedInput)<TextFieldProps>(({ theme }) => `
  padding: 8px 12px;
  background-color: white;
  color: #424242;
  & .${outlinedInputClasses.notchedOutline} {
    border-color: ${grey[200]};
  }
  &:hover:not(.Mui-focused) .${outlinedInputClasses.notchedOutline} {
    border-color: #c4c4c4;
  }
  &.Mui-focused .${outlinedInputClasses.notchedOutline} {
    border-width: 1px;
    border-color: #aeaeae;
  }
`);

export function TextField({ readOnly, label, value, fullWidth, inputProps, ...rest }: TextFieldProps) {
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
      <StyledInput
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
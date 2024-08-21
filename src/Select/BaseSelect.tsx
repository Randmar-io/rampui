import styled from "@emotion/styled";
import { Select, SelectProps, outlinedInputClasses } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import React from "react";
import { grey } from "../colors";

const StyledSelect = styled(Select)(({ size }) => `
  border-radius: ${size === 'small' ? '10px' : '12px'};
  color: #424242;
  background-color: white;
  min-width: ${size === 'small' ? '160px' : '200px'};
  & .MuiSelect-select {
    padding: ${size === 'small' ? '3px 10px' : '6px 12px'};
    font-size: ${size === 'small' ? '12px' : '13px'};
  }
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

export function BaseSelect({ size, ...rest }: SelectProps) {
  return (
    <StyledSelect
      MenuProps={{
        PaperProps: {
          sx: {
            mt: "6px",
            borderRadius: "12px",
            backgroundColor: 'white',
            boxShadow: 'var(--r-shadow-sm)',
          }
        },
        sx: {
          "& .MuiList-padding": {
            padding: "6px",
          },
        }
      }}
      IconComponent={props => <CaretDown {...props} size={size === 'small' ? 14 : 16} />}
      size={size}
      {...rest}
    />
  )
}
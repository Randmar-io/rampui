import styled from "@emotion/styled";
import { Select, SelectProps, outlinedInputClasses } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import React from "react";
import { grey } from "../colors";

const StyledSelect = styled(Select)(({ theme }) => `
  border-radius: 12px;
  color: #424242;
  background-color: white;
  min-width: 200px;
  & .MuiSelect-select {
    padding: 6px 12px;
    font-size: 13px;
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

export function BaseSelect(props: SelectProps) {
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
      IconComponent={props => <CaretDown {...props} />}
      {...props}
    />
  )
}

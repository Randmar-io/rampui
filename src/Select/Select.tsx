import { SelectProps as MuiSelectProps, SelectChangeEvent } from "@mui/material";
import React from "react";
import { Typography } from "../Typography";
import { BaseSelect } from "./BaseSelect";
import { MenuItem } from "./MenuItem";

interface Option {
  value: string;
  displayText?: string;
}

interface CustomSelectProps {
  options: (string | Option)[];
  selected?: string;
  setSelected: (selected: string) => void;
}

export type SelectProps = MuiSelectProps & CustomSelectProps;

export function Select({ options, selected, setSelected, label, ...muiSelectProps }: SelectProps) {
  const parsedOptions = options.map(option => {
    if (typeof option === 'string') {
      return { value: option, displayText: option };
    } else {
      return option;
    }
  });

  const handleChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    setSelected(event.target.value as string);
  };

  return (
    <div style={{ height: 'max-content' }}>
      {
        label &&
        <Typography variant="bodySm" color="subdued" style={{ marginBottom: 4 }}>{label}</Typography>
      }
      <BaseSelect
        value={selected}
        onChange={handleChange}
        {...muiSelectProps}
      >
        {parsedOptions.map(option => (
          <MenuItem value={option.value} key={option.value}>
            {option.displayText ?? option.value}
          </MenuItem>
        ))}
      </BaseSelect>
    </div>
  );
}
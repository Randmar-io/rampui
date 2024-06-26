import { MenuItem, Select as MuiSelect, SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";

interface Option {
  value: string;
  displayText?: string;
}

interface CustomSelectProps {
  options: (string | Option)[];
  selected?: string;
  setSelected: (selected: string) => void;
}

type SelectProps = MuiSelectProps<string> & CustomSelectProps;

export function Select({ options, selected, setSelected, sx, label, ...muiSelectProps }: SelectProps) {
  const parsedOptions = options.map(option => {
    if (typeof option === 'string') {
      return { value: option, displayText: option };
    } else {
      return option;
    }
  });

  return (
    <div style={{ height: 'max-content' }}>
      {
        label &&
        <p style={{ fontSize: 12, color: "#616161", marginBottom: 4 }}>{label}</p>
      }
      <MuiSelect
        value={selected}
        onChange={e => setSelected(e.target.value as string)}
        sx={{
          borderRadius: 1,
          backgroundColor: 'white',
          minWidth: 200,
          '& .MuiSelect-select': {
            padding: '6px 12px',
            fontSize: 13,
          },
          ...sx,
        }}
        {...muiSelectProps}
      >
        {parsedOptions.map(option => (
          <MenuItem value={option.value} key={option.value}>
            {option.displayText ?? option.value}
          </MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
}
import styled from "@emotion/styled";
import { InputBase, InputBaseProps } from "@mui/material";
import { Stack } from "@mui/system";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import { Button } from "../Button";
import { grey } from "../colors";

export interface FocusRef {
  focus: () => void;
}

export interface SearchBarProps extends Omit<InputBaseProps, 'onSubmit'> {
  value: string
  setValue: (value: string) => void;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  focusRef?: React.Ref<FocusRef>
}

const SearchBarContainer = styled('form')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: '100%';
  padding: 2px 4px 2px 14px;
  border-radius: 100px;
  border: 3px solid transparent;
  box-shadow: none;

  &:focus-within {
    border: 3px solid ${({ theme }) => theme.color[300]};
  }

  &:hover:not(:focus-within) {
    border: 3px solid ${({ theme }) => theme.color[200]};
  }

  @media screen and (min-width: 900px){
    width: 300px;
  }
`;

const Key = styled('span')`
  padding: 4px 6px;
  border-radius: 6px;
  background-color: ${grey[50]};
  color: rgba(0,0,0,0.4);
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
`;

export const SearchBar = ({ value, setValue, onSubmit, focusRef, ...props }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(focusRef, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === '/') {
        event.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <SearchBarContainer onSubmit={onSubmit}>
      <InputBase
        sx={{ p: 0, m: 0, width: '100%', fontSize: 13, fontWeight: 500, color: grey[500] }}
        placeholder="Search anything"
        inputRef={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        {...props}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', gap: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
          {
            value && value.length > 0 ?
              <X
                size={14}
                color={grey[500]}
                style={{ marginLeft: 8, cursor: 'pointer', flexShrink: 0 }}
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                  setValue("");
                }}
              />
              :
              <Stack alignItems="center" sx={{ flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
                <Key>Ctrl</Key>
                <span style={{ color: grey[400], padding: "4px 0" }}>+</span>
                <Key>/</Key>
              </Stack>
          }
        </div>
        <Button type="submit" variant="tertiary" iconOnly starticon={MagnifyingGlass} iconProps={{ color: grey[400] }} size="small" style={{ flexShrink: 0 }} />
      </div>
    </SearchBarContainer>
  );
};
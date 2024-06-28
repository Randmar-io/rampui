import styled from "@emotion/styled";
import { InputBase, InputBaseProps, Typography } from "@mui/material";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { grey } from "../colors";

interface SearchBarProps extends Omit<InputBaseProps, 'onSubmit'> {
  value: string
  setValue: (value: string) => void;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const SearchBarContainer = styled('form')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: '100%';
  padding: 2px 12px;
  border-radius: 100px;
  border: 3px solid transparent;
  box-shadow: none;

  &:focus-within {
    border: 3px solid ${({ theme }) => theme.color[200]};
  }

  &:hover {
    border: 3px solid ${({ theme }) => theme.color[200]};
  }

  @media screen and (min-width: 900px){
    width: 300px;
  }
`;

export const SearchBar = ({ value, setValue, onSubmit, ...props }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';
    setQuery(query);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
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
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: '100%' }}>
        <MagnifyingGlass color={grey[400]} size={15} weight="bold" />
        <InputBase
          sx={{ p: 0, m: 0, width: '100%', fontSize: 13, fontWeight: 500, color: grey[500] }}
          placeholder="Search anything"
          inputRef={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          {...props}
        />
      </div>
      {
        value && value.length > 0 ?
          <X
            size={14}
            color={grey[500]}
            style={{ marginLeft: 8, cursor: 'pointer' }}
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.focus();
              }
              setValue("");
            }}
          />
          :
          <Typography sx={{
            fontSize: 11,
            color: "#b0b0b0",
            fontWeight: 500,
            whiteSpace: 'nowrap',
            paddingRight: '4px',
            display: { xs: 'none', md: 'block' }
          }}>
            Ctrl + K
          </Typography>
      }
    </SearchBarContainer>
  );
};
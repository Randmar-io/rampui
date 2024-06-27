import { Box, InputBase, InputBaseProps } from "@mui/material";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { grey, red } from "../colors";

interface SearchBarProps extends Omit<InputBaseProps, 'onSubmit'> {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const SearchBar = ({ onSubmit, ...props }: SearchBarProps) => {
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
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        width: { md: 300 },
        px: 1.5,
        py: "1px",
        borderRadius: 5,
        border: '3px solid transparent',
        boxShadow: 'none',
        ":focus-within": {
          border: `3px solid ${red[200]}`
        },
        ":hover": {
          border: `3px solid ${red[200]}`
        }
      }}
      onSubmit={onSubmit}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: '100%' }}>
        <MagnifyingGlass color={grey[400]} size={15} weight="bold" />
        <InputBase
          sx={{ p: 0, m: 0, width: '100%', fontSize: 13, fontWeight: 500, color: grey[500] }}
          placeholder="Search anything"
          inputRef={inputRef}
          {...props}
          onSubmit={e => console.log("Submit")}
        />
      </div>
      {
        query.length > 0 ?
          <X
            size={14}
            color={grey[500]}
            style={{ marginLeft: 8, cursor: 'pointer' }}
            onClick={() => {
              inputRef.current?.focus();
              setQuery("")
            }}
          />
          :
          <p style={{ fontSize: 10, color: "#b0b0b0", fontWeight: 500, whiteSpace: 'nowrap', paddingRight: '4px' }}>
            Ctrl + K
          </p>
      }
    </Box>
  );
};
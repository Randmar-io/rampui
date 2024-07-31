import styled from "@emotion/styled";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import { UserSound } from "@phosphor-icons/react";
import React, { useState } from "react";
import { grey } from "../colors";
import { stylesMap } from "./voiceData";

const Activator = styled('button')(({ theme }) => `
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`);

const StyledMenuItem = styled(MenuItem)`
  color: #545454;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  width: 100%;
  padding: var(--r-spacing-10) var(--r-spacing-30);
  border: none;
  border-radius: var(--r-border-radius-sm);
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f8f8f8;
  }
`

interface StyleSelectProps {
  styles: string[];
  selectedStyle?: string;
  setSelectedStyle?: (style: string) => void;
}

export function StyleSelect({ styles, selectedStyle, setSelectedStyle }: StyleSelectProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (style: string) => {
    if (!setSelectedStyle) return;
    if (style === selectedStyle) setSelectedStyle("");
    else setSelectedStyle(style);
    handleClose();
  };

  return (
    <>
      <Tooltip title={selectedStyle || "Select style"}>
        <Activator onClick={handleClick}>
          {
            selectedStyle
              ?
              <span style={{ position: "relative", top: -1 }}>{stylesMap[selectedStyle].split(' ')[0]}</span>
              :
              <UserSound size={14} color={grey[300]} weight="bold" />
          }
        </Activator>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        sx={{
          maxHeight: 300,
          mt: '4px',
          '& .MuiMenu-paper': {
            boxShadow: 'var(--r-shadow-sm)',
            borderRadius: 'var(--r-border-radius-md)',
            padding: 'var(--r-spacing-10)',
          },
          '& .MuiList-root': {
            padding: 0,
          }
        }}
      >
        {styles.map((style) => (
          <StyledMenuItem key={style} selected={style === selectedStyle} onClick={() => handleSelect(style)}>
            {stylesMap[style]}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  )
}

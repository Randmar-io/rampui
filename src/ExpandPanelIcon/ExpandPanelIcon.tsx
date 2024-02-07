import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import React from "react";

interface ExpandPanelIconProps {
    small?: boolean
    color: string
}

export const ExpandPanelIcon = ({ small, color }: ExpandPanelIconProps) => {
    return (
        <IconButton sx={{ p: 0, m: 0, color: color }} size={small ? "small" : undefined}>
            <ExpandMoreIcon sx={small ? undefined : { width: 40, height: 40 }} />
        </IconButton>
    );
};

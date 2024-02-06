import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { Color } from "../colors/colorUtils";
import randmar from "../colors/randmar";
import { CaretDown } from "@phosphor-icons/react";
import React from "react";

interface ExpandPanelIconProps {
    small?: boolean
    color?: Color
}

export const ExpandPanelIcon = ({ small, color }: ExpandPanelIconProps) => {
    if (!color) color = randmar; // todo primary instead of randmar.

    return (
        <IconButton sx={{ p: 0, m: 0, color: color[400] }} size={small ? "small" : undefined}>
            <ExpandMoreIcon sx={small ? undefined : { width: 40, height: 40 }} />
        </IconButton>
    );
};

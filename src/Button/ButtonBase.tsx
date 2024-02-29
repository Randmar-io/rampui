import styled from '@emotion/styled';
import { Button as MuiBaseButton } from '@mui/base/Button';
import blue from '../colors/blue';
import grey from '../colors/grey';
import { ButtonProps } from "./Button";
import { colors, fontSizes, paddings } from './styles/buttonStyles';

export const ButtonBase = styled(MuiBaseButton)<ButtonProps>((props) => {
  const padding = paddings[props.size || "medium"];
  const fontSize = fontSizes[props.size || "medium"]
  const width = props.fullWidth ? "100%" : "max-content";
  const color = colors[props.color || "central"];

  const baseStyle = `
    font-weight: 600;
    font-size: ${fontSize};
    line-height: 1.5;
    box-sizing: border-box;
    border-radius: var(--r-border-radius-full);
    padding: ${padding};
    width: ${width};
    user-select: none;
    border: 1px solid;
    cursor: pointer;
    height: max-content;

    &:focus-visible {
      outline: 2px solid ${blue[500]};
      outline-offset: 1.5px;
    }

    &:disabled {
      border-color: transparent;
      cursor: default;
      box-shadow: none;
      transform: scale(1);
    }
  `;

  const variant = {
    "primary": `
      background-color: ${color[500]};
      color: white;
      box-shadow: inset 0 1px ${color[400]};
      border-color: ${color[500]};

      &:hover {
        background-color: ${color[600]};
      } 

      &:active {
        background-color: ${color[700]};
        border-color: transparent;
      }

      &:disabled {
        background: ${grey[300]};
      }
    `,

    "secondary": `
      border-color: ${grey[200]};
      background: white;
      color: ${color[700]};
      box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1);

      &:hover {
        background: ${grey[50]};
        border-color: ${color[200]};  
      }
      
      &:active {
        background: ${color[50]};
      }

      &:disabled {
        box-shadow: none;
        background: ${grey[100]};
        color: ${grey[400]};
      }
    `,

    "tertiary": `
      border-color: transparent;
      background: transparent;
      color: ${color[700]};

      &:hover {
        background: ${grey[100]};
      }

      &:active {
        background: ${grey[100]};
        box-shadow: inset 0 1px 1px 0 ${grey[400]}, inset 1px 0 1px 0 ${grey[300]}, inset -1px 0 1px 0 ${grey[300]};
      }

      &:disabled {
        background: none;
        box-shadow: none;
        color: ${grey[400]};
      }
    `
  }

  return baseStyle + variant[props.variant || "secondary"];
});
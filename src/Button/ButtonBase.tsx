import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button as MuiBaseButton } from '@mui/base/Button';
import blue from '../colors/blue';
import grey from '../colors/grey';
import { ButtonProps } from "./Button";
import { colors, fontSizes, paddings, paddingsIcon } from './styles/buttonStyles';

export const ButtonBase = styled(MuiBaseButton, {
  shouldForwardProp: (prop) => prop !== 'iconOnly'
})<ButtonProps>((props) => {
  const theme = useTheme();

  const padding = props.iconOnly ? paddingsIcon[props.size || "medium"] : paddings[props.size || "medium"];
  const fontSize = fontSizes[props.size || "medium"]
  const width = props.fullWidth ? "100%" : "max-content";
  const color = props.color ? colors[props.color] : theme.color;

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
      color: ${color[500]};

      &:hover:not(:disabled) {
        background: ${grey[50]};
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
      color: ${color[500]};

      &:hover {
        background: ${grey[100]};
      }

      &:active {
        background: ${grey[100]};
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
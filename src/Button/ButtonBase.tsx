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
  const color = colors[props.color || "default"];

  const baseStyle = `
    font-weight: 500;
    font-size: ${fontSize};
    line-height: 1.5;
    box-sizing: border-box;
    border-radius: 100px;
    padding: ${padding};
    width: ${width};
    cursor: pointer;
    user-select: none;
    border: 1px solid;

    &:active {
      transform: translateY(0.5px);
    }

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
      background: linear-gradient(${color[800]}, ${color[600]});
      color: white;
      box-shadow: inset 0 1px ${color[600]};
      border-color: ${color[700]};

      &:hover {
        background: linear-gradient(${color[700]}, ${color[700]});
      } 

      &:active {
        background: linear-gradient(${color[700]}, ${color[700]});
        box-shadow: inset 0 1px 1px ${grey[900]};
        border-color: transparent;
      }

      &:disabled {
        background: ${grey[300]};
        box-shadow: none;
      }
    `,

    "secondary": `
      background: white;
      border-color: ${grey[200]};
      color: ${color[700]};

      &:hover {
        background: ${grey[50]};
        border-color: ${color[300]};  
      }
      
      &:active {
        background: ${grey[50]};
        border-color: ${color[300]};
        box-shadow: inset 0 0.5px 2px 0 ${grey[300]};
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
        box-shadow: inset 0 0.5px 2px 0 ${grey[400]};
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
import styled from '@emotion/styled';
import { Button as MuiBaseButton } from '@mui/base/Button';
import blue from '../../colors/blue';
import { ButtonProps } from "../Button";
import { fontSizes, paddings } from '../styles/buttonStyles';

export const ButtonBase = styled(MuiBaseButton)<ButtonProps>((props) => {
  const padding = paddings[props.size || "medium"];
  const fontSize = fontSizes[props.size || "medium"]
  const width = props.fullWidth ? "100%" : "max-content";

  return (
    `
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: ${fontSize};
    line-height: 1.5;
    box-sizing: border-box;
    border-radius: 100px;
    padding: ${padding};
    width: ${width};
    cursor: pointer;
    user-select: none;
    transition: all 100ms cubic-bezier(0.25, 0.1, 0.25, 1);

    &:active {
      transform: translateY(1px);
    }

    &:focus-visible {
      outline: 2px solid ${blue[500]};
      outline-offset: 1.5px;
    }

    &.Mui-disabled {
      border: 0;
      cursor: default;
      box-shadow: none;
      transform: scale(1);
    }
  `
  )
});
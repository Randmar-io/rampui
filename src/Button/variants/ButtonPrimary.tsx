import styled from '@emotion/styled';
import grey from '../../colors/grey';
import { ButtonProps } from '../Button';
import { colors } from '../styles/buttonStyles';
import { ButtonBase } from './ButtonBase';

export const ButtonPrimary = styled(ButtonBase)<ButtonProps>((props) => {
  const color = colors[props.color || "default"];

  return (
    `
    background: linear-gradient(${color[800]}, ${color[700]});
    border: none;
    color: white;
    box-shadow: inset 0 1px ${color[600]};

    &:hover {
      background: linear-gradient(${color[800]}, ${color[800]});
    }

    &:active {
      background: linear-gradient(${color[800]}, ${color[800]});
      box-shadow: inset 0 1px 1px ${grey[800]};
    }

    &.Mui-disabled {
      background: ${grey[400]};
      box-shadow: none;
    }
  `
  )
});
import styled from '@emotion/styled';
import grey from '../../colors/grey';
import { ButtonProps } from '../Button';
import { colors } from '../styles/buttonStyles';
import { ButtonBase } from './ButtonBase';

export const ButtonPrimary = styled(ButtonBase)<ButtonProps>((props) => {
  const color = colors[props.color || "default"];

  return (
    `
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
  `
  )
});
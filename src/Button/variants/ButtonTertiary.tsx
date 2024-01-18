import styled from '@emotion/styled';
import grey from '../../colors/grey';
import { ButtonProps } from '../Button';
import { colors } from '../styles/buttonStyles';
import { ButtonBase } from './ButtonBase';

export const ButtonTertiary = styled(ButtonBase)<ButtonProps>((props) => {
  const color = colors[props.color || "default"];

  return (
    `
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
  )
});
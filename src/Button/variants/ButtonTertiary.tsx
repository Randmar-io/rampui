import styled from '@emotion/styled';
import grey from '../../colors/grey';
import { ButtonProps } from '../Button';
import { colors } from '../styles/buttonStyles';
import { ButtonBase } from './ButtonBase';

export const ButtonTertiary = styled(ButtonBase)<ButtonProps>((props) => {
  const color = colors[props.color || "default"];

  return (
    `
    background: transparent;
    border: none;
    color: ${color[700]};

    &:hover {
      background: ${grey[100]};
    }

    &:active {
      background: ${grey[100]};
      box-shadow: inset 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }

    &.Mui-disabled {
      background: none;
      box-shadow: none;
      color: ${grey[400]};
    }
  `
  )
});
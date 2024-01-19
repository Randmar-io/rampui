import styled from '@emotion/styled';
import grey from '../../colors/grey';
import { ButtonProps } from '../Button';
import { colors } from '../styles/buttonStyles';
import { ButtonBase } from './ButtonBase';

export const ButtonSecondary = styled(ButtonBase)<ButtonProps>((props) => {
  const color = colors[props.color || "default"];

  return (
    `
    background: white;
    border-color: ${grey[200]};
    color: ${color[700]};

    &:hover {
      background: ${grey[100]};
      border-color: ${grey[300]};
    }
    
    &:active {
      background: ${grey[100]};
      border-color: ${grey[300]};
      box-shadow: inset 0 1px 2px 0 ${grey[300]};
    }

    &:disabled {
      box-shadow: none;
      color: ${grey[400]};
    }
  `
  )
});
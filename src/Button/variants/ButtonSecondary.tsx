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
  `
  )
});
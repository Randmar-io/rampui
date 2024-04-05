import styled from '@emotion/styled';
import { Modal as MuiBaseModal, ModalProps as MuiModalProps } from '@mui/base/Modal';
import { X } from '@phosphor-icons/react';
import * as React from 'react';
import grey from '../colors/grey';

interface ModalProps extends MuiModalProps {
  title?: string;
  actions?: React.ReactNode[];
}

export function Modal({ children, title, actions, onClose, ...rest }: ModalProps) {
  return (
    <ModalBase slots={{ backdrop: Backdrop }} onClose={onClose} disableAutoFocus {...rest}>
      <Body>
        <Header>
          <div style={{ fontSize: '16px', fontWeight: 600 }}>
            {title}
          </div>
          <CloseIcon onClick={e => {
            if (onClose) onClose(e, "backdropClick")
          }}>
            <X size={16} />
          </CloseIcon>
        </Header>
        <Content>
          {children}
        </Content>
        <Actions>
          {actions}
        </Actions>
      </Body>
    </ModalBase>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: var(--r-spacing-40);
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: var(--r-spacing-15);
  padding-top: var(--r-spacing-40);
`

const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--r-spacing-10);
  margin: calc(var(--r-spacing-10) * -1);
  box-sizing: border-box;
  border-radius: var(--r-border-radius-sm);
  cursor: pointer;

  :hover {
    background-color: ${grey[100]}
  }

  :active {
    background-color: ${grey[200]}
  }
`

const Body = styled.div`
  background-color: #fff;
  height: max-content;
  min-width: 520px;
  padding: var(--r-spacing-50);
  border-radius: var(--r-border-radius-md);
  box-shadow: var(--r-shadow-xl);
`

const Content = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ModalBase = styled(MuiBaseModal)`
  position: fixed;
  z-index: 50;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.1);
  backdrop-filter: blur(10px);
  -webkit-tap-highlight-color: transparent;
  transition: all 150ms ease;
`;
import styled from '@emotion/styled';
import { Modal as MuiBaseModal, ModalProps as MuiModalProps } from '@mui/base/Modal';
import { X } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import grey from '../colors/grey';
import { Size } from '../utility/Types';

const maxWidthMapping = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

interface ModalProps extends MuiModalProps {
  title?: string;
  actions?: React.ReactNode[];
  maxWidth?: Size;
}

export function Modal({ children, title, actions, onClose, open, maxWidth, ...rest }: ModalProps) {
  return (
    <AnimatePresence>
      {
        open &&
        <ModalBase slots={{ backdrop: StyledBackdrop }} onClose={onClose} open={open} disableAutoFocus {...rest}>
          <Body
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            style={{ width: `min(${maxWidthMapping[maxWidth || "sm"]}, 100%)` }}
          >
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
      }
    </AnimatePresence>
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

const Body = styled(motion.div)`
  background-color: #fff;
  height: max-content;
  margin: var(--r-spacing-20);
  padding: var(--r-spacing-50);
  border-radius: var(--r-border-radius-md);
  box-shadow: var(--r-shadow-sm);
  max-height: 90vh;
`;

const Content = styled.div`
  overflow-y: scroll;
  max-height: 80vh;
  overflow-y: auto;

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

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
  (props, ref) => {
    const { open, ...other } = props;

    return (
      <AnimatePresence>
        {
          open && (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              {...other}
            />
          )
        }
      </AnimatePresence>
    );
  },
);

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.1);
  backdrop-filter: blur(10px);
  -webkit-tap-highlight-color: transparent;
`;
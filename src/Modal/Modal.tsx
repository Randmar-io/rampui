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
  maxWidth?: Size | false;
  flush?: boolean;
  hideCloseIcon?: boolean;
}

export function Modal({ children, title, actions, onClose, open, maxWidth, flush, hideCloseIcon, ...rest }: ModalProps) {
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
            style={{ width: maxWidth === false ? undefined : `min(${maxWidthMapping[maxWidth || "sm"]}, 100%)` }}
          >
            {
              !hideCloseIcon &&
              <CloseIcon onClick={e => {
                if (onClose) onClose(e, "backdropClick")
              }}>
                <X size={16} />
              </CloseIcon>
            }
            {
              title &&
              <div style={{
                fontSize: '16px',
                fontWeight: 600,
                padding: 'var(--r-spacing-40)'
              }}>
                {title}
              </div>
            }
            <Content style={{
              borderTopLeftRadius: title ? '0' : 'var(--r-border-radius-md)',
              borderTopRightRadius: title ? '0' : 'var(--r-border-radius-md)',
              borderBottomLeftRadius: actions ? '0' : 'var(--r-border-radius-md)',
              borderBottomRightRadius: actions ? '0' : 'var(--r-border-radius-md)',
              padding: flush ? 0 : '0 var(--r-spacing-40)',
            }}>
              {children}
            </Content>
            {
              actions &&
              <Actions>
                {actions}
              </Actions>
            }
          </Body>
        </ModalBase>
      }
    </AnimatePresence>
  );
}

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: var(--r-spacing-15);
  padding: var(--r-spacing-30);
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
  position: absolute;
  right: var(--r-spacing-40);
  top: var(--r-spacing-40);

  :hover {
    background-color: ${grey[100]}
  }

  :active {
    background-color: ${grey[200]}
  }
`

const Body = styled(motion.div)`
  background-color: #fff;
  height: auto;
  max-height: 90vh;
  margin: var(--r-spacing-20);
  border-radius: var(--r-border-radius-md);
  box-shadow: var(--r-shadow-sm);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding-top: var(--r-spacing-40);
  padding-bottom: var(--r-spacing-40);
  overflow-y: auto;
  max-height: calc(90vh - 80px);
`;

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
import styled from "@emotion/styled";
import { Modal } from "@mui/base";
import { ArrowsInSimple, ArrowsOutSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React from "react";
import { Paper, PaperProps } from "../Paper";

export interface ExpandableCardProps {
  id?: string;
  content?: React.ReactNode;
  expandedContent?: React.ReactNode;
  expandedWidth?: number;
  paperProps?: PaperProps;
}

export function ExpandableCard({ id, content, expandedContent, expandedWidth, paperProps }: ExpandableCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const cardContent = (
    <Paper padding="0" {...paperProps} style={{ position: 'relative', ...paperProps?.style }}>
      <ExpandIconContainer onClick={() => setExpanded(!expanded)}>
        {
          expanded ?
            <ArrowsInSimple size={18} color="#5f5f5f" />
            :
            <ArrowsOutSimple size={18} color="#5f5f5f" />
        }
      </ExpandIconContainer>
      {
        expanded ?
          expandedContent
          :
          content
      }
    </Paper>
  )

  return (
    <>
      <motion.div layoutId={`expandable-card-${id}`}>
        {cardContent}
      </motion.div>
      <ExpandedView open={expanded} onClose={() => setExpanded(false)} disableAutoFocus slots={{ backdrop: Backdrop }}>
        <motion.div layoutId={`expandable-card-${id}`} style={{ width: expandedWidth || 1024, maxHeight: '100%', margin: 8 }}>
          {cardContent}
        </motion.div>
      </ExpandedView>
    </>
  )
}

const ExpandIconContainer = styled.div`
  position: absolute; 
  top: 8px; 
  right: 8px; 
  height: 24px; 
  width: 24px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #e3e3e3;
  }
`;

const ExpandedView = styled(Modal)`
  position: fixed;
  z-index: 50;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.1);
  backdrop-filter: blur(2px);
  -webkit-tap-highlight-color: transparent;
  transition: all 150ms ease;
`;
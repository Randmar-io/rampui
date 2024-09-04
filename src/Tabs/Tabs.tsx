import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { Icon as PhosphorIcon } from '@phosphor-icons/react';
import * as React from 'react';
import { colors } from '../colors/util';

interface Tab {
  label?: string;
  content?: React.ReactNode;
  icon?: PhosphorIcon;
}

interface TabsProps {
  tabs?: Tab[];
  color?: "default" | "reseller" | "manufacturer" | "shopify" | "success" | "error";
  orientation?: "horizontal" | "vertical";
  defaultTabIndex?: number;
}

export function Tabs({ tabs, color, orientation = "vertical", defaultTabIndex = 0 }: TabsProps) {
  return (
    <TabsContainer defaultValue={defaultTabIndex} orientation={orientation}>
      <TabsList orientation={orientation}>
        {
          tabs?.map(({ label, icon: Icon }, index) => (
            <Tab key={index} color={color} orientation={orientation}>
              {Icon && <Icon size={14} weight='bold' style={{ marginRight: 8 }} />}
              <span>
                {label}
              </span>
            </Tab>
          ))
        }
      </TabsList>
      {
        tabs?.map(({ content }, index) => (
          <TabPanel key={index} value={index}>{content}</TabPanel>
        ))
      }
    </TabsContainer>
  );
}

const Tab = styled(BaseTab)<TabsProps>(({ theme, color: propsColor, orientation }) => {
  const color = propsColor ? colors[propsColor] : theme.color;

  return css`
    color: #545454;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    background-color: transparent;
    width: ${orientation === "horizontal" ? "max-content" : "100%"};
    padding: var(--r-spacing-20) var(--r-spacing-40);
    border: none;
    border-radius: var(--r-border-radius-sm);
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f8f8f8;
    }

    &.${buttonClasses.focusVisible} {
      background-color: ${color[50]};
      color: ${color[500]};
      font-weight: 600;
    }

    &.${tabClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.${tabClasses.selected} {
      background-color: ${color[50]};
      color: ${color[500]};
      font-weight: 600;
    }
  `
});

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  height: max-content;
`;

const TabsContainer = styled(BaseTabs)<TabsProps>(({ orientation }) => `
  display: flex;
  flex-direction: ${orientation === "horizontal" ? "column" : "row"};
  gap: 16px;
`);

const TabsList = styled(BaseTabsList)<TabsProps>(({ orientation }) => `
  ${orientation === "horizontal" ? "width: max-content;" : "min-width: 240px;"}
  height: max-content;
  background-color: white;
  display: flex;
  padding: 6px;
  gap: 4px;
  flex-direction: ${orientation === "horizontal" ? "row" : "column"};
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: var(--r-shadow-sm);
  border-radius: var(--r-border-radius-md);
`);
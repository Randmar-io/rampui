import styled from '@emotion/styled';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import * as React from 'react';

interface Tab {
  label?: string;
  content?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  return (
    <TabsContainer defaultValue={0} orientation="vertical">
      <TabsList>
        {
          tabs.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))
        }
      </TabsList>
      {
        tabs.map((tab, index) => (
          <TabPanel key={index} value={index}>{tab.content}</TabPanel>
        ))
      }
    </TabsContainer>
  );
}

const Tab = styled(BaseTab)(({ theme }) => `
  color: #545454;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  background-color: transparent;
  width: 100%;
  padding: var(--r-spacing-20) var(--r-spacing-40);
  border: none;
  border-radius: var(--r-border-radius-sm);
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f8f8f8;
  }

  &.${buttonClasses.focusVisible} {
    background-color: ${theme.color[50]};
    color: ${theme.color[500]};
    font-weight: 600;
  }

  &.${tabClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.${tabClasses.selected} {
    background-color: ${theme.color[50]};
    color: ${theme.color[500]};
    font-weight: 600;
  }
`);

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-size: 13px;
  box-shadow: var(--r-shadow-sm);
  border-radius: var(--r-border-radius-md);
  background-color: white;
  padding: var(--r-spacing-40);
`;

const TabsContainer = styled(BaseTabs)`
  display: flex;
  gap: 16px;
`;

const TabsList = styled(BaseTabsList)(({ theme }) => `
  min-width: 240px;
  height: max-content;
  background-color: white;
  display: flex;
  padding: 6px;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: var(--r-shadow-sm);
  border-radius: var(--r-border-radius-md);
`);
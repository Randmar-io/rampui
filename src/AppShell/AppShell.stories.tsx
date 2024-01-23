import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { Button } from '../Button';
import { NavMenuWithItems } from '../NavMenu/NavMenu.stories';
import { TopBarWithItems } from '../TopBar/TopBar.stories';
import { AppShell } from './AppShell';

const meta: Meta<typeof AppShell> = {
  title: 'App Shell',
  component: AppShell,
  parameters: {
    layout: "fullscreen"
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AppShellWithItems = () => {
  return (
    <AppShell
      topBar={<TopBarWithItems />}
      navMenu={<NavMenuWithItems />}
    >
      <Button>Button</Button>
    </AppShell>
  )
}

export const Default: Story = {
  render: () => <AppShellWithItems />
};

import { House, Notebook, Users } from "@phosphor-icons/react";
import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { NavMenuWithItems } from '../NavMenu/NavMenu.stories';
import { TopBarWithItems } from '../TopBar/TopBar.stories';
import { AppShell } from './AppShell';

const meta: Meta<typeof AppShell> = {
  title: 'App Shell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  {
    icon: House,
    label: "Home",
    selected: true
  },
  {
    icon: Users,
    label: "Users"
  },
  {
    icon: Notebook,
    label: "Logs"
  },
]

export const AppShellWithItems = () => {
  return (
    <AppShell
      topBar={<TopBarWithItems />}
      navMenu={<NavMenuWithItems />}
    >

    </AppShell>
  )
}

export const Default: Story = {
  render: () => <AppShellWithItems />
};

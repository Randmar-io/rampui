import { House, Notebook, Users } from "@phosphor-icons/react";
import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { NavMenu } from './NavMenu';

const meta: Meta<typeof NavMenu> = {
  title: 'Nav Menu',
  component: NavMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NavMenuWithItems = () => {
  return (
    <NavMenu
      menuItems={[
        {
          icon: House,
          label: "Home",
          selected: true,
          linkComponent: <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.google.com/" target="_blank" />
        },
        {
          icon: Users,
          label: "Users",
          linkComponent: <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.bing.com/" target="_blank" />
        },
        {
          icon: Notebook,
          label: "Logs",
          linkComponent: <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.yahoo.com/" target="_blank" />
        },

      ]}
    />
  )
}

export const Primary: Story = {
  render: () => <NavMenuWithItems />
};
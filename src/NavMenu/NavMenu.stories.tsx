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

      ]}
    />
  )
}

export const Primary: Story = {
  render: () => <NavMenuWithItems />
};

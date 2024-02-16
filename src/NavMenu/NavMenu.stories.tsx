import { Factory, Headset, House, Notebook, Plugs, ShoppingBagOpen, Storefront, Users, Warehouse } from "@phosphor-icons/react";
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
          label: "Home",
          icon: House,
          selected: true
        },
        {
          label: "Users",
          icon: Users,
        },
        {
          label: "Logs",
          icon: Notebook,
        },
        {
          label: "Reseller",
          icon: Storefront,
        },
        {
          label: "Manufacturer",
          icon: Factory,
        },
        {
          label: "Agency",
          icon: Headset,
        },
        {
          label: "Shopify",
          icon: ShoppingBagOpen,
        },
        {
          label: "Integration",
          icon: Plugs,
        },
        {
          label: "Warehouses",
          icon: Warehouse,
          hidden: true,
        },
      ]}
    />
  )
}

export const Primary: Story = {
  render: () => <NavMenuWithItems />
};
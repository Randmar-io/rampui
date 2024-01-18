import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { SearchBar } from "../SearchBar";
import { TopBar } from "./TopBar";

const meta: Meta<typeof TopBar> = {
  title: 'Top Bar',
  component: TopBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TopBarWithItems = () => {
  const rightMenu = <div style={{ backgroundColor: "white", borderRadius: 12, height: '2.25rem', width: 100, boxShadow: 'var(--r-shadow-centered-sm)', }} />
  
  return (
    <TopBar searchBar={<SearchBar />} rightMenu={rightMenu} />
  )
}

export const Primary: Story = {
  render: () => <TopBarWithItems />
};

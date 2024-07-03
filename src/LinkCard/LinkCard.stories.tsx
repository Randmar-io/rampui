import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { LinkCard } from './LinkCard';

const meta: Meta<typeof LinkCard> = {
  title: 'LinkCard',
  component: LinkCard,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export function LinkCardWithProps() {
  return <div style={{ maxWidth: 300, padding: 16 }}>
    <LinkCard
      title='Reseller Portal'
      description='Manage your reseller account, view your orders, and more.'
      to="https://www.google.com"
      external
      imgUrl="https://png.pngtree.com/png-clipart/20230504/original/pngtree-realistic-building-3d-with-transparent-background-png-image_9138858.png"
    />
  </div>
}

export const Primary: Story = {
  render: () => <LinkCardWithProps />
};
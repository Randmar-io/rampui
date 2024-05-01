import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { ExpandableCard, ExpandableCardProps } from './ExpandableCard';

const meta: Meta<typeof ExpandableCard> = {
  title: 'ExpandableCard',
  component: ExpandableCard,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const props: ExpandableCardProps = {
  id: "example",
  content: <div style={{ height: 200, padding: 16 }}>Content</div>,
  expandedContent: <div style={{ height: 400, padding: 16 }}>Expanded Content</div>,
}

export function ExpandableCardWithProps() {
  return <div style={{ width: 400, padding: 16 }}><ExpandableCard {...props} /></div>
}

export const Primary: Story = {
  render: () => <ExpandableCardWithProps />
};
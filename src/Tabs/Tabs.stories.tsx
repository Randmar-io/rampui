import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <div style={{ width: 900 }}>
      <Tabs tabs={[
        {
          label: 'First Tab',
          content: <div style={{ height: 300 }}>First Tab Content</div>
        },
        {
          label: 'Second Tab',
          content: <div style={{ height: 500 }}>Second Tab Content</div>
        },
        {
          label: 'Third Tab',
          content: <div style={{ height: 200 }}>Third Tab Content</div>
        },
      ]} />
    </div>
  ),
};
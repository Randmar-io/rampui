import type { Meta, StoryObj } from '@storybook/react';

import { Acorn } from '@phosphor-icons/react';
import React from 'react';
import { Paper } from '../Paper';
import { blue, purple } from '../colors';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Timeline',
  component: Timeline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    title: 'First Item',
    timestamp: '2023-01-01',
    description: 'First Item Description',
    marker: <p>A</p>
  },
  {
    title: 'Second Item',
    timestamp: '2023-01-02',
    description: 'Second Item Description',
    marker: <Acorn />,
    color: purple
  },
  {
    title: 'Third Item',
    timestamp: '2023-01-03',
    description: 'Third Item Description',
    marker: <p>🌰</p>,
  }
]


export const Default: Story = {
  args: { items },
  decorators: [
    (Story) => (
      <Paper style={{ width: 400 }}>
        <Story />
      </Paper>
    )
  ]
};

export const CustomColor: Story = {
  args: { items, color: blue },
  decorators: [
    (Story) => (
      <Paper style={{ width: 400 }}>
        <Story />
      </Paper>
    )
  ]
};
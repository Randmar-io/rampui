import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { Paper } from './Paper';

const meta: Meta<typeof Paper> = {
  title: 'Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Paper>Children</Paper>
};
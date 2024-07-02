import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '@mui/material';
import { Airplane } from '@phosphor-icons/react';
import React from 'react';
import { grey } from '../colors';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "secondary",
    children: 'Button',
    disabled: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    starticon: Airplane,
    size: 'medium',
    variant: 'primary',
    iconOnly: true,
    iconProps: { color: grey[400] },
    loading: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Icon: Story = {
  args: {
    starticon: Airplane,
    iconOnly: true,
    size: 'large',
  },
};

export const WithTooltop: Story = {
  render: () => (
    <Tooltip title="Tooltip">
      <Button iconOnly starticon={Airplane} />
    </Tooltip>
  )
}

import type { Meta, StoryObj } from '@storybook/react';

import { Airplane } from '@phosphor-icons/react';
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
    children: 'Icon',
    starticon: Airplane,
    size: 'medium',
    variant: 'primary',
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
    size: 'large'
  },
};

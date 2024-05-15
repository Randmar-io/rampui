import type { Meta, StoryObj } from '@storybook/react';

import { Chalkboard } from '@phosphor-icons/react';
import green from '../colors/green';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Chip',
    icon: Chalkboard,
    color: green
  },
};

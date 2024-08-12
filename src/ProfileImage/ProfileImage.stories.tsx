import type { Meta, StoryObj } from '@storybook/react';

import { ProfileImage } from './ProfileImage';

const meta: Meta<typeof ProfileImage> = {
  title: 'Profile Image',
  component: ProfileImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    applicationId: "2"
  },
};

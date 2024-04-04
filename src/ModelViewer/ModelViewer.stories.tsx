import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { ModelViewer } from './ModelViewer';

const meta: Meta<typeof ModelViewer> = {
  title: 'ModelViewer',
  component: ModelViewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ModelViewer source="https://api.randmar.io/Product/PNK0BFY6ZS85UVCBBDM3/3DModel" />
};
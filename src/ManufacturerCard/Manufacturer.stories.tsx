import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ManufacturerCard } from './ManufacturerCard';
import data from './sampleManufacturerData.json';

const meta: Meta<typeof ManufacturerCard> = {
  title: 'Manufacturer Card',
  component: ManufacturerCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ManufacturerCard manufacturer={data[0]} expandable />
};
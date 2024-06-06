import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ResellerCard } from './ResellerCard';
import data from './sampleResellerData.json';

const meta: Meta<typeof ResellerCard> = {
  title: 'Reseller Card',
  component: ResellerCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ResellerCard reseller={data[0]} expandable qualificationStatus='Qualified' />
};
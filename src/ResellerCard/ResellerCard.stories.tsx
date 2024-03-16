import type { Meta, StoryObj } from '@storybook/react';
import { ResellerCard } from './ResellerCard';

const meta: Meta<typeof ResellerCard> = {
  title: 'Reseller Card',
  component: ResellerCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // render: () => <ResellerCard reseller={reseller[0]} />
};
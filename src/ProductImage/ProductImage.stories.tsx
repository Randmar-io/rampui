import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { ProductImage } from "./ProductImage";

const meta: Meta<typeof ProductImage> = {
  title: 'Product Image',
  component: ProductImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ProductImage size="md" randmarSKU="CQLF6PHFTDNCZ6Y5K8QP" />
};

export const WithSecondaryContent: Story = {
  render: () => <ProductImage size="lg" randmarSKU="CQLF6PHFTDNCZ6Y5K8QP" secondaryContent={<div>Secondary</div>} />
};
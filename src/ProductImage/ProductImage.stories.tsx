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
  render: () => <ProductImage size="md" randmarSKU="BQ8H33ZCV0QJW9D1ULCN" />
};

export const WithSecondaryContent: Story = {
  render: () => <ProductImage size="lg" randmarSKU="BQ8H33ZCV0QJW9D1ULCN" secondaryContent={<div>Secondary</div>} />
};
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
  render: () => <ProductImage randmarSKU="PNK0BFY6ZS85UVCBBDM3" />
};

export const WithSecondaryContent: Story = {
  render: () => <ProductImage size="lg" randmarSKU="PNK0BFY6ZS85UVCBBDM3" secondaryContent={<div>Secondary</div>} />
};
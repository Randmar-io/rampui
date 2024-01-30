import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { Layout } from "./Layout";

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumnLayout = () => {

  return (
    <Layout>
      <Layout.Section span="oneThird">
        first
      </Layout.Section>
      <Layout.Section span="half">
        SECOND
      </Layout.Section>
    </Layout>
  )
}

export const Default: Story = {
  render: () => <TwoColumnLayout />
};

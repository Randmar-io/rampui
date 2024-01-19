import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Page',
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Page midWidth heading="This page" subHeading="This is an example page">Yo</Page>
};

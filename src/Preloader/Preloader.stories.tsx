import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { Preloader } from "./Preloader";

const meta: Meta<typeof Preloader> = {
  title: 'Preloader',
  component: Preloader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Preloader text="Some preloader text" />
};
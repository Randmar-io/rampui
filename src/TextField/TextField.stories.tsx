import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: 'Text Field',
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Readonly: Story = {
  render: () => <TextField readOnly label="Label" value="Some text" />
};

export const Editable: Story = {
  render: () => <TextField label="Label" value="Some text" />
};
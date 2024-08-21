import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string>('Option 1');

    return (
      <Select
        options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
        selected={selected}
        setSelected={setSelected}
        size="small"
      />
    );
  },
};

export const WithDifferentDisplayText: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string>("0");

    return (
      <Select
        options={[
          { value: '0', displayText: 'Zero' },
          { value: '1', displayText: 'One' },
          { value: '2', displayText: 'Two' },
          { value: '3', displayText: 'Three' },
          { value: '4', displayText: 'Four' },
        ]}
        selected={selected}
        setSelected={setSelected}
      />
    );
  },
};
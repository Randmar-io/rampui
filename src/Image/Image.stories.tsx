import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLink: Story = {
  render: () => (
    <a href="https://www.pexels.com/photo/19845824" style={{ display: "inline-block" }}>
      <Image
        src="https://images.pexels.dcom/photos/19845824/pexels-photo-19845824/free-photo-of-a-grassy-hill-with-a-beach-and-ocean-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="A beautiful beach"
        size="xl"
      />
    </a>
  ),
  args: {
    size: 'md',
  },
};

export const Zoomable: Story = {
  render: () => (
    <Image
      src="https://images.pexels.com/photos/19845824/pexels-photo-19845824/free-photo-of-a-grassy-hill-with-a-beach-and-ocean-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="A beautiful beach"
      size="xl"
      zoomable
    />
  ),
  args: {
    size: 'md',
  },
};
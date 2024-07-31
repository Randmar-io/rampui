import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { Education, EducationProps } from './Education';

const meta: Meta<typeof Education> = {
  title: 'Education',
  component: Education,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const props: EducationProps = {
  title: "Pricing Tiers",
  description: "At Randmar, we believe in providing tailored solutions to meet the unique needs of our resellers. Our pricing tiers are designed to offer flexibility and support as you grow your business.",
  academyLinks: [
    {
      title: "Read more",
      url: "https://www.randmar.io/pricing"
    },
    {
      title: "Watch video",
      url: "https://www.youtube.com/embed/NnptHOIrO_A",
    }
  ],
  youtubeVideoLink: "https://www.youtube.com/embed/NnptHOIrO_A",
}

export function EducationWithProps() {
  return <Education {...props} />
}

export const Primary: Story = {
  render: () => <EducationWithProps />
};
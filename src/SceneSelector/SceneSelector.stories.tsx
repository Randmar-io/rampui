import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SceneSelector } from './SceneSelector';

const meta: Meta<typeof SceneSelector> = {
  title: 'SceneSelector',
  component: SceneSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function SceneSelectorStory() {
  const [selectedScene, setSelectedScene] = React.useState("Elevate");

  return <SceneSelector selectedScene={selectedScene} setSelectedScene={setSelectedScene} />;
}

export const Primary: Story = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <SceneSelectorStory />
    </div>
  )
};
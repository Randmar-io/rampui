import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VoiceSelector } from './VoiceSelector';

const meta: Meta<typeof VoiceSelector> = {
  title: 'VoiceSelector',
  component: VoiceSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function VoiceSelectorStory() {
  const [selectedVoice, setSelectedVoice] = React.useState<string>("en-US-ElizabethNeural");

  return <VoiceSelector selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />;
}

export const Primary: Story = {
  render: () => (
    <div style={{ width: 800 }}>
      <VoiceSelectorStory />
    </div>
  )
};
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Voice, VoiceSelector } from './VoiceSelector';

const meta: Meta<typeof VoiceSelector> = {
  title: 'VoiceSelector',
  component: VoiceSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function VoiceSelectorStory() {
  const [selectedVoice, setSelectedVoice] = React.useState<Voice>(Voice.Aria);

  return <VoiceSelector selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />;
}

export const Primary: Story = {
  render: () => (
    <div style={{ width: 450 }}>
      <VoiceSelectorStory />
    </div>
  )
};
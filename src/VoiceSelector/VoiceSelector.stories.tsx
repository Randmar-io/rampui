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
  const [selectedVoice, setSelectedVoice] = React.useState<Voice>({ name: "en-US-ElizabethNeural" });

  console.log(selectedVoice);

  return (
    <VoiceSelector
      selectedVoice={selectedVoice}
      setSelectedVoice={setSelectedVoice}
    />
  );
}

export const Primary: Story = {
  render: () => (
    <div style={{ width: 800 }}>
      <VoiceSelectorStory />
    </div>
  )
};
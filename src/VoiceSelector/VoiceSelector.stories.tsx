import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Voice, VoiceSelector } from './VoiceSelector';

const meta: Meta<typeof VoiceSelector> = {
  title: 'VoiceSelector',
  component: VoiceSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function VoiceSelectorStory() {
  const [selectedVoice, setSelectedVoice] = React.useState<Voice>({ name: "en-US-AriaNeural", style: "customerservice" });

  console.log(selectedVoice);

  return (
    <VoiceSelector
      selectedVoice={selectedVoice}
      setSelectedVoice={setSelectedVoice}
    />
  );
}

const VoiceSelectorStoryInModal = () => {
  const [selectedVoice, setSelectedVoice] = React.useState<Voice>({ name: "en-US-AriaNeural", style: "customerservice" });
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal title='Voice Selector' open={open} onClose={() => setOpen(false)} maxWidth="sm">
        <VoiceSelector
          selectedVoice={selectedVoice}
          setSelectedVoice={setSelectedVoice}
          itemColSpan={4}
        />
      </Modal>
    </div>
  );
}

export const Primary: Story = {
  render: () => (
    <div style={{ width: 800 }}>
      <VoiceSelectorStory />
    </div>
  )
};

export const InModal: Story = {
  render: () => <VoiceSelectorStoryInModal />
};
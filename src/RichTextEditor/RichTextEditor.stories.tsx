import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Paper } from '../Paper';
import { RichTextEditor } from './RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Rich Text Editor',
  component: RichTextEditor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function RichTextEditorStory() {
  const [content, setContent] = React.useState<string>('Edit this content');

  console.log(content);

  return (
    <RichTextEditor initialContent='Edit this content' setContent={setContent} />
  );
}

export const Primary: Story = {
  render: () => (
    <Paper style={{ width: 800 }}>
      <RichTextEditorStory />
    </Paper>
  )
};
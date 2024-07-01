import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { Button } from '../Button';
import { red } from '../colors';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal title">
        <div>Modal</div>
      </Modal>
    </>
  )
}

export const WithLongText = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal title" maxWidth='lg'>
        <div style={{ height: '120vh' }}>Modal</div>
      </Modal>
    </>
  )
}

export const ContentOnly = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} flush maxWidth='lg'>
        <div style={{ height: '200px', backgroundColor: red[100], padding: 12 }}>Modal</div>
      </Modal>
    </>
  )
}


export const Primary: Story = {
  render: () => <WithLongText />
};
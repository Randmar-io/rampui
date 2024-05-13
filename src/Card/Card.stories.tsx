import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { ClipboardText } from '@phosphor-icons/react';
import { Button } from '../Button';
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleCard: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Card
        title="Card Example"
        icon={ClipboardText}
        actions={[
          (
            false &&
            <Button color="reseller">
              View
            </Button>
          ),
          (
            true &&
            <Button color="reseller" variant="tertiary">
              View
            </Button>
          ),
          <Button variant="primary" color="reseller">
            View
          </Button>
        ]}
      >
        Some card content
      </Card>

    </div>
  )
};

export const ContrastBackground: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Card
        title="Card Example"
        icon={ClipboardText}
        headerColor='red'
        actions={[
          (
            false &&
            <Button color="reseller">
              View
            </Button>
          ),
          (
            true &&
            <Button color="reseller" variant="tertiary">
              View
            </Button>
          ),
          <Button variant="primary" color="reseller">
            View
          </Button>
        ]}
      >
        Some card content
      </Card>

    </div>
  )
};
import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { ClipboardText } from '@phosphor-icons/react';
import { Button } from '../Button';
import { DocumentCard } from "./DocumentCard";

const meta: Meta<typeof DocumentCard> = {
  title: 'Document Card',
  component: DocumentCard,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderDocumentCard: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <DocumentCard
        title="Order OW9001234154"
        icon={ClipboardText}
        fields={[
          { label: "Order Date", value: "16 April, 2024" },
          { label: "PO Number", value: "SHOP-9974" },
          { label: "Ship To", value: "James Alisson" },
          { label: "Ship to Province", value: "Ontario" },
          { label: "Reseller", value: "Printers Plus" },
          { label: "Total", value: "$1,298.00", renderCondition: 2 < 1 },
          { label: "Carrier", value: "UPS", renderCondition: 2 > 1 },
          { label: "Location", value: "MTL" }
        ]}
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
      />

    </div>
  )
};
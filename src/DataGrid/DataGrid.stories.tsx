import type { Meta, StoryObj } from '@storybook/react';

import { CustomCellRendererProps } from 'ag-grid-react';
import React from 'react';
import { Chip } from '../Chip';
import { Paper } from '../Paper';
import { purple } from '../colors';
import { DataGrid } from './DataGrid';

const meta: Meta<typeof DataGrid> = {
  title: 'Data Grid',
  component: DataGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModelCellRenderer = ({ value }: CustomCellRendererProps) => <Chip label="Opportunity" color={purple} />;

const rowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

const colDefs = [
  { field: "make", resizable: false, },
  { field: "model", resizable: false, cellRenderer: ModelCellRenderer },
  { field: "price", resizable: false, },
  { field: "electric", resizable: false }
];


export const Primary: Story = {
  decorators: [
    (Story) => (
      <Paper padding='0' style={{ height: 240, width: 800 }}>
        <Story />
      </Paper>
    ),
  ],
  args: {
    rowData,
    columnDefs: colDefs,
  }
};
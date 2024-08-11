import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '@mui/material';
import React from 'react';
import { Paper } from '../../Paper';
import { AreaChart } from './AreaChart';

const meta: Meta<typeof AreaChart> = {
  title: 'Area Chart',
  component: AreaChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [(Story) => (
    <Paper style={{ width: 800 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Story />
        </Grid>
      </Grid>
    </Paper>
  )],
  args: {
    data: [
      { Month: 'Jan', Rainfall: 100 },
      { Month: 'Feb', Rainfall: 350 },
      { Month: 'Mar', Rainfall: 200 },
      { Month: 'Apr', Rainfall: 278 },
      { Month: 'May', Rainfall: 189 },
      { Month: 'Jun', Rainfall: 239 },
    ],
    units: "mm",
  },
};
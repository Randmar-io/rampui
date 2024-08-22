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
      { Day: 'Jan', Rainfall: 100 },
      { Day: 'Jan', Rainfall: 350 },
      { Day: 'Jan', Rainfall: 200 },
      { Day: 'Jan', Rainfall: 278 },
      { Day: 'Jan', Rainfall: 189 },
      { Day: 'Feb', Rainfall: 239 },
      { Day: 'Feb', Rainfall: 100 },
      { Day: 'Feb', Rainfall: 350 },
      { Day: 'Feb', Rainfall: 200 },
      { Day: 'Feb', Rainfall: 278 },
      { Day: 'Mar', Rainfall: 189 },
      { Day: 'Mar', Rainfall: 239 },
      { Day: 'Mar', Rainfall: 100 },
      { Day: 'Mar', Rainfall: 350 },
      { Day: 'Mar', Rainfall: 200 },
      { Day: 'Apr', Rainfall: 278 },
      { Day: 'Apr', Rainfall: 189 },
      { Day: 'Apr', Rainfall: 239 },
      { Day: 'Apr', Rainfall: 100 },
      { Day: 'Apr', Rainfall: 350 },
      { Day: 'May', Rainfall: 200 },
      { Day: 'May', Rainfall: 278 },
      { Day: 'May', Rainfall: 189 },
      { Day: 'May', Rainfall: 239 },
      { Day: 'May', Rainfall: 100 },
      { Day: 'Jun', Rainfall: 350 },
      { Day: 'Jun', Rainfall: 200 },
      { Day: 'Jun', Rainfall: 278 },
      { Day: 'Jun', Rainfall: 189 },
      { Day: 'Jun', Rainfall: 239 },
    ],
    units: "mm",
  },
};
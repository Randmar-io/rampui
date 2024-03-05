import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { Paper } from './Paper';

describe('<Paper />', () => {
  it('renders with correct text', () => {
    const buttonText = 'Paper content';
    const { getByText } = render(<Paper>{buttonText}</Paper>);
    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
  });
});
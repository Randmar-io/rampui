import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('<Button />', () => {
  it('renders with correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
  });
});
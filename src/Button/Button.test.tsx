import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { Provider } from '../Provider';
import { Button } from './Button';

describe('<Button />', () => {
  it('renders with correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(
      <Provider>
        <Button>{buttonText}</Button>
      </Provider>
    );
    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
  });
});
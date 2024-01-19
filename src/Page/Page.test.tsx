import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { Page } from './Page';

describe('<Page />', () => {
  it('renders itself and children correctly', () => {
    const children = <div data-testid="content">Content</div>;
    const { getByTestId } = render(
      <Page heading="Example page" data-testid="Page">
        {children}
      </Page>
    );

    const page = getByTestId('Page');
    const contentElement = getByTestId('content');

    expect(page).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
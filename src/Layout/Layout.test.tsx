import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { Layout } from './Layout';

describe('<Layout />', () => {
  const child1 = <div data-testid="child1">Child 1 content</div>;
  const child2 = <div data-testid="child2">Child 2 content</div>;

  it('renders itself and content correctly', () => {
    const { getByTestId } = render(
      <Layout data-testid="layout">
        <Layout.Section span="half">{child1}</Layout.Section>
        <Layout.Section span="half">{child2}</Layout.Section>
      </Layout>
    );

    const layoutElement = getByTestId('layout');
    const childElement1 = getByTestId('child1');
    const childElement2 = getByTestId('child2');

    expect(layoutElement).toBeInTheDocument();
    expect(childElement1).toBeInTheDocument();
    expect(childElement2).toBeInTheDocument();
  });
});
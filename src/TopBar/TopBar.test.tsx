import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { TopBar } from '../TopBar/TopBar';

describe('<AppShell />', () => {
  const searchBar = <div data-testid="searchBar">Search Bar</div>;
  const rightMenu = <div data-testid="rightMenu">Right menu</div>;

  it('renders children correctly', () => {
    const { getByTestId } = render(
      <TopBar
        searchBar={searchBar}
        rightMenu={rightMenu}
      />
    );

    const searchElement = getByTestId('searchBar');
    const menuElement = getByTestId('rightMenu');

    expect(searchElement).toBeInTheDocument();
    expect(menuElement).toBeInTheDocument();
  });
});
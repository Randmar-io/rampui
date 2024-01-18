import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { NavMenu } from './NavMenu';

describe('<NavMenu />', () => {
  it('renders menu items correctly', () => {
    const menuItems = [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Contact' },
    ];

    const { getByText } = render(<NavMenu menuItems={menuItems} />);

    menuItems.forEach((menuItem) => {
      const menuItemElement = getByText(menuItem.label);
      expect(menuItemElement).toBeInTheDocument();
    });
  });
});
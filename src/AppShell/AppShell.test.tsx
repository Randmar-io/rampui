import { House, Notebook, Users } from "@phosphor-icons/react";
import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { AppShell } from './AppShell';

describe('<AppShell />', () => {
  const menuItems = [
    {
      icon: House,
      label: "Home",
      selected: true
    },
    {
      icon: Users,
      label: "Users"
    },
    {
      icon: Notebook,
      label: "Logs"
    },
  ]
  const children = <div data-testid="content">Content</div>;

  it('renders itself and content correctly', () => {
    const { getByTestId } = render(
      <AppShell menuItems={menuItems} data-testid="appShell">
        {children}
      </AppShell>
    );

    const appShell = getByTestId('appShell');
    const contentElement = getByTestId('content');

    expect(appShell).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('fills the whole page', () => {
    const { getByTestId } = render(
      <AppShell menuItems={menuItems} data-testid="appShell">
        {children}
      </AppShell>
    );

    const appShell = getByTestId('appShell');

    expect(appShell).toHaveStyle({
      height: '100vh',
      width: '100vw',
    });
  });
});
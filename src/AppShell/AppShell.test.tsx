import { House, Notebook, Users } from "@phosphor-icons/react";
import { render } from '@testing-library/react';
import React from "react";
import { describe, expect, it } from 'vitest';
import { NavMenu } from '../NavMenu/NavMenu';
import { TopBar } from '../TopBar/TopBar';
import { AppShell } from './AppShell';

describe('<AppShell />', () => {
  const topBar = <TopBar data-testid="topBar" />;
  const navMenu = (
    <NavMenu
      data-testid="navMenu"
      menuItems={[
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

      ]}
    />
  );
  const children = <div data-testid="content">Content</div>;

  it('renders itself and elements correctly', () => {
    const { getByTestId } = render(
      <AppShell topBar={topBar} navMenu={navMenu} data-testid="appShell">
        {children}
      </AppShell>
    );

    const appShell = getByTestId('appShell');
    const contentElement = getByTestId('content');
    const navMenuElement = getByTestId('navMenu');
    const topBarElement = getByTestId('topBar');

    expect(appShell).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(navMenuElement).toBeInTheDocument();
    expect(topBarElement).toBeInTheDocument();
  });

  it('fills the whole page', () => {
    const { getByTestId } = render(
      <AppShell topBar={topBar} navMenu={navMenu} data-testid="appShell">
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
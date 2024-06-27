import { Stack } from "@mui/system";
import { Airplane, Factory, Headset, House, Notebook, Plugs, ShoppingBagOpen, Storefront, Users, Warehouse } from "@phosphor-icons/react";
import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { Button } from '../Button';
import { EducationWithProps } from "../Education/Education.stories";
import { Page } from '../Page';
import { SearchBar } from "../SearchBar";
import { Select } from "../Select";
import { AppShell } from './AppShell';

const meta: Meta<typeof AppShell> = {
  title: 'App Shell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AppShellWithItems = () => {
  const [selected, setSelected] = React.useState<string>('0');

  const logo = (
    <svg width="107" height="24" viewBox="0 0 116 26" fill="red" xmlns="http://www.w3.org/2000/svg">
      <path d="M115.388 12.2535H114.414C112.638 12.2535 111.594 13.3582 111.594 15.3339V20.2664H109.113V10.1349H111.376L111.517 11.3111C112.119 10.0764 113.85 9.72547 115.369 10.0764V12.26H115.388V12.2535Z" fill="#fff" />
      <path d="M98.1865 17.3744C98.1865 15.3988 99.6478 14.333 101.897 14.1445L104.75 13.9106V13.6766C104.75 12.2794 103.904 11.74 102.686 11.74C101.327 11.74 100.539 12.3769 100.552 13.4297H98.4429C98.4301 11.2461 100.205 9.79688 102.801 9.79688C105.621 9.79688 107.16 11.3956 107.16 14.099V20.2663H104.993L104.807 18.7716C104.378 19.8179 103.186 20.5457 101.609 20.5457C99.462 20.5457 98.1865 19.2655 98.1865 17.3744ZM104.769 16.1656V15.6262L102.692 15.8147C101.231 15.9577 100.699 16.4516 100.699 17.2704C100.699 18.1542 101.301 18.6546 102.417 18.6546C103.481 18.6546 104.769 18.0567 104.769 16.1656Z" fill="#fff" />
      <path d="M81.2324 20.286V10.122H83.4949L83.6103 11.2722C84.1999 10.3689 85.2574 9.81653 86.4303 9.81653C88.0903 9.81653 89.1799 10.5574 89.7439 11.7531C90.231 10.5639 91.4232 9.81653 92.9422 9.81653C95.3777 9.81653 96.6531 11.2982 96.6531 13.6443V20.2925H94.2625V14.2292C94.2625 12.7864 93.487 12.0326 92.3012 12.0326C91.1283 12.0326 90.1926 12.8189 90.1926 14.4761V20.2925H87.7827V14.2292C87.7827 12.7864 87.0072 12.0326 85.8343 12.0326C84.6614 12.0326 83.7 12.8189 83.7 14.4631V20.3119H81.2324V20.286Z" fill="#fff" />
      <path d="M68.3818 15.2364C68.3818 12.065 70.2021 9.80993 73.2272 9.80993C74.6309 9.80993 75.9063 10.4208 76.5344 11.4411V4.96838H78.9443V20.2664H76.7395L76.5793 18.6677C75.9768 19.8569 74.586 20.5458 73.0991 20.5458C70.1828 20.5458 68.3818 18.3817 68.3818 15.2364ZM76.4447 15.1519C76.4447 13.3192 75.3551 12.039 73.6246 12.039C71.8749 12.039 70.843 13.3322 70.843 15.1519C70.843 16.952 71.8749 18.2323 73.6246 18.2323C75.3615 18.2323 76.4447 16.9845 76.4447 15.1519Z" fill="#fff" />
      <path d="M57.5186 20.286V10.122H59.8131L60.0118 11.4477C60.6591 10.4014 61.8576 9.81653 63.21 9.81653C65.8186 9.81653 67.0107 11.5062 67.0107 14.0342V20.286H64.5624V14.6321C64.5624 12.4485 63.2997 12.1041 62.4537 12.1041C61.3769 12.1041 60.0054 12.702 60.0054 14.8205V20.286H57.5186Z" fill="#fff" />
      <path d="M46.5654 17.3744C46.5654 15.3988 48.0267 14.333 50.2764 14.1445L53.1285 13.9106V13.6766C53.1285 12.2794 52.2825 11.74 51.0647 11.74C49.706 11.74 48.9176 12.3769 48.9305 13.4297H46.8218C46.809 11.2461 48.5844 9.79688 51.1801 9.79688C54.0002 9.79688 55.5384 11.3956 55.5384 14.099V20.2663H53.3913L53.2054 18.7716C52.776 19.8179 51.5839 20.5457 50.0072 20.5457C47.8409 20.5457 46.5654 19.2655 46.5654 17.3744ZM53.1606 16.1656V15.6262L51.0712 15.8147C49.6098 15.9577 49.0779 16.4516 49.0779 17.2704C49.0779 18.1542 49.6803 18.6546 50.7955 18.6546C51.8595 18.6546 53.1606 18.0567 53.1606 16.1656Z" fill="#fff" />
      <path d="M34.4131 20.2859V5.24792H40.1045C43.6296 5.26092 45.4499 6.95059 45.4499 9.9465C45.4499 12.0391 44.4756 13.5663 42.7964 14.2097L45.5332 20.3054H42.6105L40.175 14.6516H36.996V20.3054H34.4195V20.2859H34.4131ZM37.0088 12.312H40.1045C41.9248 12.312 42.7131 11.3112 42.7131 9.927C42.7131 8.57527 41.8991 7.58746 40.1045 7.58746H37.0088V12.312Z" fill="#fff" />
      <path d="M25.6414 20.7987H20.5117V26H23.6414C24.746 26 25.6414 25.1045 25.6414 24V20.7987Z" fill="#fff" />
      <path d="M25.6416 10.4087V15.5975H15.3762V26H10.2588V10.4087H25.6416Z" fill="#fff" />
      <path d="M23.6422 0C24.7467 0 25.6422 0.895431 25.6422 2V5.20748H5.12966V26H2C0.89543 26 0 25.1046 0 24V2C0 0.89543 0.895431 0 2 0H23.6422Z" fill="#fff" />
    </svg>
  )

  return (
    <AppShell
      logo={logo}
      searchBar={<SearchBar />}
      menuItems={[
        {
          label: "Home",
          icon: House,
          selected: true
        },
        {
          label: "Users",
          icon: Users,
        },
        {
          label: "Logs",
          icon: Notebook,
        },
        {
          label: "Reseller",
          icon: Storefront,
        },
        {
          label: "Manufacturer",
          icon: Factory,
          hidden: true
        },
        {
          label: "Agency",
          icon: Headset,
        },
        {
          label: "Shopify",
          icon: ShoppingBagOpen,
        },
        {
          label: "Integration",
          icon: Plugs,
        },
        {
          label: "Warehouses",
          icon: Warehouse,
          hidden: true
        },
      ]}
    >
      <Page
        title="Order OW0021453"
        subtitle="Jan 24, 2023 · Delivered"
        primaryAction={<Button variant='primary'>Primary action</Button>}
        secondaryActions={[<Button>Secondary action</Button>]}
        midWidth
      >
        <EducationWithProps />
        <Stack direction="row" spacing={1}>
          <Button
            starticon={Airplane}
            iconOnly={true}
            confirmationDialog={{
              title: "Are you sure?",
              content: "This action cannot be undone",
              onConfirm: async () => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    console.log("Confirmed");
                    resolve();
                  }, 3000);
                });
              }
            }}
          />

          <Select
            options={[
              { value: '0', displayText: 'Zero' },
              { value: '1', displayText: 'One' },
              { value: '2', displayText: 'Two' },
              { value: '3', displayText: 'Three' },
              { value: '4', displayText: 'Four' },
            ]}
            selected={selected}
            setSelected={setSelected}
          />
        </Stack>
      </Page>
    </AppShell>
  )
}

export const Default: Story = {
  render: () => <AppShellWithItems />
};

export const WithoutMenu: Story = {
  render: () => (
    <AppShell>
      <Page
        title="Order OW0021453"
        subtitle="Jan 24, 2023 · Delivered"
        primaryAction={<Button variant='primary'>Primary action</Button>}
        secondaryActions={[<Button>Secondary action</Button>]}
        midWidth
      >
      </Page>
    </AppShell>
  )
};

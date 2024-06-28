import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Search Bar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBarStory = () => {
  const [query, setQuery] = React.useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submit', query);
  }

  return <SearchBar value={query} setValue={setQuery} onSubmit={handleSubmit} />;
}

export const Primary: Story = {
  render: () => <SearchBarStory />
};
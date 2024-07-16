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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`You searched for: ${query}`);
  }

  return <SearchBar value={query} setValue={setQuery} onSubmit={handleSubmit} />;
}

export const Primary: Story = {
  render: () => <SearchBarStory />
};
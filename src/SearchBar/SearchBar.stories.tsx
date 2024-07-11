import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { Button } from '../Button';
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
  const [focusSearchBar, setFocusSearchBar] = useState<() => void>(() => { });

  const handleFocusRequest = useCallback((focusFunction: () => void) => {
    setFocusSearchBar(() => focusFunction);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`You searched for: ${query}`);
  }

  return (
    <div>
      <Button onClick={() => focusSearchBar()}>Focus</Button>
      <SearchBar value={query} setValue={setQuery} onSubmit={handleSubmit} onFocusRequest={handleFocusRequest} />
    </div>
  );
}

export const Primary: Story = {
  render: () => <SearchBarStory />
};
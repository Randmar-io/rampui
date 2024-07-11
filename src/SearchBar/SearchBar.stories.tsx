import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useRef } from 'react';
import { Button } from '../Button';
import { FocusRef, SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Search Bar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBarStory = () => {
  const [query, setQuery] = React.useState<string>('');
  const searchBarFocusRef = useRef<FocusRef>(null);

  const focusSearchBar = useCallback(() => {
    searchBarFocusRef.current?.focus();
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`You searched for: ${query}`);
  }

  return (
    <div>
      <Button onClick={() => focusSearchBar()}>Focus</Button>
      <SearchBar value={query} setValue={setQuery} onSubmit={handleSubmit} focusRef={searchBarFocusRef} />
    </div>
  );
}

export const Primary: Story = {
  render: () => <SearchBarStory />
};
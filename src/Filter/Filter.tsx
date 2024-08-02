import styled from "@emotion/styled";
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import {
  Select as BaseSelect,
  SelectProps,
  SelectRootSlotProps,
  selectClasses,
} from '@mui/base/Select';
import { PlusCircle, XCircle } from '@phosphor-icons/react';
import * as React from 'react';
import { grey } from '../colors';

interface FilterProps {
  filterName: string;
  filters: string[];
  selectedFilters: string[];
  setSelectedFilters: (options: string[]) => void;
}

export default function Filter({ filterName, filters, selectedFilters, setSelectedFilters }: FilterProps) {
  const handleClearAll = () => {
    setSelectedFilters([]);
  };

  return (
    <MultiSelect
      defaultValue={[]}
      filterName={filterName}
      value={selectedFilters}
      onChange={(_, newValues) => setSelectedFilters(newValues)}
      handleClearAll={handleClearAll}
    >
      {filters.map((option) => <Option key={option} value={option}>{option}</Option>)}
    </MultiSelect>
  );
}

interface MultiSelectProps {
  filterName: string;
  handleClearAll: (e: React.MouseEvent) => void;
}

const MultiSelect = React.forwardRef(function CustomMultiSelect(
  props: SelectProps<string, true> & MultiSelectProps,
  ref: React.ForwardedRef<any>,
) {
  const slots: SelectProps<number, true>['slots'] = {
    root: Button,
    listbox: Listbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} multiple ref={ref} slots={slots} />;
});

const Button = React.forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectRootSlotProps<TValue, Multiple> & MultiSelectProps & StyledButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const { ownerState, filterName, handleClearAll, ...other } = props;
  const filtersApplied = Array.isArray(ownerState.value) && ownerState.value.length > 0;

  return (
    <StyledButton
      type="button"
      {...other}
      ref={ref}
      filtersApplied={filtersApplied}
    >
      <span>{filterName}{filtersApplied && <span>{":"} {other.children}</span>}</span>
      {filtersApplied ? <XCircle onClick={handleClearAll} /> : <PlusCircle />}
    </StyledButton>
  );
});

interface StyledButtonProps {
  filtersApplied: boolean;
}

const StyledButton = styled('button', { shouldForwardProp: (prop) => prop !== 'filtersApplied' })<StyledButtonProps>(({ theme, filtersApplied }) => `
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  padding: 4px 32px 4px 10px;
  border-radius: 50px;
  text-align: left;
  line-height: 1.5;
  background: ${filtersApplied ? theme.color[50] : '#fff'};
  border: 1px dashed ${grey[300]};
  border-style: ${filtersApplied ? 'solid' : 'dashed'};
  color: ${filtersApplied ? theme.color[500] : grey[400]};
  border-color: ${filtersApplied ? theme.color[400] : grey[300]};
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    border-color: ${filtersApplied ? theme.color[400] : '#9c9c9c'};
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${theme.color[400]};
    box-shadow: 0 0 0 3px ${theme.color[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 6px;
  }
`);

const Listbox = styled('ul')`
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  margin: 4px 0;
  min-width: 140px;
  max-height: 200px;
  overflow: auto;
  outline: 0px;
  background:#fff;
  color: #545454;
  box-shadow: var(--r-shadow-sm);
  border-radius: var(--r-border-radius-md);
  padding: var(--r-spacing-10);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Option = styled(BaseOption)(({ theme }) => `
  cursor: pointer;
  list-style: none;
  padding: 6px 8px;
  border-radius: 8px;
  transition: border-radius 300ms ease;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.color[50]};
    color: ${theme.color[500]};
  }

  &:focus-visible {
    outline: 3px solid ${theme.color[200]};
  }

  &.${optionClasses.disabled} {
    color: ${grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}):not(.${optionClasses.selected}) {
    background-color: #f8f8f8;
  }
`);

const Popup = styled('div')`
  z-index: 60;
`;
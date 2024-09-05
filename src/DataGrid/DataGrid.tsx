import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import React from 'react';

interface DataGridProps extends AgGridReactProps { };

export function DataGrid({
  suppressRowClickSelection = true,
  pagination = true,
  enableCellTextSelection = true,
  paginationPageSize = 20,
  defaultColDef = { filter: true },
  ...rest
}: DataGridProps) {
  return (
    <AgGridReact
      suppressRowClickSelection={suppressRowClickSelection}
      pagination={pagination}
      enableCellTextSelection={enableCellTextSelection}
      paginationPageSize={paginationPageSize}
      defaultColDef={defaultColDef}
      {...rest}
    />
  );
}
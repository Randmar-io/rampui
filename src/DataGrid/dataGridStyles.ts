import { css } from "@emotion/react";

export const dataGridStyles = css`
  /*
   * This file is a theme downloaded from the AG Grid Theme Builder for AG Grid 32.0.2.
   *
   * See installation docs at https://ag-grid.com/javascript-data-grid/applying-theme-builder-styling-grid/
   */ 

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

  .ag-paging-panel {
    padding: 8px 12px !important;
  }

  .ag-header-cell-filter-button {
    border-radius: 50% !important;
  }

  .ag-filter-condition {
    margin-bottom: 12px !important;
  }

  input.ag-radio-button-input,
  input.ag-checkbox-input {
    cursor: pointer !important;
  }

  input.ag-input-field-input {
    cursor: text;
    border: 1px solid #d9d9d9 !important;
    border-radius: 12px !important;
  }

  input.ag-input-field-input:hover {
    border-color: #b9b9b9 !important;
  }

  input.ag-input-field-input:focus-within {
    border-color: #b93030 !important;
  }

  .ag-ltr .ag-select .ag-picker-field-wrapper {
    border-radius: 12px;
    cursor: pointer;
    border-color: #d9d9d9;
  }

  .ag-ltr .ag-select .ag-picker-field-wrapper:hover {
    border-color: #b9b9b9;
  }

  .ag-simple-filter-body-wrapper>* {
    margin-bottom: 0;
    gap: 0;
  }

  .ag-root-wrapper,
  .ag-measurement-container,
  .ag-apply-theme-variables {
    --ag-background-color: var(--ag-inherited-background-color, #FFFFFF);
    --ag-foreground-color: var(--ag-inherited-foreground-color, #424242);
    --ag-text-color: var(--ag-inherited-text-color, var(--ag-foreground-color));
    --ag-accent-color: var(--ag-inherited-accent-color, #B93030);
    --ag-invalid-color: var(--ag-inherited-invalid-color, #e02525);
    --ag-border-color: var(--ag-inherited-border-color, #1B1B1B1C);
    --ag-wrapper-border: var(--ag-inherited-wrapper-border, none);
    --ag-row-border: var(--ag-inherited-row-border, solid 1px var(--ag-border-color));
    --ag-color-scheme: var(--ag-inherited-color-scheme, light);
    --ag-header-row-border: var(--ag-inherited-header-row-border, var(--ag-row-border));
    --ag-footer-row-border: var(--ag-inherited-footer-row-border, var(--ag-row-border));
    --ag-column-border: var(--ag-inherited-column-border, solid 1px transparent);
    --ag-header-column-border: var(--ag-inherited-header-column-border, none);
    --ag-header-column-border-height: var(--ag-inherited-header-column-border-height, 100%);
    --ag-pinned-column-border: var(--ag-inherited-pinned-column-border, solid 1px var(--ag-border-color));
    --ag-header-column-separator-display: block;
    --ag-header-column-separator-height: 8px;
    --ag-header-column-separator-width: 2px;
    --ag-header-column-separator-color: purple;
    --ag-pinned-row-border: var(--ag-inherited-pinned-row-border, solid 1px var(--ag-border-color));
    --ag-side-panel-border: var(--ag-inherited-side-panel-border, none);
    --ag-font-family: var(--ag-inherited-font-family, Inter);
    --ag-chrome-background-color: var(--ag-inherited-chrome-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 2%));
    --ag-header-background-color: var(--ag-inherited-header-background-color, #FAFAFA);
    --ag-header-font-family: var(--ag-inherited-header-font-family, var(--ag-font-family));
    --ag-header-font-weight: var(--ag-inherited-header-font-weight, 500);
    --ag-header-font-size: var(--ag-inherited-header-font-size, 13px);
    --ag-header-text-color: var(--ag-inherited-header-text-color, #424242);
    --ag-header-cell-hover-background-color: var(--ag-inherited-header-cell-hover-background-color, transparent);
    --ag-header-cell-hover-background-transition-duration: var(--ag-inherited-header-cell-hover-background-transition-duration, 0.2s);
    --ag-cell-text-color: var(--ag-inherited-cell-text-color, var(--ag-text-color));
    --ag-subtle-text-color: var(--ag-inherited-subtle-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 50%));
    --ag-range-selection-border-style: var(--ag-inherited-range-selection-border-style, solid);
    --ag-range-selection-border-color: var(--ag-inherited-range-selection-border-color, var(--ag-accent-color));
    --ag-range-selection-background-color: var(--ag-inherited-range-selection-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 20%));
    --ag-range-selection-chart-background-color: var(--ag-inherited-range-selection-chart-background-color, #0058FF1A);
    --ag-range-selection-chart-category-background-color: var(--ag-inherited-range-selection-chart-category-background-color, #00FF841A);
    --ag-range-selection-highlight-color: var(--ag-inherited-range-selection-highlight-color, color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
    --ag-row-hover-color: var(--ag-inherited-row-hover-color, #F8F8F8);
    --ag-column-hover-color: var(--ag-inherited-column-hover-color, color-mix(in srgb, transparent, var(--ag-accent-color) 5%));
    --ag-selected-row-background-color: var(--ag-inherited-selected-row-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 8%));
    --ag-modal-overlay-background-color: var(--ag-inherited-modal-overlay-background-color, color-mix(in srgb, transparent, var(--ag-background-color) 66%));
    --ag-odd-row-background-color: var(--ag-inherited-odd-row-background-color, var(--ag-background-color));
    --ag-border-radius: var(--ag-inherited-border-radius, 12px);
    --ag-wrapper-border-radius: var(--ag-inherited-wrapper-border-radius, 12px);
    --ag-cell-horizontal-padding: var(--ag-inherited-cell-horizontal-padding, calc(var(--ag-grid-size) * 2 * var(--ag-cell-horizontal-padding-scale)));
    --ag-cell-widget-spacing: var(--ag-inherited-cell-widget-spacing, calc(var(--ag-grid-size) * 1.5));
    --ag-cell-horizontal-padding-scale: var(--ag-inherited-cell-horizontal-padding-scale, 1);
    --ag-row-group-indent-size: var(--ag-inherited-row-group-indent-size, calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size)));
    --ag-value-change-delta-up-color: var(--ag-inherited-value-change-delta-up-color, #43a047);
    --ag-value-change-delta-down-color: var(--ag-inherited-value-change-delta-down-color, #e53935);
    --ag-value-change-value-highlight-background-color: var(--ag-inherited-value-change-value-highlight-background-color, #16a08580);
    --ag-grid-size: var(--ag-inherited-grid-size, 8px);
    --ag-font-size: var(--ag-inherited-font-size, 13px);
    --ag-row-height: var(--ag-inherited-row-height, calc(max(var(--ag-icon-size), var(--ag-font-size)) + var(--ag-grid-size) * 3.5 * var(--ag-row-vertical-padding-scale)));
    --ag-row-vertical-padding-scale: var(--ag-inherited-row-vertical-padding-scale, 0.8);
    --ag-header-height: var(--ag-inherited-header-height, calc(max(var(--ag-icon-size), var(--ag-font-size)) + var(--ag-grid-size) * 4.25 * var(--ag-header-vertical-padding-scale)));
    --ag-header-vertical-padding-scale: var(--ag-inherited-header-vertical-padding-scale, 0.7);
    --ag-popup-shadow: var(--ag-inherited-popup-shadow, #4848480F 0px 0px 0px 1px, #4848480F 0px 1px 2px 0px);
    --ag-dropdown-shadow: var(--ag-inherited-dropdown-shadow, #4848480F 0px 0px 0px 1px, #4848480F 0px 1px 2px 0px);
    --ag-drag-ghost-background-color: var(--ag-inherited-drag-ghost-background-color, var(--ag-background-color));
    --ag-drag-ghost-border: var(--ag-inherited-drag-ghost-border, solid 1px var(--ag-border-color));
    --ag-drag-ghost-shadow: var(--ag-inherited-drag-ghost-shadow, var(--ag-popup-shadow));
    --ag-focus-shadow: var(--ag-inherited-focus-shadow, 0 0 0 3px color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
    --ag-side-bar-panel-width: var(--ag-inherited-side-bar-panel-width, 250px);
    --ag-side-button-selected-border: var(--ag-inherited-side-button-selected-border, solid 1px var(--ag-border-color));
    --ag-side-button-selected-background-color: var(--ag-inherited-side-button-selected-background-color, var(--ag-background-color));
    --ag-side-bar-background-color: var(--ag-inherited-side-bar-background-color, var(--ag-chrome-background-color));
    --ag-header-column-resize-handle-display: var(--ag-inherited-header-column-resize-handle-display, block);
    --ag-header-column-resize-handle-height: var(--ag-inherited-header-column-resize-handle-height, 30%);
    --ag-header-column-resize-handle-width: var(--ag-inherited-header-column-resize-handle-width, 2px);
    --ag-header-column-resize-handle-color: var(--ag-inherited-header-column-resize-handle-color, var(--ag-border-color));
    --ag-widget-container-horizontal-padding: var(--ag-inherited-widget-container-horizontal-padding, calc(var(--ag-grid-size) * 1.5));
    --ag-widget-container-vertical-padding: var(--ag-inherited-widget-container-vertical-padding, calc(var(--ag-grid-size) * 1.5));
    --ag-widget-horizontal-spacing: var(--ag-inherited-widget-horizontal-spacing, calc(var(--ag-grid-size) * 1.5));
    --ag-widget-vertical-spacing: var(--ag-inherited-widget-vertical-spacing, var(--ag-grid-size));
    --ag-list-item-height: var(--ag-inherited-list-item-height, calc(var(--ag-icon-size) + var(--ag-widget-vertical-spacing)));
    --ag-icon-size: var(--ag-inherited-icon-size, 16px);
    --ag-toggle-button-width: var(--ag-inherited-toggle-button-width, 28px);
    --ag-toggle-button-height: var(--ag-inherited-toggle-button-height, 18px);
    --ag-toggle-button-border-width: var(--ag-inherited-toggle-button-border-width, 2px);
    --ag-toggle-button-on-border-color: var(--ag-inherited-toggle-button-on-border-color, var(--ag-accent-color));
    --ag-toggle-button-on-background-color: var(--ag-inherited-toggle-button-on-background-color, var(--ag-accent-color));
    --ag-toggle-button-off-border-color: var(--ag-inherited-toggle-button-off-border-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
    --ag-toggle-button-off-background-color: var(--ag-inherited-toggle-button-off-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
    --ag-toggle-button-switch-border-color: var(--ag-inherited-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color));
    --ag-toggle-button-switch-background-color: var(--ag-inherited-toggle-button-switch-background-color, var(--ag-background-color));
    --ag-checkbox-border-width: var(--ag-inherited-checkbox-border-width, 1px);
    --ag-checkbox-border-radius: var(--ag-inherited-checkbox-border-radius, 6px);
    --ag-checkbox-unchecked-background-color: var(--ag-inherited-checkbox-unchecked-background-color, var(--ag-background-color));
    --ag-checkbox-unchecked-border-color: var(--ag-inherited-checkbox-unchecked-border-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
    --ag-checkbox-checked-background-color: var(--ag-inherited-checkbox-checked-background-color, var(--ag-accent-color));
    --ag-checkbox-checked-border-color: var(--ag-inherited-checkbox-checked-border-color, var(--ag-accent-color));
    --ag-checkbox-checked-shape-image: var(--ag-inherited-checkbox-checked-shape-image, url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%227%22%20fill%3D%22none%22%3E%3Cpath%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.75%22%20d%3D%22M1%203.5%203.5%206l5-5%22%2F%3E%3C%2Fsvg%3E'));
    --ag-checkbox-checked-shape-color: var(--ag-inherited-checkbox-checked-shape-color, var(--ag-background-color));
    --ag-checkbox-indeterminate-background-color: var(--ag-inherited-checkbox-indeterminate-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
    --ag-checkbox-indeterminate-border-color: var(--ag-inherited-checkbox-indeterminate-border-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
    --ag-checkbox-indeterminate-shape-image: var(--ag-inherited-checkbox-indeterminate-shape-image, url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%222%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2210%22%20height%3D%222%22%20fill%3D%22%23000%22%20rx%3D%221%22%2F%3E%3C%2Fsvg%3E'));
    --ag-checkbox-indeterminate-shape-color: var(--ag-inherited-checkbox-indeterminate-shape-color, var(--ag-background-color));
    --ag-radio-checked-shape-image: var(--ag-inherited-radio-checked-shape-image, url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%226%22%20height%3D%226%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E'));
    --ag-menu-border: var(--ag-inherited-menu-border, solid 1px color-mix(in srgb, transparent, var(--ag-foreground-color) 20%));
    --ag-menu-background-color: var(--ag-inherited-menu-background-color, #FFFFFF);
    --ag-menu-text-color: var(--ag-inherited-menu-text-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 95%));
    --ag-menu-shadow: var(--ag-inherited-menu-shadow, 0px 0px 0px 1px #4848480f, 0px 1px 2px 0px #4848480f);
    --ag-menu-separator-color: var(--ag-inherited-menu-separator-color, var(--ag-border-color));
    --ag-set-filter-indent-size: var(--ag-inherited-set-filter-indent-size, var(--ag-icon-size));
    --ag-chart-menu-panel-width: var(--ag-inherited-chart-menu-panel-width, 260px);
    --ag-chart-menu-label-color: var(--ag-inherited-chart-menu-label-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 80%));
    --ag-icon-button-hover-color: var(--ag-inherited-icon-button-hover-color, #F1F1F1);
    --ag-dialog-shadow: var(--ag-inherited-dialog-shadow, var(--ag-popup-shadow));
    --ag-dialog-border: var(--ag-inherited-dialog-border, solid 1px color-mix(in srgb, transparent, var(--ag-foreground-color) 20%));
    --ag-panel-background-color: var(--ag-inherited-panel-background-color, var(--ag-background-color));
    --ag-panel-title-bar-background-color: var(--ag-inherited-panel-title-bar-background-color, var(--ag-header-background-color));
    --ag-panel-title-bar-border: var(--ag-inherited-panel-title-bar-border, solid 1px var(--ag-border-color));
    --ag-column-select-indent-size: var(--ag-inherited-column-select-indent-size, var(--ag-icon-size));
    --ag-tool-panel-separator-border: var(--ag-inherited-tool-panel-separator-border, solid 1px var(--ag-border-color));
    --ag-tooltip-background-color: var(--ag-inherited-tooltip-background-color, var(--ag-chrome-background-color));
    --ag-tooltip-text-color: var(--ag-inherited-tooltip-text-color, var(--ag-text-color));
    --ag-tooltip-border: var(--ag-inherited-tooltip-border, solid 1px var(--ag-border-color));
    --ag-column-drop-cell-background-color: var(--ag-inherited-column-drop-cell-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 7%));
    --ag-column-drop-cell-border: var(--ag-inherited-column-drop-cell-border, solid 1px color-mix(in srgb, transparent, var(--ag-foreground-color) 13%));
    --ag-select-cell-background-color: var(--ag-inherited-select-cell-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 7%));
    --ag-select-cell-border: var(--ag-inherited-select-cell-border, solid 1px color-mix(in srgb, transparent, var(--ag-foreground-color) 13%));
    --ag-advanced-filter-builder-button-bar-border: var(--ag-inherited-advanced-filter-builder-button-bar-border, solid 1px var(--ag-border-color));
    --ag-advanced-filter-builder-indent-size: var(--ag-inherited-advanced-filter-builder-indent-size, calc(var(--ag-grid-size) * 2 + var(--ag-icon-size)));
    --ag-advanced-filter-builder-join-pill-color: var(--ag-inherited-advanced-filter-builder-join-pill-color, #f08e8d);
    --ag-advanced-filter-builder-column-pill-color: var(--ag-inherited-advanced-filter-builder-column-pill-color, #a6e194);
    --ag-advanced-filter-builder-option-pill-color: var(--ag-inherited-advanced-filter-builder-option-pill-color, #f3c08b);
    --ag-advanced-filter-builder-value-pill-color: var(--ag-inherited-advanced-filter-builder-value-pill-color, #85c0e4);
    --ag-filter-tool-panel-group-indent: var(--ag-inherited-filter-tool-panel-group-indent, var(--ag-grid-size));
    --ag-icon-button-hover-background-color: var(--ag-inherited-icon-button-hover-background-color, #FF0000);
    --ag-row-loading-skeleton-effect-color: var(--ag-inherited-row-loading-skeleton-effect-color, rgba(66, 66, 66, 0.2));
    --ag-tab-bar-background-color: var(--ag-inherited-tab-bar-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 5%));
    --ag-tab-bar-horizontal-padding: var(--ag-inherited-tab-bar-horizontal-padding, 0);
    --ag-tab-bar-top-padding: var(--ag-inherited-tab-bar-top-padding, 0);
    --ag-tab-background-color: var(--ag-inherited-tab-background-color, transparent);
    --ag-tab-text-color: var(--ag-inherited-tab-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 70%));
    --ag-tab-horizontal-padding: var(--ag-inherited-tab-horizontal-padding, calc(var(--ag-grid-size)));
    --ag-tab-top-padding: var(--ag-inherited-tab-top-padding, calc(var(--ag-grid-size)));
    --ag-tab-bottom-padding: var(--ag-inherited-tab-bottom-padding, calc(var(--ag-grid-size)));
    --ag-tab-spacing: var(--ag-inherited-tab-spacing, 0);
    --ag-tab-hover-background-color: var(--ag-inherited-tab-hover-background-color, var(--ag-tab-background-color));
    --ag-tab-hover-text-color: var(--ag-inherited-tab-hover-text-color, var(--ag-text-color));
    --ag-tab-selected-background-color: var(--ag-inherited-tab-selected-background-color, var(--ag-background-color));
    --ag-tab-selected-text-color: var(--ag-inherited-tab-selected-text-color, var(--ag-text-color));
    --ag-tab-selected-border-width: var(--ag-inherited-tab-selected-border-width, 1px);
    --ag-tab-selected-border-color: var(--ag-inherited-tab-selected-border-color, var(--ag-border-color));
    --ag-tab-selected-underline-color: var(--ag-inherited-tab-selected-underline-color, transparent);
    --ag-tab-selected-underline-width: var(--ag-inherited-tab-selected-underline-width, 0);
    --ag-tab-selected-underline-transition-duration: var(--ag-inherited-tab-selected-underline-transition-duration, 0);
    --ag-tab-bar-border: var(--ag-inherited-tab-bar-border, solid 1px var(--ag-border-color));
    --ag-input-background-color: var(--ag-inherited-input-background-color, var(--ag-background-color));
    --ag-input-border: var(--ag-inherited-input-border, solid 1px var(--ag-border-color));
    --ag-input-border-radius: var(--ag-inherited-input-border-radius, var(--ag-border-radius));
    --ag-input-text-color: var(--ag-inherited-input-text-color, var(--ag-text-color));
    --ag-input-padding-start: var(--ag-inherited-input-padding-start, var(--ag-grid-size));
    --ag-input-height: var(--ag-inherited-input-height, calc(max(var(--ag-icon-size), var(--ag-font-size)) + var(--ag-grid-size) * 2));
    --ag-input-focus-background-color: var(--ag-inherited-input-focus-background-color, var(--ag-input-background-color));
    --ag-input-focus-border: var(--ag-inherited-input-focus-border, solid 1px var(--ag-accent-color));
    --ag-input-focus-shadow: var(--ag-inherited-input-focus-shadow, var(--ag-focus-shadow));
    --ag-input-focus-text-color: var(--ag-inherited-input-focus-text-color, var(--ag-input-text-color));
    --ag-input-disabled-background-color: var(--ag-inherited-input-disabled-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 6%));
    --ag-input-disabled-border: var(--ag-inherited-input-disabled-border, var(--ag-input-border));
    --ag-input-disabled-text-color: var(--ag-inherited-input-disabled-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 50%));
    --ag-input-invalid-background-color: var(--ag-inherited-input-invalid-background-color, var(--ag-input-background-color));
    --ag-input-invalid-border: var(--ag-inherited-input-invalid-border, solid 1px var(--ag-invalid-color));
    --ag-input-invalid-text-color: var(--ag-inherited-input-invalid-text-color, var(--ag-input-text-color));
  }

  :has(> .ag-root-wrapper) {
    --ag-inherited-background-color: var(--ag-background-color);
    --ag-inherited-foreground-color: var(--ag-foreground-color);
    --ag-inherited-text-color: var(--ag-text-color);
    --ag-inherited-accent-color: var(--ag-accent-color);
    --ag-inherited-invalid-color: var(--ag-invalid-color);
    --ag-inherited-border-color: var(--ag-border-color);
    --ag-inherited-wrapper-border: var(--ag-wrapper-border);
    --ag-inherited-row-border: var(--ag-row-border);
    --ag-inherited-color-scheme: var(--ag-color-scheme);
    --ag-inherited-header-row-border: var(--ag-header-row-border);
    --ag-inherited-footer-row-border: var(--ag-footer-row-border);
    --ag-inherited-column-border: var(--ag-column-border);
    --ag-inherited-header-column-border: var(--ag-header-column-border);
    --ag-inherited-header-column-border-height: var(--ag-header-column-border-height);
    --ag-inherited-pinned-column-border: var(--ag-pinned-column-border);
    --ag-inherited-pinned-row-border: var(--ag-pinned-row-border);
    --ag-inherited-side-panel-border: var(--ag-side-panel-border);
    --ag-inherited-font-family: var(--ag-font-family);
    --ag-inherited-chrome-background-color: var(--ag-chrome-background-color);
    --ag-inherited-header-background-color: var(--ag-header-background-color);
    --ag-inherited-header-font-family: var(--ag-header-font-family);
    --ag-inherited-header-font-weight: var(--ag-header-font-weight);
    --ag-inherited-header-font-size: var(--ag-header-font-size);
    --ag-inherited-header-text-color: var(--ag-header-text-color);
    --ag-inherited-header-cell-hover-background-color: var(--ag-header-cell-hover-background-color);
    --ag-inherited-header-cell-hover-background-transition-duration: var(--ag-header-cell-hover-background-transition-duration);
    --ag-inherited-cell-text-color: var(--ag-cell-text-color);
    --ag-inherited-subtle-text-color: var(--ag-subtle-text-color);
    --ag-inherited-range-selection-border-style: var(--ag-range-selection-border-style);
    --ag-inherited-range-selection-border-color: var(--ag-range-selection-border-color);
    --ag-inherited-range-selection-background-color: var(--ag-range-selection-background-color);
    --ag-inherited-range-selection-chart-background-color: var(--ag-range-selection-chart-background-color);
    --ag-inherited-range-selection-chart-category-background-color: var(--ag-range-selection-chart-category-background-color);
    --ag-inherited-range-selection-highlight-color: var(--ag-range-selection-highlight-color);
    --ag-inherited-row-hover-color: var(--ag-row-hover-color);
    --ag-inherited-column-hover-color: var(--ag-column-hover-color);
    --ag-inherited-selected-row-background-color: var(--ag-selected-row-background-color);
    --ag-inherited-modal-overlay-background-color: var(--ag-modal-overlay-background-color);
    --ag-inherited-odd-row-background-color: var(--ag-odd-row-background-color);
    --ag-inherited-border-radius: var(--ag-border-radius);
    --ag-inherited-wrapper-border-radius: var(--ag-wrapper-border-radius);
    --ag-inherited-cell-horizontal-padding: var(--ag-cell-horizontal-padding);
    --ag-inherited-cell-widget-spacing: var(--ag-cell-widget-spacing);
    --ag-inherited-cell-horizontal-padding-scale: var(--ag-cell-horizontal-padding-scale);
    --ag-inherited-row-group-indent-size: var(--ag-row-group-indent-size);
    --ag-inherited-value-change-delta-up-color: var(--ag-value-change-delta-up-color);
    --ag-inherited-value-change-delta-down-color: var(--ag-value-change-delta-down-color);
    --ag-inherited-value-change-value-highlight-background-color: var(--ag-value-change-value-highlight-background-color);
    --ag-inherited-grid-size: var(--ag-grid-size);
    --ag-inherited-font-size: var(--ag-font-size);
    --ag-inherited-row-height: var(--ag-row-height);
    --ag-inherited-row-vertical-padding-scale: var(--ag-row-vertical-padding-scale);
    --ag-inherited-header-height: var(--ag-header-height);
    --ag-inherited-header-vertical-padding-scale: var(--ag-header-vertical-padding-scale);
    --ag-inherited-popup-shadow: var(--ag-popup-shadow);
    --ag-inherited-dropdown-shadow: var(--ag-dropdown-shadow);
    --ag-inherited-drag-ghost-background-color: var(--ag-drag-ghost-background-color);
    --ag-inherited-drag-ghost-border: var(--ag-drag-ghost-border);
    --ag-inherited-drag-ghost-shadow: var(--ag-drag-ghost-shadow);
    --ag-inherited-focus-shadow: var(--ag-focus-shadow);
    --ag-inherited-side-bar-panel-width: var(--ag-side-bar-panel-width);
    --ag-inherited-side-button-selected-border: var(--ag-side-button-selected-border);
    --ag-inherited-side-button-selected-background-color: var(--ag-side-button-selected-background-color);
    --ag-inherited-side-bar-background-color: var(--ag-side-bar-background-color);
    --ag-inherited-header-column-resize-handle-display: var(--ag-header-column-resize-handle-display);
    --ag-inherited-header-column-resize-handle-height: var(--ag-header-column-resize-handle-height);
    --ag-inherited-header-column-resize-handle-width: var(--ag-header-column-resize-handle-width);
    --ag-inherited-header-column-resize-handle-color: var(--ag-header-column-resize-handle-color);
    --ag-inherited-widget-container-horizontal-padding: var(--ag-widget-container-horizontal-padding);
    --ag-inherited-widget-container-vertical-padding: var(--ag-widget-container-vertical-padding);
    --ag-inherited-widget-horizontal-spacing: var(--ag-widget-horizontal-spacing);
    --ag-inherited-widget-vertical-spacing: var(--ag-widget-vertical-spacing);
    --ag-inherited-list-item-height: var(--ag-list-item-height);
    --ag-inherited-icon-size: var(--ag-icon-size);
    --ag-inherited-toggle-button-width: var(--ag-toggle-button-width);
    --ag-inherited-toggle-button-height: var(--ag-toggle-button-height);
    --ag-inherited-toggle-button-border-width: var(--ag-toggle-button-border-width);
    --ag-inherited-toggle-button-on-border-color: var(--ag-toggle-button-on-border-color);
    --ag-inherited-toggle-button-on-background-color: var(--ag-toggle-button-on-background-color);
    --ag-inherited-toggle-button-off-border-color: var(--ag-toggle-button-off-border-color);
    --ag-inherited-toggle-button-off-background-color: var(--ag-toggle-button-off-background-color);
    --ag-inherited-toggle-button-switch-border-color: var(--ag-toggle-button-switch-border-color);
    --ag-inherited-toggle-button-switch-background-color: var(--ag-toggle-button-switch-background-color);
    --ag-inherited-checkbox-border-width: var(--ag-checkbox-border-width);
    --ag-inherited-checkbox-border-radius: var(--ag-checkbox-border-radius);
    --ag-inherited-checkbox-unchecked-background-color: var(--ag-checkbox-unchecked-background-color);
    --ag-inherited-checkbox-unchecked-border-color: var(--ag-checkbox-unchecked-border-color);
    --ag-inherited-checkbox-checked-background-color: var(--ag-checkbox-checked-background-color);
    --ag-inherited-checkbox-checked-border-color: var(--ag-checkbox-checked-border-color);
    --ag-inherited-checkbox-checked-shape-image: var(--ag-checkbox-checked-shape-image);
    --ag-inherited-checkbox-checked-shape-color: var(--ag-checkbox-checked-shape-color);
    --ag-inherited-checkbox-indeterminate-background-color: var(--ag-checkbox-indeterminate-background-color);
    --ag-inherited-checkbox-indeterminate-border-color: var(--ag-checkbox-indeterminate-border-color);
    --ag-inherited-checkbox-indeterminate-shape-image: var(--ag-checkbox-indeterminate-shape-image);
    --ag-inherited-checkbox-indeterminate-shape-color: var(--ag-checkbox-indeterminate-shape-color);
    --ag-inherited-radio-checked-shape-image: var(--ag-radio-checked-shape-image);
    --ag-inherited-menu-border: var(--ag-menu-border);
    --ag-inherited-menu-background-color: var(--ag-menu-background-color);
    --ag-inherited-menu-text-color: var(--ag-menu-text-color);
    --ag-inherited-menu-shadow: var(--ag-menu-shadow);
    --ag-inherited-menu-separator-color: var(--ag-menu-separator-color);
    --ag-inherited-set-filter-indent-size: var(--ag-set-filter-indent-size);
    --ag-inherited-chart-menu-panel-width: var(--ag-chart-menu-panel-width);
    --ag-inherited-chart-menu-label-color: var(--ag-chart-menu-label-color);
    --ag-inherited-icon-button-hover-color: var(--ag-icon-button-hover-color);
    --ag-inherited-dialog-shadow: var(--ag-dialog-shadow);
    --ag-inherited-dialog-border: var(--ag-dialog-border);
    --ag-inherited-panel-background-color: var(--ag-panel-background-color);
    --ag-inherited-panel-title-bar-background-color: var(--ag-panel-title-bar-background-color);
    --ag-inherited-panel-title-bar-border: var(--ag-panel-title-bar-border);
    --ag-inherited-column-select-indent-size: var(--ag-column-select-indent-size);
    --ag-inherited-tool-panel-separator-border: var(--ag-tool-panel-separator-border);
    --ag-inherited-tooltip-background-color: var(--ag-tooltip-background-color);
    --ag-inherited-tooltip-text-color: var(--ag-tooltip-text-color);
    --ag-inherited-tooltip-border: var(--ag-tooltip-border);
    --ag-inherited-column-drop-cell-background-color: var(--ag-column-drop-cell-background-color);
    --ag-inherited-column-drop-cell-border: var(--ag-column-drop-cell-border);
    --ag-inherited-select-cell-background-color: var(--ag-select-cell-background-color);
    --ag-inherited-select-cell-border: var(--ag-select-cell-border);
    --ag-inherited-advanced-filter-builder-button-bar-border: var(--ag-advanced-filter-builder-button-bar-border);
    --ag-inherited-advanced-filter-builder-indent-size: var(--ag-advanced-filter-builder-indent-size);
    --ag-inherited-advanced-filter-builder-join-pill-color: var(--ag-advanced-filter-builder-join-pill-color);
    --ag-inherited-advanced-filter-builder-column-pill-color: var(--ag-advanced-filter-builder-column-pill-color);
    --ag-inherited-advanced-filter-builder-option-pill-color: var(--ag-advanced-filter-builder-option-pill-color);
    --ag-inherited-advanced-filter-builder-value-pill-color: var(--ag-advanced-filter-builder-value-pill-color);
    --ag-inherited-filter-tool-panel-group-indent: var(--ag-filter-tool-panel-group-indent);
    --ag-inherited-icon-button-hover-background-color: var(--ag-icon-button-hover-background-color);
    --ag-inherited-row-loading-skeleton-effect-color: var(--ag-row-loading-skeleton-effect-color);
    --ag-inherited-tab-bar-background-color: var(--ag-tab-bar-background-color);
    --ag-inherited-tab-bar-horizontal-padding: var(--ag-tab-bar-horizontal-padding);
    --ag-inherited-tab-bar-top-padding: var(--ag-tab-bar-top-padding);
    --ag-inherited-tab-background-color: var(--ag-tab-background-color);
    --ag-inherited-tab-text-color: var(--ag-tab-text-color);
    --ag-inherited-tab-horizontal-padding: var(--ag-tab-horizontal-padding);
    --ag-inherited-tab-top-padding: var(--ag-tab-top-padding);
    --ag-inherited-tab-bottom-padding: var(--ag-tab-bottom-padding);
    --ag-inherited-tab-spacing: var(--ag-tab-spacing);
    --ag-inherited-tab-hover-background-color: var(--ag-tab-hover-background-color);
    --ag-inherited-tab-hover-text-color: var(--ag-tab-hover-text-color);
    --ag-inherited-tab-selected-background-color: var(--ag-tab-selected-background-color);
    --ag-inherited-tab-selected-text-color: var(--ag-tab-selected-text-color);
    --ag-inherited-tab-selected-border-width: var(--ag-tab-selected-border-width);
    --ag-inherited-tab-selected-border-color: var(--ag-tab-selected-border-color);
    --ag-inherited-tab-selected-underline-color: var(--ag-tab-selected-underline-color);
    --ag-inherited-tab-selected-underline-width: var(--ag-tab-selected-underline-width);
    --ag-inherited-tab-selected-underline-transition-duration: var(--ag-tab-selected-underline-transition-duration);
    --ag-inherited-tab-bar-border: var(--ag-tab-bar-border);
    --ag-inherited-input-background-color: var(--ag-input-background-color);
    --ag-inherited-input-border: var(--ag-input-border);
    --ag-inherited-input-border-radius: var(--ag-input-border-radius);
    --ag-inherited-input-text-color: var(--ag-input-text-color);
    --ag-inherited-input-padding-start: var(--ag-input-padding-start);
    --ag-inherited-input-height: var(--ag-input-height);
    --ag-inherited-input-focus-background-color: var(--ag-input-focus-background-color);
    --ag-inherited-input-focus-border: var(--ag-input-focus-border);
    --ag-inherited-input-focus-shadow: var(--ag-input-focus-shadow);
    --ag-inherited-input-focus-text-color: var(--ag-input-focus-text-color);
    --ag-inherited-input-disabled-background-color: var(--ag-input-disabled-background-color);
    --ag-inherited-input-disabled-border: var(--ag-input-disabled-border);
    --ag-inherited-input-disabled-text-color: var(--ag-input-disabled-text-color);
    --ag-inherited-input-invalid-background-color: var(--ag-input-invalid-background-color);
    --ag-inherited-input-invalid-border: var(--ag-input-invalid-border);
    --ag-inherited-input-invalid-text-color: var(--ag-input-invalid-text-color);
  }


  /* Part core/part */
  :where([class^=ag-]),
  :where([class^=ag-]):after,
  :where([class^=ag-]):before,
  :where([class^=ag-]):focus,
  :where([class^=ag-]):focus-within {
    box-sizing: border-box;
    outline: none
  }

  :where([class^=ag-]):where(button),
  :where([class^=ag-]):where(input),
  :where([class^=ag-]):where(textarea) {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0
  }

  :where([class^=ag-]):where(button) {
    font-weight: inherit
  }

  :where([class^=ag-])::-ms-clear {
    display: none
  }

  ag-grid,
  ag-grid-angular,
  ag-grid-aurelia,
  ag-grid-ng2,
  ag-grid-polymer {
    display: block
  }

  .ag-aria-description-container {
    border: 0;
    z-index: 9999;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
  }

  .ag-hidden {
    display: none !important
  }

  .ag-invisible {
    visibility: hidden !important
  }

  .ag-unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-selectable {
    -webkit-user-select: text;
    -moz-user-select: text;
    user-select: text
  }

  .ag-tabs-header {
    display: flex
  }

  .ag-tab {
    cursor: pointer;
    position: relative
  }

  .ag-tab-guard {
    display: block;
    height: 0;
    position: absolute;
    width: 0
  }

  .ag-virtual-list-viewport .ag-tab-guard {
    position: sticky
  }

  .ag-tab-guard-top {
    top: 1px
  }

  .ag-tab-guard-bottom {
    bottom: 1px
  }

  .ag-shake-left-to-right {
    animation-direction: alternate;
    animation-duration: .2s;
    animation-iteration-count: infinite;
    animation-name: ag-shake-left-to-right
  }

  @keyframes ag-shake-left-to-right {
    0% {
      padding-left: 6px;
      padding-right: 2px
    }

    to {
      padding-left: 2px;
      padding-right: 6px
    }
  }

  .ag-watermark {
    bottom: 20px;
    color: #9b9b9b;
    opacity: .7;
    position: absolute;
    right: 25px;
    transition: opacity 1s ease-out 3s
  }

  .ag-watermark:before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDkiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiM5QjlCOUIiIGQ9Ik0xOTIuOTkzIDIzLjY1OHYtNy45NDZoLTEzLjU0MWwtNy45NDcgNy45NDZ6TTIwOC4yNSAzLjk1aC0xNi45NzRsLTguMDEgNy45NDdoMjQuOTg0ek0xNjMuNjIyIDMxLjYwNWw0LjA2OS00LjA2OWgxMy43MzJ2Ny45NDdoLTE3LjgwMXoiLz48cGF0aCBmaWxsPSIjOUI5QjlCIiBkPSJNMTY2LjYxIDE5Ljc4aDguNzczbDguMDEtNy45NDZIMTY2LjYxek0xNTcuMDExIDMxLjYwNWg2LjYxMWw3Ljg4My03Ljk0N2gtMTQuNDk0ek0xOTEuMjc2IDMuOTVsLTQuMDY4IDQuMDdIMTYxLjI3Vi4wNzJoMzAuMDA2ek0yMC44NCAzMC4yMDZIOC4zNzhsLTIuMTYyIDUuMzRILjc1TDEyLjI1NyA4LjU5Mmg0Ljc2OEwyOC41MyAzNS41NDZoLTUuNTN6bS0xLjcxNy00LjI2TDE0LjYwOSAxNC45NWwtNC41MTQgMTAuOTk4ek0xMDQuNDM3IDE4LjUwOWMxLjU4OS0yLjM1MiA1LjU5NC0yLjYwNyA3LjI0Ny0yLjYwN3Y0LjU3OGMtMi4wMzQgMC00LjA2OS4wNjMtNS4yNzcuOTUzLTEuMjA3Ljg5LTEuODQzIDIuMDk4LTEuODQzIDMuNTZ2MTAuNTUzaC00Ljk1OVYxNS45MDJoNC43Njh6TTExOS4zNzYgMTUuOTAyaC00Ljk1OHYxOS42NDRoNC45NTh6TTExOS4zNzYgNy4xM2gtNC45NTh2NS44NDhoNC45NTh6TTE0My45NzkgNy4xM3YyOC40MTZoLTQuNzY4bC0uMTI3LTIuOTg4YTguMyA4LjMgMCAwIDEtMi42NyAyLjQ4Yy0xLjA4MS41NzItMi40MTYuODktMy45NDIuODktMS4zMzUgMC0yLjYwNi0uMjU1LTMuNjg3LS43LTEuMTQ0LS41MDgtMi4xNjItMS4xNDQtMi45ODgtMi4wMzRhOS42IDkuNiAwIDAgMS0xLjk3MS0zLjE3OWMtLjUwOC0xLjIwNy0uNjk5LTIuNjA2LS42OTktNC4xMzJzLjI1NC0yLjkyNC42OTktNC4xOTZjLjUwOS0xLjI3MSAxLjE0NS0yLjM1MiAxLjk3MS0zLjI0MnMxLjg0NC0xLjU4OSAyLjk4OC0yLjA5OCAyLjM1Mi0uNzYzIDMuNjg3LS43NjNjMS41MjYgMCAyLjc5Ny4yNTUgMy44NzguODI3czEuOTcxIDEuMzM1IDIuNjcgMi40MTZWNy4xOTNoNC45NTl6bS0xMC40MjYgMjQuNTM4YzEuNjUzIDAgMi45MjQtLjU3MiAzLjk0MS0xLjY1M3MxLjUyNi0yLjU0MyAxLjUyNi00LjMyMy0uNTA5LTMuMTc4LTEuNTI2LTQuMzIyYy0xLjAxNy0xLjA4MS0yLjI4OC0xLjY1My0zLjk0MS0xLjY1My0xLjU5IDAtMi45MjUuNTcyLTMuODc4IDEuNjUzLTEuMDE3IDEuMDgtMS41MjYgMi41NDMtMS41MjYgNC4zMjIgMCAxLjc4LjUwOSAzLjE4IDEuNTI2IDQuMjYgMS4wMTcgMS4xNDQgMi4yODggMS43MTYgMy44NzggMS43MTZNNTcuMjAyIDIwLjM1M0g0NC45MzN2NC4yNTloNi45OTNjLS4xOSAyLjE2MS0xLjAxNyAzLjgxNC0yLjQxNiA1LjE1LTEuMzk4IDEuMjctMy4xNzggMS45MDYtNS40NjcgMS45MDYtMS4yNzEgMC0yLjQ4LS4yNTQtMy40OTYtLjY5OWE3IDcgMCAwIDEtMi43MzQtMS45N2MtLjc2My0uODI3LTEuMzM1LTEuODQ0LTEuNzgtMy4wNTJzLS42MzYtMi40OC0uNjM2LTMuOTQyLjE5LTIuNzMzLjYzNi0zLjk0MWMuMzgxLTEuMjA4IDEuMDE3LTIuMTYyIDEuNzgtMy4wNTIuNzYzLS44MjYgMS42NTMtMS40NjIgMi43MzMtMS45N2E5LjEgOS4xIDAgMCAxIDMuNTYtLjdxNC4wMDUgMCA2LjEwMyAxLjkwN2wzLjMwNi0zLjMwNWMtMi40OC0xLjkwNy01LjY1OC0yLjkyNS05LjQwOS0yLjkyNS0yLjA5NyAwLTQuMDA0LjMxOC01LjcyMSAxLjAxOC0xLjcxNi42OTktMy4xNzkgMS41ODktNC4zODYgMi43OTdBMTIuMSAxMi4xIDAgMCAwIDMxLjIgMTYuMjJjLS42MzUgMS43MTctLjk1MyAzLjYyNC0uOTUzIDUuNjU4cy4zMTggMy45NDIgMS4wMTcgNS42NThjLjcgMS43MTcgMS41OSAzLjE3OSAyLjc5NyA0LjM4N2ExMi4xIDEyLjEgMCAwIDAgNC4zODcgMi43OTdjMS43MTYuNyAzLjYyMyAxLjAxNyA1LjY1NyAxLjAxNyAyLjAzNSAwIDMuODc4LS4zMTggNS41MzEtMS4wMTcgMS42NTMtLjcgMy4wNTItMS41OSA0LjE5Ni0yLjc5N3ExLjcxNi0xLjgxMiAyLjY3LTQuMzg3Yy42MzYtMS43MTYuOTU0LTMuNjIzLjk1NC01LjY1OHYtLjgyNmMtLjE5MS0uMTI3LS4yNTUtLjQ0NS0uMjU1LS43TTk1Ljk4MiAyMC4zNTNoLTEyLjI3djQuMjU5aDYuOTkzYy0uMTkgMi4xNjEtMS4wMTcgMy44MTQtMi40MTYgNS4xNS0xLjM5OCAxLjI3LTMuMTc4IDEuOTA2LTUuNDY3IDEuOTA2LTEuMjcxIDAtMi40OC0uMjU0LTMuNDk2LS42OTlhNyA3IDAgMCAxLTIuNzM0LTEuOTdjLS43NjMtLjgyNy0xLjMzNS0xLjg0NC0xLjc4LTMuMDUycy0uNjM2LTIuNDgtLjYzNi0zLjk0Mi4xOS0yLjczMy42MzYtMy45NDFjLjM4MS0xLjIwOCAxLjAxNy0yLjE2MiAxLjc4LTMuMDUyLjc2My0uODI2IDEuNjUzLTEuNDYyIDIuNzM0LTEuOTdhOS4xIDkuMSAwIDAgMSAzLjU2LS43cTQuMDA1IDAgNi4xMDMgMS45MDdsMy4zMDUtMy4zMDVjLTIuNDc5LTEuOTA3LTUuNjU4LTIuOTI1LTkuNDA4LTIuOTI1LTIuMDk4IDAtNC4wMDUuMzE4LTUuNzIyIDEuMDE4LTEuNzE2LjY5OS0zLjE3OCAxLjU4OS00LjM4NiAyLjc5N2ExMi4xIDEyLjEgMCAwIDAtMi43OTcgNC4zODZjLS42MzYgMS43MTctLjk1NCAzLjYyNC0uOTU0IDUuNjU4cy4zMTggMy45NDIgMS4wMTcgNS42NThjLjcgMS43MTcgMS41OSAzLjE3OSAyLjc5NyA0LjM4N2ExMi4xIDEyLjEgMCAwIDAgNC4zODcgMi43OTdjMS43MTYuNyAzLjYyMyAxLjAxNyA1LjY1OCAxLjAxNyAyLjAzNCAwIDMuODc4LS4zMTggNS41My0xLjAxNyAxLjY1My0uNyAzLjA1Mi0xLjU5IDQuMTk2LTIuNzk3cTEuNzE4LTEuODEyIDIuNjctNC4zODdjLjYzNi0xLjcxNi45NTQtMy42MjMuOTU0LTUuNjU4di0uODI2Yy0uMTktLjEyNy0uMjU1LS40NDUtLjI1NS0uNyIvPjwvc3ZnPg==);
    background-repeat: no-repeat;
    background-size: 170px 40px;
    content: "";
    display: block;
    height: 40px;
    width: 170px
  }

  .ag-watermark-text {
    font-family: Impact, sans-serif;
    font-size: 19px;
    font-weight: 700;
    opacity: .5
  }

  .ag-ltr .ag-watermark-text {
    padding-left: .7rem
  }

  .ag-rtl .ag-watermark-text {
    padding-right: .7rem
  }

  .ag-root-wrapper-body {
    display: flex;
    flex-direction: row
  }

  .ag-root-wrapper-body.ag-layout-normal {
    flex: 1 1 auto;
    height: 0;
    min-height: 0
  }

  .ag-root {
    display: flex;
    flex-direction: column;
    position: relative
  }

  .ag-root.ag-layout-auto-height,
  .ag-root.ag-layout-normal {
    flex: 1 1 auto;
    overflow: hidden;
    width: 0
  }

  .ag-root.ag-layout-normal {
    height: 100%
  }

  .ag-body-horizontal-scroll-viewport,
  .ag-body-vertical-scroll-viewport,
  .ag-body-viewport,
  .ag-center-cols-viewport,
  .ag-floating-bottom-viewport,
  .ag-floating-top-viewport,
  .ag-header-viewport,
  .ag-sticky-bottom-viewport,
  .ag-sticky-top-viewport,
  .ag-virtual-list-viewport {
    flex: 1 1 auto;
    height: 100%;
    min-width: 0;
    overflow: hidden;
    position: relative
  }

  .ag-body-viewport,
  .ag-center-cols-viewport {
    -ms-overflow-style: none !important;
    scrollbar-width: none !important
  }

  .ag-body-viewport::-webkit-scrollbar,
  .ag-center-cols-viewport::-webkit-scrollbar {
    display: none !important
  }

  .ag-body-viewport {
    display: flex;
    -webkit-overflow-scrolling: touch
  }

  .ag-body-viewport.ag-layout-normal {
    overflow-y: auto
  }

  .ag-center-cols-viewport {
    min-height: 100%;
    overflow-x: auto;
    width: 100%
  }

  .ag-body-horizontal-scroll-viewport {
    overflow-x: scroll
  }

  .ag-body-vertical-scroll-viewport {
    overflow-y: scroll
  }

  .ag-virtual-list-viewport {
    overflow: auto;
    width: 100%
  }

  .ag-body-container,
  .ag-body-horizontal-scroll-container,
  .ag-body-vertical-scroll-container,
  .ag-center-cols-container,
  .ag-floating-bottom-container,
  .ag-floating-bottom-full-width-container,
  .ag-floating-top-container,
  .ag-full-width-container,
  .ag-header-container,
  .ag-pinned-left-cols-container,
  .ag-pinned-right-cols-container,
  .ag-sticky-bottom-container,
  .ag-sticky-top-container,
  .ag-virtual-list-container {
    position: relative
  }

  .ag-floating-bottom-container,
  .ag-floating-top-container,
  .ag-header-container,
  .ag-sticky-bottom-container,
  .ag-sticky-top-container {
    height: 100%;
    white-space: nowrap
  }

  .ag-center-cols-container,
  .ag-pinned-right-cols-container {
    display: block
  }

  .ag-body-horizontal-scroll-container {
    height: 100%
  }

  .ag-body-vertical-scroll-container {
    width: 100%
  }

  .ag-floating-bottom-full-width-container,
  .ag-floating-top-full-width-container,
  .ag-full-width-container,
  .ag-sticky-bottom-full-width-container,
  .ag-sticky-top-full-width-container {
    pointer-events: none;
    position: absolute;
    top: 0
  }

  .ag-ltr .ag-floating-bottom-full-width-container,
  .ag-ltr .ag-floating-top-full-width-container,
  .ag-ltr .ag-full-width-container,
  .ag-ltr .ag-sticky-bottom-full-width-container,
  .ag-ltr .ag-sticky-top-full-width-container {
    left: 0
  }

  .ag-rtl .ag-floating-bottom-full-width-container,
  .ag-rtl .ag-floating-top-full-width-container,
  .ag-rtl .ag-full-width-container,
  .ag-rtl .ag-sticky-bottom-full-width-container,
  .ag-rtl .ag-sticky-top-full-width-container {
    right: 0
  }

  .ag-full-width-container {
    width: 100%
  }

  .ag-floating-bottom-full-width-container,
  .ag-floating-top-full-width-container {
    display: inline-block;
    height: 100%;
    overflow: hidden;
    width: 100%
  }

  .ag-virtual-list-container {
    overflow: hidden
  }

  .ag-body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row !important;
    min-height: 0;
    position: relative
  }

  .ag-body-horizontal-scroll,
  .ag-body-vertical-scroll {
    display: flex;
    min-height: 0;
    min-width: 0;
    position: relative
  }

  .ag-body-horizontal-scroll.ag-scrollbar-invisible,
  .ag-body-vertical-scroll.ag-scrollbar-invisible {
    bottom: 0;
    position: absolute
  }

  .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar,
  .ag-body-vertical-scroll.ag-scrollbar-invisible.ag-apple-scrollbar {
    opacity: 0;
    transition: opacity .4s;
    visibility: hidden
  }

  .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-active,
  .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-scrolling,
  .ag-body-vertical-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-active,
  .ag-body-vertical-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-scrolling {
    opacity: 1;
    visibility: visible
  }

  .ag-body-horizontal-scroll {
    width: 100%
  }

  .ag-body-horizontal-scroll.ag-scrollbar-invisible {
    left: 0;
    right: 0
  }

  .ag-body-vertical-scroll {
    height: 100%
  }

  .ag-body-vertical-scroll.ag-scrollbar-invisible {
    top: 0;
    z-index: 10
  }

  .ag-ltr .ag-body-vertical-scroll.ag-scrollbar-invisible {
    right: 0
  }

  .ag-rtl .ag-body-vertical-scroll.ag-scrollbar-invisible {
    left: 0
  }

  .ag-force-vertical-scroll {
    overflow-y: scroll !important
  }

  .ag-horizontal-left-spacer,
  .ag-horizontal-right-spacer {
    height: 100%;
    min-width: 0;
    overflow-x: scroll
  }

  .ag-horizontal-left-spacer.ag-scroller-corner,
  .ag-horizontal-right-spacer.ag-scroller-corner {
    overflow-x: hidden
  }

  .ag-ltr .ag-column-moving .ag-cell {
    transition: left .2s
  }

  .ag-rtl .ag-column-moving .ag-cell {
    transition: right .2s
  }

  .ag-ltr .ag-column-moving .ag-header-cell {
    transition: left .2s
  }

  .ag-rtl .ag-column-moving .ag-header-cell {
    transition: right .2s
  }

  .ag-ltr .ag-column-moving .ag-header-group-cell {
    transition: left .2s, width .2s
  }

  .ag-rtl .ag-column-moving .ag-header-group-cell {
    transition: right .2s, width .2s
  }

  .ag-row-animation .ag-row {
    transition: transform .4s, top .4s, opacity .2s
  }

  .ag-row-animation .ag-row.ag-after-created {
    transition: transform .4s, top .4s, height .4s, opacity .2s
  }

  .ag-row-no-animation .ag-row {
    transition: none
  }

  .ag-row-loading {
    align-items: center;
    display: flex
  }

  .ag-row-position-absolute {
    position: absolute
  }

  .ag-row-position-relative {
    position: relative
  }

  .ag-full-width-row {
    overflow: hidden;
    pointer-events: all
  }

  .ag-row-inline-editing {
    z-index: 1
  }

  .ag-row-dragging {
    z-index: 2
  }

  .ag-stub-cell {
    align-items: center;
    display: flex
  }

  .ag-cell {
    display: inline-block;
    height: 100%;
    position: absolute;
    white-space: nowrap
  }

  .ag-cell-value {
    flex: 1 1 auto
  }

  .ag-cell-value,
  .ag-group-value {
    overflow: hidden;
    text-overflow: ellipsis
  }

  .ag-cell-wrap-text {
    white-space: normal;
    word-break: break-word
  }

  .ag-sparkline-wrapper {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
  }

  .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    align-items: center;
    height: 100%
  }

  .ag-cell .ag-icon {
    display: inline-block;
    vertical-align: middle
  }

  .ag-popup-child {
    top: 0;
    z-index: 5
  }

  .ag-popup-editor {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-large-text-input {
    display: block
  }

  .ag-floating-top {
    border-bottom: var(--ag-pinned-row-border);
    display: flex;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    width: 100%
  }

  .ag-pinned-left-floating-top,
  .ag-pinned-right-floating-top {
    display: inline-block;
    min-width: 0;
    overflow: hidden;
    position: relative
  }

  .ag-floating-bottom {
    border-top: var(--ag-pinned-row-border);
    display: flex;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    width: 100%
  }

  .ag-pinned-left-floating-bottom,
  .ag-pinned-right-floating-bottom {
    display: inline-block;
    min-width: 0;
    overflow: hidden;
    position: relative
  }

  .ag-sticky-bottom,
  .ag-sticky-top {
    background-color: var(--ag-background-color);
    display: flex;
    position: absolute;
    width: 100%
  }

  .ag-pinned-left-sticky-top,
  .ag-pinned-right-sticky-top {
    height: 100%;
    overflow: hidden;
    position: relative
  }

  .ag-sticky-bottom-full-width-container,
  .ag-sticky-top-full-width-container {
    height: 100%;
    overflow: hidden;
    width: 100%
  }

  .ag-value-slide-out {
    opacity: 1
  }

  .ag-ltr .ag-value-slide-out {
    margin-right: 5px;
    transition: opacity 3s, margin-right 3s
  }

  .ag-rtl .ag-value-slide-out {
    margin-left: 5px;
    transition: opacity 3s, margin-left 3s
  }

  :is(.ag-ltr, .ag-rtl) .ag-value-slide-out {
    transition-timing-function: linear
  }

  .ag-value-slide-out-end {
    opacity: 0
  }

  .ag-ltr .ag-value-slide-out-end {
    margin-right: 10px
  }

  .ag-rtl .ag-value-slide-out-end {
    margin-left: 10px
  }

  .ag-opacity-zero {
    opacity: 0 !important
  }

  .ag-tool-panel-wrapper {
    cursor: default;
    display: flex;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-select-agg-func-item {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
    position: relative
  }

  .ag-select-agg-func-item>* {
    flex: none
  }

  .ag-select-agg-func-item {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-tool-panel-horizontal-resize {
    cursor: ew-resize;
    height: 100%;
    position: absolute;
    top: 0;
    width: 5px;
    z-index: 1
  }

  .ag-details-row {
    width: 100%
  }

  .ag-details-row-fixed-height {
    height: 100%
  }

  .ag-details-grid {
    width: 100%
  }

  .ag-details-grid-fixed-height {
    height: 100%
  }

  .ag-cell-label-container {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    justify-content: space-between;
    width: 100%
  }

  .ag-right-aligned-header .ag-cell-label-container {
    flex-direction: row
  }

  .ag-right-aligned-header .ag-header-cell-text {
    text-align: end
  }

  .ag-column-group-icons {
    display: block
  }

  .ag-column-group-icons>* {
    cursor: pointer
  }

  .ag-pill-select {
    display: flex;
    flex-direction: column
  }

  .ag-pill-select .ag-column-drop-list {
    padding: 0
  }

  .ag-pill-select .ag-select {
    padding-top: var(--ag-grid-size)
  }

  .ag-pill-select .ag-picker-field-wrapper {
    background-color: transparent;
    border: 0
  }

  .ag-pill-select .ag-picker-field-display {
    cursor: pointer
  }

  .ag-ltr {
    direction: ltr
  }

  .ag-ltr .ag-body,
  .ag-ltr .ag-body-horizontal-scroll,
  .ag-ltr .ag-body-viewport,
  .ag-ltr .ag-floating-bottom,
  .ag-ltr .ag-floating-top,
  .ag-ltr .ag-header,
  .ag-ltr .ag-sticky-bottom,
  .ag-ltr .ag-sticky-top {
    flex-direction: row
  }

  .ag-rtl {
    direction: rtl
  }

  .ag-rtl .ag-body,
  .ag-rtl .ag-body-horizontal-scroll,
  .ag-rtl .ag-body-viewport,
  .ag-rtl .ag-floating-bottom,
  .ag-rtl .ag-floating-top,
  .ag-rtl .ag-header,
  .ag-rtl .ag-sticky-bottom,
  .ag-rtl .ag-sticky-top {
    flex-direction: row-reverse
  }

  .ag-rtl .ag-icon-contracted,
  .ag-rtl .ag-icon-expanded,
  .ag-rtl .ag-icon-tree-closed {
    display: block;
    transform: rotate(180deg)
  }

  .ag-measurement-container {
    overflow: hidden;
    visibility: hidden;
    width: 0
  }

  .ag-measurement-container div {
    position: absolute
  }

  .ag-group {
    position: relative;
    width: 100%
  }

  .ag-group-title-bar {
    align-items: center;
    display: flex;
    padding: var(--ag-grid-size)
  }

  .ag-group-title {
    display: inline;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-group-title-bar .ag-group-title {
    cursor: default
  }

  .ag-group-toolbar {
    align-items: center;
    display: flex;
    padding: var(--ag-grid-size)
  }

  .ag-group-container {
    display: flex
  }

  .ag-disabled .ag-group-container {
    pointer-events: none
  }

  .ag-disabled-group-container,
  .ag-disabled-group-title-bar {
    opacity: .5
  }

  .ag-group-container-horizontal {
    flex-direction: row;
    flex-wrap: wrap
  }

  .ag-group-container-vertical {
    flex-direction: column
  }

  .ag-group-title-bar-icon {
    cursor: pointer;
    flex: none
  }

  .ag-ltr .ag-group-title-bar-icon {
    margin-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-group-title-bar-icon {
    margin-left: var(--ag-grid-size)
  }

  .ag-group-item-alignment-stretch .ag-group-item {
    align-items: stretch
  }

  .ag-group-item-alignment-start .ag-group-item {
    align-items: flex-start
  }

  .ag-group-item-alignment-end .ag-group-item {
    align-items: flex-end
  }

  .ag-popup-child:not(.ag-tooltip-custom) {
    box-shadow: var(--ag-popup-shadow)
  }

  .ag-rtl {
    text-align: right
  }

  .ag-ltr .ag-pivot-leaf-group {
    margin-left: min(var(--ag-row-group-indent-size), calc(var(--ag-row-group-indent-size)*var(--ag-indentation-level)))
  }

  .ag-rtl .ag-pivot-leaf-group {
    margin-right: min(var(--ag-row-group-indent-size), calc(var(--ag-row-group-indent-size)*var(--ag-indentation-level)))
  }

  .ag-ltr .ag-row-group-leaf-indent {
    margin-left: calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))
  }

  .ag-rtl .ag-row-group-leaf-indent {
    margin-right: calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))
  }

  .ag-value-change-delta {
    padding: 0 2px
  }

  .ag-value-change-delta-up {
    color: var(--ag-value-change-delta-up-color)
  }

  .ag-value-change-delta-down {
    color: var(--ag-value-change-delta-down-color)
  }

  .ag-value-change-value {
    background-color: transparent;
    border-radius: 1px;
    padding-left: 1px;
    padding-right: 1px;
    transition: background-color 1s
  }

  .ag-value-change-value-highlight {
    background-color: var(--ag-value-change-value-highlight-background-color);
    transition: background-color .1s
  }

  .ag-cell-data-changed {
    background-color: var(--ag-value-change-value-highlight-background-color) !important
  }

  .ag-cell-data-changed-animation {
    background-color: transparent
  }

  .ag-cell-highlight {
    background-color: var(--ag-range-selection-highlight-color) !important
  }

  .ag-row {
    background-color: var(--ag-background-color);
    border-bottom: var(--ag-row-border);
    color: var(--ag-cell-text-color);
    height: var(--ag-row-height);
    white-space: nowrap;
    width: 100%;
    --ag-internal-content-line-height: min(calc(var(--ag-row-height) - 1px), var(--ag-line-height, 1000px))
  }

  .ag-sticky-bottom:after {
    border-top: var(--ag-row-border);
    content: "";
    height: 1px;
    position: absolute;
    top: 0;
    width: 100%
  }

  .ag-ltr .ag-sticky-bottom:after {
    left: 0
  }

  .ag-rtl .ag-sticky-bottom:after {
    right: 0
  }

  .ag-group-contracted,
  .ag-group-expanded {
    cursor: pointer
  }

  .ag-cell,
  .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    border: 1px solid transparent;
    line-height: var(--ag-internal-content-line-height)
  }

  .ag-ltr .ag-cell {
    border-right: var(--ag-column-border)
  }

  .ag-rtl .ag-cell {
    border-left: var(--ag-column-border)
  }

  .ag-cell-wrapper {
    align-items: center;
    display: flex
  }

  .ag-ltr .ag-cell-wrapper {
    padding-left: calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))
  }

  .ag-rtl .ag-cell-wrapper {
    padding-right: calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))
  }

  .ag-cell-wrapper.ag-row-group {
    align-items: flex-start
  }

  .ag-cell-wrapper>:not(.ag-cell-value):not(.ag-group-value) {
    align-items: center;
    display: flex;
    height: var(--ag-internal-content-line-height)
  }

  .ag-ltr .ag-row>.ag-cell-wrapper.ag-row-group {
    padding-left: calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))
  }

  .ag-rtl .ag-row>.ag-cell-wrapper.ag-row-group {
    padding-right: calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))
  }

  .ag-ltr .ag-group-contracted,
  .ag-ltr .ag-group-expanded,
  .ag-ltr .ag-row-drag,
  .ag-ltr .ag-selection-checkbox {
    margin-right: var(--ag-cell-widget-spacing)
  }

  .ag-rtl .ag-group-contracted,
  .ag-rtl .ag-group-expanded,
  .ag-rtl .ag-row-drag,
  .ag-rtl .ag-selection-checkbox {
    margin-left: var(--ag-cell-widget-spacing)
  }

  .ag-ltr .ag-group-child-count {
    margin-left: 3px
  }

  .ag-rtl .ag-group-child-count {
    margin-right: 3px
  }

  .ag-row-highlight-above:after,
  .ag-row-highlight-below:after {
    background-color: var(--ag-range-selection-border-color);
    content: "";
    height: 1px;
    position: absolute;
    width: calc(100% - 1px)
  }

  .ag-ltr .ag-row-highlight-above:after,
  .ag-ltr .ag-row-highlight-below:after {
    left: 1px
  }

  .ag-rtl .ag-row-highlight-above:after,
  .ag-rtl .ag-row-highlight-below:after {
    right: 1px
  }

  .ag-row-highlight-above:after {
    top: -1px
  }

  .ag-row-highlight-above.ag-row-first:after {
    top: 0
  }

  .ag-row-highlight-below:after {
    bottom: 0
  }

  .ag-row-odd {
    background-color: var(--ag-odd-row-background-color)
  }

  .ag-row-selected:before {
    background-color: var(--ag-selected-row-background-color);
    content: "";
    display: block;
    inset: 0;
    pointer-events: none;
    position: absolute
  }

  .ag-row-hover.ag-full-width-row.ag-row-group:before,
  .ag-row-hover:not(.ag-full-width-row):before {
    background-color: var(--ag-row-hover-color);
    content: "";
    display: block;
    inset: 0;
    pointer-events: none;
    position: absolute
  }

  .ag-row-hover.ag-row-selected:before {
    background-color: var(--ag-row-hover-color);
    background-image: linear-gradient(var(--ag-selected-row-background-color), var(--ag-selected-row-background-color))
  }

  .ag-row-hover.ag-full-width-row.ag-row-group>* {
    position: relative
  }

  .ag-column-hover {
    background-color: var(--ag-column-hover-color)
  }

  .ag-ltr .ag-right-aligned-cell {
    text-align: right
  }

  .ag-rtl .ag-right-aligned-cell {
    text-align: left
  }

  .ag-right-aligned-cell .ag-cell-value,
  .ag-right-aligned-cell .ag-group-value {
    margin-left: auto
  }

  .ag-cell,
  .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    -webkit-font-smoothing: subpixel-antialiased
  }

  .ag-ltr .ag-cell,
  .ag-ltr .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    padding-left: calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level));
    padding-right: calc(var(--ag-cell-horizontal-padding) - 1px)
  }

  .ag-rtl .ag-cell,
  .ag-rtl .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    padding-left: calc(var(--ag-cell-horizontal-padding) - 1px);
    padding-right: calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level))
  }

  .ag-row>.ag-cell-wrapper {
    padding-left: calc(var(--ag-cell-horizontal-padding) - 1px);
    padding-right: calc(var(--ag-cell-horizontal-padding) - 1px)
  }

  .ag-row-dragging {
    cursor: move;
    opacity: .5
  }

  .ag-details-row {
    background-color: var(--ag-background-color);
    padding: calc(var(--ag-grid-size)*3.5)
  }

  .ag-layout-auto-height .ag-center-cols-container,
  .ag-layout-auto-height .ag-center-cols-viewport,
  .ag-layout-print .ag-center-cols-container,
  .ag-layout-print .ag-center-cols-viewport {
    min-height: 150px
  }

  .ag-overlay-loading-wrapper {
    background-color: var(--ag-modal-overlay-background-color)
  }

  .ag-overlay-no-rows-wrapper.ag-layout-auto-height {
    padding-top: 60px
  }

  .ag-skeleton-container {
    align-content: center;
    height: 100%;
    width: 100%
  }

  .ag-skeleton-effect {
    animation: ag-skeleton-loading 1.5s ease-in-out .5s infinite;
    background-color: var(--ag-row-loading-skeleton-effect-color);
    border-radius: .25rem;
    height: 1em;
    width: 100%
  }

  .ag-ltr .ag-right-aligned-cell .ag-skeleton-effect {
    margin-left: auto
  }

  .ag-rtl .ag-right-aligned-cell .ag-skeleton-effect {
    margin-right: auto
  }

  @keyframes ag-skeleton-loading {
    0% {
      opacity: 1
    }

    50% {
      opacity: .4
    }

    to {
      opacity: 1
    }
  }

  .ag-loading {
    align-items: center;
    display: flex;
    height: 100%
  }

  .ag-ltr .ag-loading {
    padding-left: var(--ag-cell-horizontal-padding)
  }

  .ag-rtl .ag-loading {
    padding-right: var(--ag-cell-horizontal-padding)
  }

  .ag-ltr .ag-loading-icon {
    padding-right: var(--ag-cell-widget-spacing)
  }

  .ag-rtl .ag-loading-icon {
    padding-left: var(--ag-cell-widget-spacing)
  }

  .ag-icon-loading {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: spin;
    animation-timing-function: linear
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }

    to {
      transform: rotate(1turn)
    }
  }

  .ag-details-row {
    padding: calc(var(--ag-grid-size)*3.75)
  }

  .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing),
  .ag-cell-range-selected:not(.ag-cell-focus) {
    background-color: var(--ag-range-selection-background-color)
  }

  .ag-cell-range-chart:is(.ag-cell-range-selected:not(.ag-cell-focus), .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing)) {
    background-color: var(--ag-range-selection-chart-background-color) !important
  }

  .ag-cell-range-chart.ag-cell-range-chart-category:is(.ag-cell-range-selected:not(.ag-cell-focus), .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing)) {
    background-color: var(--ag-range-selection-chart-category-background-color) !important
  }

  .ag-cell-range-selected-1:not(.ag-cell-focus),
  .ag-root:not(.ag-context-menu-open) .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-1:not(.ag-cell-inline-editing) {
    background-color: var(--ag-range-selection-background-color)
  }

  .ag-cell-range-selected-2:not(.ag-cell-focus) {
    background-image: linear-gradient(var(--ag-range-selection-background-color), var(--ag-range-selection-background-color))
  }

  .ag-cell-range-selected-3:not(.ag-cell-focus) {
    background-image: linear-gradient(var(--ag-range-selection-background-color), var(--ag-range-selection-background-color)), linear-gradient(var(--ag-range-selection-background-color), var(--ag-range-selection-background-color))
  }

  .ag-cell-range-selected-4:not(.ag-cell-focus) {
    background-image: linear-gradient(var(--ag-range-selection-background-color), var(--ag-range-selection-background-color)), linear-gradient(var(--ag-range-selection-background-color), var(--ag-range-selection-background-color)), linear-gradient(var(--ag-range-selection-background-color), var(--ag-range-selection-background-color))
  }

  .ag-cell.ag-cell-range-selected.ag-cell-range-top:not(.ag-cell-range-single-cell) {
    border-top-color: var(--ag-range-selection-border-color);
    border-top-style: var(--ag-range-selection-border-style)
  }

  .ag-cell.ag-cell-range-selected.ag-cell-range-right:not(.ag-cell-range-single-cell) {
    border-right-color: var(--ag-range-selection-border-color);
    border-right-style: var(--ag-range-selection-border-style)
  }

  .ag-cell.ag-cell-range-selected.ag-cell-range-bottom:not(.ag-cell-range-single-cell) {
    border-bottom-color: var(--ag-range-selection-border-color);
    border-bottom-style: var(--ag-range-selection-border-style)
  }

  .ag-cell.ag-cell-range-selected.ag-cell-range-left:not(.ag-cell-range-single-cell) {
    border-left-color: var(--ag-range-selection-border-color);
    border-left-style: var(--ag-range-selection-border-style)
  }

  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-ltr .ag-cell-range-single-cell,
  .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle,
  .ag-ltr .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-ltr .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group,
  .ag-rtl .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-rtl .ag-cell-range-single-cell,
  .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle,
  .ag-rtl .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-rtl .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group {
    border: 1px solid;
    border-color: var(--ag-range-selection-border-color);
    border-style: var(--ag-range-selection-border-style);
    outline: initial
  }

  .ag-cell.ag-selection-fill-top,
  .ag-cell.ag-selection-fill-top.ag-cell-range-selected {
    border-top: 1px dashed;
    border-top-color: var(--ag-range-selection-border-color)
  }

  .ag-ltr .ag-cell.ag-selection-fill-right,
  .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-right: 1px dashed var(--ag-range-selection-border-color) !important
  }

  .ag-rtl .ag-cell.ag-selection-fill-right,
  .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-left: 1px dashed var(--ag-range-selection-border-color) !important
  }

  .ag-cell.ag-selection-fill-bottom,
  .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected {
    border-bottom: 1px dashed;
    border-bottom-color: var(--ag-range-selection-border-color)
  }

  .ag-ltr .ag-cell.ag-selection-fill-left,
  .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-left: 1px dashed var(--ag-range-selection-border-color) !important
  }

  .ag-rtl .ag-cell.ag-selection-fill-left,
  .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-right: 1px dashed var(--ag-range-selection-border-color) !important
  }

  .ag-fill-handle,
  .ag-range-handle {
    background-color: var(--ag-range-selection-border-color);
    bottom: -1px;
    height: 6px;
    position: absolute;
    width: 6px
  }

  .ag-ltr .ag-fill-handle,
  .ag-ltr .ag-range-handle {
    right: -1px
  }

  .ag-rtl .ag-fill-handle,
  .ag-rtl .ag-range-handle {
    left: -1px
  }

  .ag-fill-handle {
    cursor: cell
  }

  .ag-ltr .ag-range-handle {
    cursor: nwse-resize
  }

  .ag-rtl .ag-range-handle {
    cursor: nesw-resize
  }

  .ag-input-wrapper,
  .ag-picker-field-wrapper {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    line-height: normal;
    position: relative
  }

  .ag-input-field {
    align-items: center;
    display: flex;
    flex-direction: row
  }

  .ag-input-field-input {
    flex: 1 1 auto
  }

  .ag-floating-filter-input .ag-input-field-input[type=date] {
    width: 1px
  }

  .ag-input-field-input {
    min-width: 0;
    width: 100%
  }

  .ag-column-select-header-filter-wrapper .ag-input-wrapper:before,
  .ag-filter-filter .ag-input-wrapper:before,
  .ag-filter-toolpanel-search .ag-input-wrapper:before,
  .ag-mini-filter .ag-input-wrapper:before {
    background-color: currentColor;
    content: "";
    display: block;
    height: 12px;
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");
    mask-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    opacity: 50%;
    position: absolute;
    width: 12px
  }

  .ag-ltr .ag-column-select-header-filter-wrapper .ag-input-wrapper:before,
  .ag-ltr .ag-filter-filter .ag-input-wrapper:before,
  .ag-ltr .ag-filter-toolpanel-search .ag-input-wrapper:before,
  .ag-ltr .ag-mini-filter .ag-input-wrapper:before {
    margin-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-column-select-header-filter-wrapper .ag-input-wrapper:before,
  .ag-rtl .ag-filter-filter .ag-input-wrapper:before,
  .ag-rtl .ag-filter-toolpanel-search .ag-input-wrapper:before,
  .ag-rtl .ag-mini-filter .ag-input-wrapper:before {
    margin-right: var(--ag-grid-size)
  }

  .ag-ltr .ag-column-select-header-filter-wrapper input.ag-number-field-input,
  .ag-ltr .ag-column-select-header-filter-wrapper input.ag-text-field-input,
  .ag-ltr .ag-filter-filter input.ag-number-field-input,
  .ag-ltr .ag-filter-filter input.ag-text-field-input,
  .ag-ltr .ag-filter-toolpanel-search input.ag-number-field-input,
  .ag-ltr .ag-filter-toolpanel-search input.ag-text-field-input,
  .ag-ltr .ag-mini-filter input.ag-number-field-input,
  .ag-ltr .ag-mini-filter input.ag-text-field-input {
    padding-left: 26px
  }

  .ag-rtl .ag-column-select-header-filter-wrapper input.ag-number-field-input,
  .ag-rtl .ag-column-select-header-filter-wrapper input.ag-text-field-input,
  .ag-rtl .ag-filter-filter input.ag-number-field-input,
  .ag-rtl .ag-filter-filter input.ag-text-field-input,
  .ag-rtl .ag-filter-toolpanel-search input.ag-number-field-input,
  .ag-rtl .ag-filter-toolpanel-search input.ag-text-field-input,
  .ag-rtl .ag-mini-filter input.ag-number-field-input,
  .ag-rtl .ag-mini-filter input.ag-text-field-input {
    padding-right: 26px
  }

  .ag-advanced-filter-header {
    align-items: center;
    background-color: var(--ag-header-background-color);
    border-bottom: var(--ag-header-row-border);
    display: flex;
    padding-left: var(--ag-cell-horizontal-padding);
    padding-right: var(--ag-cell-horizontal-padding);
    position: relative
  }

  .ag-advanced-filter {
    align-items: center;
    display: flex;
    width: 100%
  }

  .ag-advanced-filter-apply-button,
  .ag-advanced-filter-builder-button {
    line-height: normal;
    white-space: nowrap
  }

  .ag-ltr .ag-advanced-filter-apply-button,
  .ag-ltr .ag-advanced-filter-builder-button {
    margin-left: calc(var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-advanced-filter-apply-button,
  .ag-rtl .ag-advanced-filter-builder-button {
    margin-right: calc(var(--ag-grid-size)*2)
  }

  .ag-advanced-filter-builder-button {
    align-items: center;
    background-color: unset;
    border: 0;
    display: flex;
    font-size: var(--ag-font-size);
    font-weight: 600;
    padding: var(--ag-grid-size)
  }

  .ag-advanced-filter-builder-button:hover:not(:disabled) {
    background-color: var(--ag-row-hover-color)
  }

  .ag-advanced-filter-builder-button:not(:disabled) {
    cursor: pointer
  }

  .ag-ltr .ag-advanced-filter-builder-button-label {
    margin-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-advanced-filter-builder-button-label {
    margin-right: var(--ag-grid-size)
  }

  .ag-advanced-filter-builder {
    background-color: var(--ag-chrome-background-color);
    display: flex;
    flex-direction: column;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%
  }

  .ag-advanced-filter-builder-list {
    flex: 1;
    overflow: auto
  }

  .ag-advanced-filter-builder-button-panel {
    border-top: var(--ag-advanced-filter-builder-button-bar-border);
    display: flex;
    justify-content: flex-end;
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-ltr .ag-advanced-filter-builder .ag-advanced-filter-builder-button-panel .ag-advanced-filter-builder-apply-button,
  .ag-ltr .ag-advanced-filter-builder .ag-advanced-filter-builder-button-panel .ag-advanced-filter-builder-cancel-button {
    margin-left: calc(var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-advanced-filter-builder .ag-advanced-filter-builder-button-panel .ag-advanced-filter-builder-apply-button,
  .ag-rtl .ag-advanced-filter-builder .ag-advanced-filter-builder-button-panel .ag-advanced-filter-builder-cancel-button {
    margin-right: calc(var(--ag-grid-size)*2)
  }

  .ag-advanced-filter-builder-item-wrapper {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    overflow: hidden
  }

  .ag-ltr .ag-advanced-filter-builder-item-wrapper {
    padding-left: calc(var(--ag-icon-size)/2);
    padding-right: var(--ag-icon-size)
  }

  .ag-rtl .ag-advanced-filter-builder-item-wrapper {
    padding-left: var(--ag-icon-size);
    padding-right: calc(var(--ag-icon-size)/2)
  }

  .ag-virtual-list-viewport .ag-advanced-filter-builder-item-wrapper .ag-tab-guard {
    position: absolute
  }

  .ag-advanced-filter-builder-item-tree-lines>* {
    width: var(--ag-advanced-filter-builder-indent-size)
  }

  .ag-advanced-filter-builder-item-tree-lines .ag-advanced-filter-builder-item-tree-line-root {
    width: var(--ag-icon-size)
  }

  .ag-advanced-filter-builder-item-tree-lines .ag-advanced-filter-builder-item-tree-line-root:before {
    height: 50%;
    top: 50%
  }

  .ag-advanced-filter-builder-item-tree-line-horizontal,
  .ag-advanced-filter-builder-item-tree-line-vertical,
  .ag-advanced-filter-builder-item-tree-line-vertical-bottom,
  .ag-advanced-filter-builder-item-tree-line-vertical-top {
    align-items: center;
    display: flex;
    height: 100%;
    position: relative
  }

  .ag-advanced-filter-builder-item-tree-line-horizontal:after,
  .ag-advanced-filter-builder-item-tree-line-horizontal:before,
  .ag-advanced-filter-builder-item-tree-line-vertical-bottom:after,
  .ag-advanced-filter-builder-item-tree-line-vertical-bottom:before,
  .ag-advanced-filter-builder-item-tree-line-vertical-top:after,
  .ag-advanced-filter-builder-item-tree-line-vertical-top:before,
  .ag-advanced-filter-builder-item-tree-line-vertical:after,
  .ag-advanced-filter-builder-item-tree-line-vertical:before {
    content: "";
    height: 100%;
    position: absolute
  }

  .ag-advanced-filter-builder-item-tree-line-horizontal:after {
    border-bottom: 1px solid var(--ag-border-color);
    height: 50%;
    top: 0;
    width: calc(var(--ag-advanced-filter-builder-indent-size) - var(--ag-icon-size))
  }

  .ag-ltr .ag-advanced-filter-builder-item-tree-line-horizontal:after {
    left: calc(var(--ag-icon-size)/2)
  }

  .ag-rtl .ag-advanced-filter-builder-item-tree-line-horizontal:after {
    right: calc(var(--ag-icon-size)/2)
  }

  .ag-advanced-filter-builder-item-tree-line-vertical:before {
    top: 0;
    width: calc(var(--ag-advanced-filter-builder-indent-size) - var(--ag-icon-size)/2)
  }

  .ag-ltr .ag-advanced-filter-builder-item-tree-line-vertical:before {
    border-left: 1px solid var(--ag-border-color);
    left: calc(var(--ag-icon-size)/2)
  }

  .ag-rtl .ag-advanced-filter-builder-item-tree-line-vertical:before {
    border-right: 1px solid var(--ag-border-color);
    right: calc(var(--ag-icon-size)/2)
  }

  .ag-advanced-filter-builder-item-tree-line-vertical-top:before {
    height: 50%;
    top: 0;
    width: calc(var(--ag-advanced-filter-builder-indent-size) - var(--ag-icon-size)/2)
  }

  .ag-ltr .ag-advanced-filter-builder-item-tree-line-vertical-top:before {
    border-left: 1px solid var(--ag-border-color);
    left: calc(var(--ag-icon-size)/2)
  }

  .ag-rtl .ag-advanced-filter-builder-item-tree-line-vertical-top:before {
    border-right: 1px solid var(--ag-border-color);
    right: calc(var(--ag-icon-size)/2)
  }

  .ag-advanced-filter-builder-item-tree-line-vertical-bottom:before {
    height: calc(50% - var(--ag-icon-size)*1.5/2);
    top: calc(50% + var(--ag-icon-size)*1.5/2);
    width: calc(var(--ag-icon-size)/2)
  }

  .ag-ltr .ag-advanced-filter-builder-item-tree-line-vertical-bottom:before {
    border-left: 1px solid var(--ag-border-color);
    left: calc(var(--ag-icon-size)/2)
  }

  .ag-rtl .ag-advanced-filter-builder-item-tree-line-vertical-bottom:before {
    border-right: 1px solid var(--ag-border-color);
    right: calc(var(--ag-icon-size)/2)
  }

  .ag-advanced-filter-builder-item-condition {
    padding-bottom: var(--ag-grid-size);
    padding-top: var(--ag-grid-size)
  }

  .ag-advanced-filter-builder-item,
  .ag-advanced-filter-builder-item-buttons,
  .ag-advanced-filter-builder-item-condition,
  .ag-advanced-filter-builder-item-tree-lines,
  .ag-advanced-filter-builder-pill,
  .ag-advanced-filter-builder-pill-wrapper {
    align-items: center;
    display: flex;
    height: 100%
  }

  .ag-advanced-filter-builder-pill-wrapper {
    margin: 0 var(--ag-grid-size)
  }

  .ag-advanced-filter-builder-pill {
    border-radius: var(--ag-border-radius);
    min-height: calc(100% - var(--ag-grid-size)*3);
    min-width: calc(var(--ag-grid-size)*2);
    padding: var(--ag-grid-size) calc(var(--ag-grid-size)*2);
    position: relative
  }

  .ag-ltr .ag-advanced-filter-builder-pill .ag-picker-field-display {
    margin-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-advanced-filter-builder-pill .ag-picker-field-display {
    margin-left: var(--ag-grid-size)
  }

  .ag-advanced-filter-builder-pill .ag-advanced-filter-builder-value-number {
    font-family: monospace;
    font-weight: 700
  }

  .ag-advanced-filter-builder-pill .ag-advanced-filter-builder-value-empty {
    color: var(--ag-subtle-text-color)
  }

  .ag-advanced-filter-builder-item-button:focus-visible,
  .ag-advanced-filter-builder-pill:focus-visible {
    shadow: var(--ag-focus-shadow)
  }

  .ag-advanced-filter-builder-pill-display {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-advanced-filter-builder-join-pill {
    background-color: var(--ag-advanced-filter-builder-join-pill-color);
    cursor: pointer
  }

  .ag-advanced-filter-builder-column-pill {
    background-color: var(--ag-advanced-filter-builder-column-pill-color);
    cursor: pointer
  }

  .ag-advanced-filter-builder-option-pill {
    background-color: var(--ag-advanced-filter-builder-option-pill-color);
    cursor: pointer
  }

  .ag-advanced-filter-builder-value-pill {
    background-color: var(--ag-advanced-filter-builder-value-pill-color);
    cursor: text;
    max-width: 140px
  }

  .ag-advanced-filter-builder-value-pill .ag-advanced-filter-builder-pill-display {
    display: block
  }

  .ag-advanced-filter-builder-item-buttons>* {
    margin: 0 calc(var(--ag-grid-size)*.5)
  }

  .ag-advanced-filter-builder-item-button {
    color: var(--ag-subtle-text-color);
    cursor: pointer;
    position: relative
  }

  .ag-advanced-filter-builder-item-button-disabled {
    cursor: default;
    opacity: .5
  }

  .ag-advanced-filter-builder-virtual-list-container {
    top: var(--ag-grid-size)
  }

  .ag-advanced-filter-builder-virtual-list-item {
    cursor: default;
    display: flex;
    height: var(--ag-list-item-height)
  }

  .ag-advanced-filter-builder-virtual-list-item:hover {
    background-color: var(--ag-row-hover-color)
  }

  .ag-advanced-filter-builder-virtual-list-item:hover .ag-advanced-filter-builder-item-button {
    opacity: 100%
  }

  .ag-advanced-filter-builder-validation .ag-advanced-filter-builder-invalid,
  .ag-advanced-filter-builder-virtual-list-item-highlight .ag-advanced-filter-builder-item-button:focus-visible {
    opacity: 100%
  }

  .ag-advanced-filter-builder-invalid {
    color: var(--ag-invalid-color);
    cursor: default;
    margin: 0 var(--ag-grid-size)
  }

  .ag-cell-inline-editing {
    border-radius: var(--ag-border-radius);
    padding: 0;
    z-index: 1
  }

  .ag-cell-inline-editing .ag-cell-edit-wrapper,
  .ag-cell-inline-editing .ag-cell-editor,
  .ag-cell-inline-editing .ag-cell-editor .ag-wrapper,
  .ag-cell-inline-editing .ag-cell-editor input,
  .ag-cell-inline-editing .ag-cell-wrapper {
    height: 100%;
    line-height: normal;
    width: 100%
  }

  .ag-autocomplete-list-popup,
  .ag-popup-editor .ag-large-text {
    background-color: var(--ag-background-color);
    border-radius: var(--ag-border-radius);
    box-shadow: var(--ag-dropdown-shadow);
    padding: 0
  }

  .ag-large-text-input {
    height: auto;
    padding: var(--ag-cell-horizontal-padding)
  }

  .ag-rtl .ag-large-text-input textarea {
    resize: none
  }

  .ag-checkbox-edit {
    padding-left: var(--ag-cell-horizontal-padding);
    padding-right: var(--ag-cell-horizontal-padding)
  }

  .ag-chart {
    height: 100%;
    width: 100%
  }

  .ag-chart,
  .ag-chart-components-wrapper {
    display: flex;
    overflow: hidden;
    position: relative
  }

  .ag-chart-components-wrapper {
    flex: 1 1 auto
  }

  .ag-chart-canvas-wrapper {
    flex: 1 1 auto;
    overflow: hidden;
    position: relative
  }

  .ag-chart-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 16px
  }

  .ag-ltr .ag-chart-menu {
    right: 20px
  }

  .ag-rtl .ag-chart-menu {
    left: 20px
  }

  .ag-chart-docked-container {
    min-width: var(--ag-chart-menu-panel-width);
    position: relative
  }

  .ag-chart-menu-hidden~.ag-chart-docked-container {
    display: none
  }

  .ag-chart-tabbed-menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    width: 100%
  }

  .ag-chart-tabbed-menu-header {
    cursor: default;
    flex: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-chart-tabbed-menu-body {
    align-items: stretch;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden
  }

  .ag-chart-tab {
    overflow: hidden;
    overflow-y: auto;
    width: 100%
  }

  .ag-chart-settings {
    overflow-x: hidden
  }

  .ag-chart-settings-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%
  }

  .ag-chart-settings-nav-bar {
    align-items: center;
    display: flex;
    height: 30px;
    padding: 0 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%
  }

  .ag-chart-settings-card-selector {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    justify-content: space-around;
    padding: 0 10px
  }

  .ag-chart-settings-card-item {
    background-color: var(--ag-foreground-color);
    border-radius: 4px;
    cursor: pointer;
    height: 10px;
    height: 8px;
    position: relative;
    width: 10px;
    width: 8px
  }

  .ag-chart-settings-card-item.ag-not-selected {
    opacity: .2
  }

  .ag-chart-settings-card-item:before {
    background-color: transparent;
    content: " ";
    display: block;
    height: 20px;
    left: 50%;
    margin-left: -10px;
    margin-top: -10px;
    position: absolute;
    top: 50%;
    width: 20px
  }

  .ag-chart-settings-card-item.ag-selected {
    background-color: var(--ag-accent-color)
  }

  .ag-chart-settings-next,
  .ag-chart-settings-prev {
    flex: none;
    position: relative
  }

  .ag-chart-settings-next:focus-within,
  .ag-chart-settings-prev:focus-within {
    border-radius: 1px;
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-chart-settings-next-button,
  .ag-chart-settings-prev-button {
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%
  }

  .ag-chart-settings-mini-charts-container {
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative
  }

  .ag-chart-settings-mini-wrapper {
    display: flex;
    flex-direction: column;
    left: 0;
    min-height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%
  }

  .ag-chart-settings-mini-wrapper.ag-animating {
    transition: left .3s;
    transition-timing-function: ease-in-out
  }

  .ag-chart-mini-thumbnail {
    cursor: pointer
  }

  .ag-chart-mini-thumbnail-canvas {
    display: block
  }

  .ag-chart-advanced-settings-wrapper,
  .ag-chart-data-wrapper,
  .ag-chart-format-wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-chart-advanced-settings-wrapper,
  .ag-chart-data-wrapper {
    height: 100%;
    overflow-y: auto
  }

  .ag-chart-advanced-settings {
    background-color: var(--ag-chrome-background-color)
  }

  .ag-chart-advanced-settings,
  .ag-chart-advanced-settings-wrapper {
    width: 100%
  }

  .ag-chart-advanced-settings-wrapper {
    padding-bottom: 0
  }

  .ag-chart-advanced-settings-section,
  .ag-chart-data-section,
  .ag-chart-format-section {
    display: flex;
    margin: 0
  }

  .ag-chart-advanced-settings-section {
    border-bottom: 1px solid var(--ag-border-color)
  }

  .ag-chart-empty-text {
    align-items: center;
    background-color: var(--ag-background-color);
    display: flex;
    height: 100%;
    justify-content: center;
    top: 0;
    width: 100%
  }

  .ag-chart .ag-chart-menu {
    display: none
  }

  .ag-chart-menu-hidden:hover .ag-chart-menu {
    display: block
  }

  .ag-chart .ag-chart-menu-wrapper .ag-chart-menu {
    display: flex;
    flex-direction: row;
    gap: 20px;
    top: 8px;
    width: auto
  }

  .ag-ltr .ag-chart .ag-chart-menu-wrapper .ag-chart-menu {
    justify-content: right;
    right: calc(var(--ag-cell-horizontal-padding) + var(--ag-grid-size) - 4px)
  }

  .ag-rtl .ag-chart .ag-chart-menu-wrapper .ag-chart-menu {
    justify-content: left;
    left: calc(var(--ag-cell-horizontal-padding) + var(--ag-grid-size) - 4px)
  }

  .ag-charts-font-size-color {
    align-self: stretch;
    display: flex;
    justify-content: space-between
  }

  .ag-charts-data-group-item {
    position: relative
  }

  .ag-charts-data-group-item:not(:last-child) {
    margin-bottom: var(--ag-grid-size)
  }

  .ag-chart-menu {
    background: var(--ag-background-color)
  }

  .ag-chart-menu,
  .ag-chart-menu-icon {
    border-radius: var(--ag-border-radius)
  }

  .ag-chart-menu-icon {
    cursor: pointer;
    margin: 2px 0;
    opacity: .5;
    opacity: .8
  }

  .ag-chart-menu-icon:hover {
    opacity: 1
  }

  .ag-chart-menu-toolbar-button {
    background-color: unset;
    border: 0;
    border-radius: 1px;
    padding: 0 2px
  }

  .ag-chart-mini-thumbnail {
    border: 1px solid var(--ag-border-color);
    border-radius: 5px
  }

  .ag-chart-mini-thumbnail.ag-selected {
    border-color: var(--ag-accent-color);
    border-width: 2px
  }

  .ag-chart-mini-thumbnail:focus-visible {
    border-color: var(--ag-accent-color);
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-chart-data-column-drag-handle {
    margin-left: var(--ag-grid-size)
  }

  .ag-charts-data-group-title-bar,
  .ag-charts-format-top-level-group-title-bar,
  .ag-charts-settings-group-title-bar {
    position: relative
  }

  .ag-charts-advanced-settings-top-level-group-title-bar {
    background-color: unset;
    position: relative
  }

  .ag-charts-advanced-settings-top-level-group-title-bar:focus-visible,
  .ag-charts-data-group-title-bar:focus-visible,
  .ag-charts-format-top-level-group-title-bar:focus-visible,
  .ag-charts-settings-group-title-bar:focus-visible {
    box-shadow: inset var(--ag-focus-shadow)
  }

  .ag-charts-data-group-container {
    padding: calc(var(--ag-widget-container-vertical-padding)*.5) var(--ag-widget-container-horizontal-padding)
  }

  .ag-charts-data-group-container .ag-charts-data-group-item:not(.ag-charts-format-sub-level-group):not(.ag-pill-select):not(.ag-select) {
    height: var(--ag-list-item-height)
  }

  .ag-charts-data-group-container .ag-charts-data-group-item.ag-picker-field {
    margin-top: var(--ag-grid-size)
  }

  .ag-charts-advanced-settings-top-level-group-container,
  .ag-charts-format-top-level-group-container {
    margin-left: calc(var(--ag-grid-size)*2);
    padding: var(--ag-grid-size)
  }

  .ag-charts-advanced-settings-top-level-group-item,
  .ag-charts-format-top-level-group-item {
    margin: var(--ag-grid-size) 0
  }

  .ag-charts-format-sub-level-group-container {
    display: flex;
    flex-direction: column;
    gap: var(--ag-widget-vertical-spacing);
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-charts-settings-group-container {
    display: grid;
    grid-template-columns: 60px 1fr 60px 1fr 60px;
    padding: var(--ag-grid-size);
    row-gap: 8px
  }

  .ag-charts-settings-group-container .ag-chart-mini-thumbnail:nth-child(3n+1) {
    grid-column: 1
  }

  .ag-charts-settings-group-container .ag-chart-mini-thumbnail:nth-child(3n+2) {
    grid-column: 3
  }

  .ag-charts-settings-group-container .ag-chart-mini-thumbnail:nth-child(3n+3) {
    grid-column: 5
  }

  .ag-chart-data-section,
  .ag-chart-format-section {
    display: flex;
    margin: 0
  }

  .ag-chart-menu-panel {
    background-color: var(--ag-chrome-background-color)
  }

  .ag-ltr .ag-chart-menu-panel {
    border-left: 1px solid var(--ag-border-color)
  }

  .ag-rtl .ag-chart-menu-panel {
    border-right: 1px solid var(--ag-border-color)
  }

  .ag-chart-tabbed-menu-body {
    position: relative
  }

  .ag-chart-tabbed-menu-body:after {
    background: linear-gradient(var(--ag-background-color), transparent);
    content: "";
    display: block;
    height: 16px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0
  }

  .ag-charts-data-group-title-bar,
  .ag-charts-format-top-level-group-title-bar,
  .ag-charts-settings-group-container,
  .ag-charts-settings-group-title-bar {
    border-top: none;
    font-weight: 500;
    padding: 0 calc(var(--ag-grid-size)*1.5)
  }

  .ag-chart-settings-nav-bar {
    border-top: 1px solid var(--ag-border-color)
  }

  .ag-charts-format-sub-level-group-title-bar {
    background: none;
    font-weight: 500
  }

  .ag-chart-data-section .ag-label:not(.ag-group-title-bar),
  .ag-chart-format-section .ag-label:not(.ag-group-title-bar) {
    color: var(--ag-chart-menu-label-color)
  }

  .ag-chart-data-section .ag-label-align-top .ag-label,
  .ag-chart-format-section .ag-label-align-top .ag-label {
    margin-bottom: var(--ag-widget-vertical-spacing);
    margin-top: calc(var(--ag-widget-vertical-spacing)*.5)
  }

  .ag-chart-data-section .ag-slider.ag-label-align-top .ag-label,
  .ag-chart-format-section .ag-slider.ag-label-align-top .ag-label {
    margin-bottom: 0
  }

  .ag-chart-data-section label,
  .ag-chart-format-section label {
    display: inline-block
  }

  .ag-chart-data-wrapper,
  .ag-chart-format-wrapper,
  .ag-charts-data-group-container,
  .ag-charts-data-group-title-bar,
  .ag-charts-format-sub-level-group,
  .ag-charts-format-sub-level-group-container,
  .ag-charts-format-sub-level-group-container>*,
  .ag-charts-format-sub-level-group-item:last-child,
  .ag-charts-format-sub-level-group-title-bar,
  .ag-charts-format-top-level-group,
  .ag-charts-format-top-level-group .ag-charts-format-top-level-group-container,
  .ag-charts-format-top-level-group-item,
  .ag-charts-format-top-level-group-title-bar,
  .ag-charts-settings-group-container,
  .ag-charts-settings-group-title-bar {
    margin: 0;
    padding: 0
  }

  .ag-charts-data-group,
  .ag-charts-format-top-level-group {
    border-top: 1px solid var(--ag-border-color)
  }

  .ag-charts-data-group-title-bar,
  .ag-charts-format-top-level-group-title-bar,
  .ag-charts-settings-group-title-bar {
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-charts-data-group .ag-charts-data-group-container,
  .ag-charts-format-top-level-group .ag-charts-format-top-level-group-container,
  .ag-charts-settings-group .ag-charts-settings-group-container {
    padding: 0 var(--ag-widget-container-horizontal-padding)
  }

  .ag-charts-format-sub-level-group-title-bar {
    padding: var(--ag-widget-vertical-spacing) 0
  }

  .ag-charts-format-sub-level-group-container {
    padding-bottom: var(--ag-widget-container-vertical-padding);
    padding-top: var(--ag-widget-vertical-spacing)
  }

  .ag-charts-format-sub-level-group-container>*,
  .ag-charts-format-sub-level-no-header-group-container>*,
  .ag-charts-format-top-level-group-container>* {
    margin-bottom: var(--ag-widget-vertical-spacing)
  }

  .ag-chart-advanced-settings-section,
  .ag-chart-settings-mini-wrapper,
  .ag-charts-data-group-item {
    padding-bottom: var(--ag-widget-container-vertical-padding)
  }

  .ag-chart-advanced-settings-section {
    padding-top: var(--ag-widget-container-vertical-padding)
  }

  .ag-charts-advanced-settings-top-level-group .ag-charts-advanced-settings-top-level-group-container,
  .ag-charts-advanced-settings-top-level-group .ag-charts-advanced-settings-top-level-group-title-bar {
    padding: 0 var(--ag-widget-container-horizontal-padding)
  }

  .ag-charts-advanced-settings-top-level-group-container {
    margin: 0
  }

  .ag-charts-advanced-settings-top-level-group-item {
    margin-bottom: 0;
    margin-top: calc(var(--ag-widget-vertical-spacing)*2)
  }

  .ag-chart-menu {
    --ag-icon-size: 20px;
    background-color: color-mix(in srgb, transparent, var(--ag-background-color) 30%);
    padding: 4px 2px
  }

  .ag-chart-settings-card-item.ag-not-selected:hover {
    opacity: .35
  }

  .ag-column-drop {
    align-items: center;
    display: inline-flex;
    overflow: auto;
    position: relative;
    width: 100%
  }

  .ag-column-drop-cell,
  .ag-column-drop-list {
    align-items: center;
    display: flex
  }

  .ag-column-drop-cell {
    gap: var(--ag-grid-size);
    position: relative
  }

  .ag-column-drop-cell-text {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-column-drop-vertical {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    overflow: hidden
  }

  .ag-column-drop-vertical-title-bar {
    align-items: center;
    display: flex;
    flex: none
  }

  .ag-column-drop-vertical-list {
    align-items: stretch;
    flex-direction: column;
    flex-grow: 1;
    overflow-x: auto;
    position: relative
  }

  .ag-column-drop-vertical-list>* {
    flex: none
  }

  .ag-column-drop-empty .ag-column-drop-vertical-list {
    overflow: hidden
  }

  .ag-column-drop-vertical-empty-message {
    display: block
  }

  .ag-column-drop.ag-column-drop-horizontal {
    overflow: hidden;
    white-space: nowrap
  }

  .ag-column-drop-cell-button {
    cursor: pointer
  }

  .ag-column-drop-wrapper {
    display: flex
  }

  .ag-column-drop-horizontal-half-width {
    display: inline-block;
    width: 50% !important
  }

  .ag-column-drop-cell {
    background: var(--ag-column-drop-cell-background-color);
    border: var(--ag-column-drop-cell-border);
    border-radius: 500px;
    padding: calc(var(--ag-grid-size)*.5)
  }

  .ag-ltr .ag-column-drop-cell {
    padding-left: calc(var(--ag-grid-size)*.75)
  }

  .ag-rtl .ag-column-drop-cell {
    padding-right: calc(var(--ag-grid-size)*.75)
  }

  .ag-column-drop-cell:focus-visible {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-column-drop-cell-button {
    min-width: calc(var(--ag-grid-size)*4)
  }

  .ag-column-drop-cell-ghost {
    opacity: .5
  }

  .ag-column-drop-horizontal {
    gap: var(--ag-cell-widget-spacing);
    height: var(--ag-header-height)
  }

  .ag-ltr .ag-column-drop-horizontal {
    padding-left: var(--ag-cell-horizontal-padding)
  }

  .ag-rtl .ag-column-drop-horizontal {
    padding-right: var(--ag-cell-horizontal-padding)
  }

  .ag-column-drop-horizontal-list {
    gap: var(--ag-cell-widget-spacing)
  }

  .ag-column-drop-vertical-list {
    padding-bottom: var(--ag-grid-size);
    padding-left: var(--ag-grid-size);
    padding-right: var(--ag-grid-size)
  }

  .ag-column-drop-vertical-cell {
    margin-top: var(--ag-grid-size)
  }

  .ag-ltr .ag-column-drop-vertical-icon {
    margin-right: var(--ag-widget-horizontal-spacing)
  }

  .ag-rtl .ag-column-drop-vertical-icon {
    margin-left: var(--ag-widget-horizontal-spacing)
  }

  .ag-column-drop-vertical-empty-message {
    bottom: 0;
    left: 0;
    margin-top: var(--ag-grid-size);
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0
  }

  .ag-select-agg-func-popup {
    background: var(--ag-background-color);
    border: 1px solid var(--ag-border-color);
    border-radius: var(--ag-border-radius);
    box-shadow: var(--ag-dropdown-shadow);
    height: calc(var(--ag-grid-size)*5*3.5);
    padding: 0;
    position: absolute
  }

  .ag-select-agg-func-virtual-list-item {
    cursor: default
  }

  .ag-ltr .ag-select-agg-func-virtual-list-item {
    padding-left: calc(var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-select-agg-func-virtual-list-item {
    padding-right: calc(var(--ag-grid-size)*2)
  }

  .ag-select-agg-func-virtual-list-item:hover {
    background-color: var(--ag-selected-row-background-color)
  }

  .ag-select-agg-func-virtual-list-item:focus-visible {
    shadow: var(--ag-focus-shadow)
  }

  .ag-sort-indicator-container {
    display: contents
  }

  .ag-ltr .ag-sort-indicator-icon {
    padding-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-sort-indicator-icon {
    padding-right: var(--ag-grid-size)
  }

  .ag-column-drop-horizontal {
    background-color: var(--ag-header-background-color);
    border-bottom: var(--ag-header-row-border)
  }

  .ag-ltr .ag-column-drop-horizontal-half-width:not(:last-child) {
    border-right: var(--ag-column-border)
  }

  .ag-rtl .ag-column-drop-horizontal-half-width:not(:last-child) {
    border-left: var(--ag-column-border)
  }

  .ag-column-drop-cell-button {
    min-width: 0;
    opacity: .75
  }

  .ag-column-drop-cell-button:hover {
    opacity: 1
  }

  .ag-column-drop-vertical {
    min-height: 75px
  }

  .ag-column-drop-vertical-title-bar {
    padding: var(--ag-widget-container-vertical-padding) calc(var(--ag-grid-size)*2) 0
  }

  .ag-column-drop-vertical-empty-message {
    align-items: center;
    border: 1px dashed;
    border-color: var(--ag-border-color);
    display: flex;
    justify-content: center;
    margin: calc(var(--ag-grid-size)*1.5) calc(var(--ag-grid-size)*2);
    padding: calc(var(--ag-grid-size)*2)
  }

  .ag-column-select {
    display: flex;
    flex: 3 1 0px;
    flex-direction: column;
    overflow: hidden;
    position: relative
  }

  .ag-column-select-header {
    flex: none;
    height: var(--ag-header-height);
    padding-left: var(--ag-widget-container-horizontal-padding);
    padding-right: var(--ag-widget-container-horizontal-padding)
  }

  .ag-column-select-column,
  .ag-column-select-column-group,
  .ag-column-select-header {
    align-items: center;
    display: flex;
    gap: var(--ag-widget-horizontal-spacing);
    position: relative
  }

  .ag-column-select-column,
  .ag-column-select-column-group {
    height: 100%
  }

  .ag-column-select-virtual-list-item:focus-visible {
    box-shadow: inset var(--ag-focus-shadow)
  }

  .ag-column-select-header-icon {
    border-radius: var(--ag-border-radius);
    cursor: pointer;
    height: var(--ag-icon-size);
    position: relative;
    width: var(--ag-icon-size)
  }

  .ag-column-select-header-icon:focus-visible {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-column-select-header-filter-wrapper {
    flex: 1 1 auto
  }

  .ag-column-select-header-filter {
    width: 100%
  }

  .ag-column-select-list {
    flex: 1 1 0px;
    overflow: hidden
  }

  .ag-ltr .ag-column-select-column,
  .ag-ltr .ag-column-select-column-group {
    padding-left: calc(var(--ag-indentation-level)*var(--ag-column-select-indent-size))
  }

  .ag-rtl .ag-column-select-column,
  .ag-rtl .ag-column-select-column-group {
    padding-right: calc(var(--ag-indentation-level)*var(--ag-column-select-indent-size))
  }

  .ag-ltr .ag-column-select-add-group-indent {
    margin-left: calc(var(--ag-icon-size) + var(--ag-grid-size)*1.5)
  }

  .ag-rtl .ag-column-select-add-group-indent {
    margin-right: calc(var(--ag-icon-size) + var(--ag-grid-size)*1.5)
  }

  .ag-column-select-column-group:not(:last-child),
  .ag-column-select-column:not(:last-child) {
    margin-bottom: var(--ag-widget-vertical-spacing)
  }

  .ag-column-select-column-group-readonly,
  .ag-column-select-column-readonly {
    opacity: .5;
    pointer-events: none
  }

  .ag-column-select-virtual-list-viewport {
    padding: calc(var(--ag-widget-container-vertical-padding)*.5) 0
  }

  .ag-column-select-virtual-list-item {
    padding: 0 var(--ag-widget-container-horizontal-padding)
  }

  .ag-column-select-column-label {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-column-select-checkbox {
    display: flex
  }

  .ag-set-filter {
    --ag-indentation-level: 0
  }

  .ag-set-filter-item {
    align-items: center;
    display: flex;
    height: 100%
  }

  .ag-set-filter-item-checkbox {
    display: flex;
    height: 100%;
    width: 100%
  }

  .ag-set-filter-group-icons {
    display: block
  }

  .ag-set-filter-group-icons>* {
    cursor: pointer
  }

  .ag-filter-body-wrapper {
    display: flex;
    flex-direction: column
  }

  .ag-filter-filter {
    flex: 1 1 0px
  }

  .ag-filter-condition {
    display: flex;
    justify-content: center
  }

  .ag-floating-filter-body {
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    position: relative
  }

  .ag-floating-filter-full-body {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    overflow: hidden;
    width: 100%
  }

  .ag-floating-filter-full-body>div {
    flex: 1 1 auto
  }

  .ag-floating-filter-input {
    align-items: center;
    display: flex;
    width: 100%
  }

  .ag-floating-filter-input>* {
    flex: 1 1 auto
  }

  .ag-floating-filter-button {
    display: flex;
    flex: none
  }

  .ag-set-floating-filter-input input[disabled] {
    pointer-events: none
  }

  .ag-floating-filter-button-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    height: var(--ag-icon-size);
    width: var(--ag-icon-size)
  }

  .ag-filter-loading {
    height: 100%;
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding);
    position: absolute;
    width: 100%;
    z-index: 1
  }

  .ag-column-panel {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    overflow: hidden
  }

  .ag-pivot-mode-panel {
    display: flex;
    height: var(--ag-header-height)
  }

  .ag-pivot-mode-select {
    align-items: center;
    display: flex
  }

  .ag-ltr .ag-pivot-mode-select {
    margin-left: var(--ag-widget-container-horizontal-padding)
  }

  .ag-rtl .ag-pivot-mode-select {
    margin-right: var(--ag-widget-container-horizontal-padding)
  }

  .ag-column-panel-column-select {
    border-bottom: var(--ag-tool-panel-separator-border);
    border-top: var(--ag-tool-panel-separator-border)
  }

  :where(.ag-column-panel) .ag-column-drop-vertical {
    flex: 1 1 0px;
    min-height: 50px
  }

  :where(.ag-column-panel) .ag-column-drop-vertical:where(:not(.ag-last-column-drop)) {
    border-bottom: var(--ag-tool-panel-separator-border)
  }

  .ag-dnd-ghost {
    align-items: center;
    background-color: var(--ag-drag-ghost-background-color);
    border: var(--ag-drag-ghost-border);
    border-radius: var(--ag-border-radius);
    box-shadow: var(--ag-drag-ghost-shadow);
    color: var(--ag-text-color);
    cursor: move;
    font-weight: 500;
    gap: var(--ag-cell-widget-spacing);
    height: var(--ag-header-height) !important;
    max-width: 200px;
    padding-left: var(--ag-cell-horizontal-padding);
    padding-right: var(--ag-cell-horizontal-padding);
    position: absolute;
    text-overflow: ellipsis;
    transform: translateY(calc(var(--ag-grid-size)*2));
    z-index: 9999
  }

  .ag-dnd-ghost,
  .ag-header {
    display: flex;
    overflow: hidden;
    white-space: nowrap
  }

  .ag-header {
    background-color: var(--ag-header-background-color);
    border-bottom: var(--ag-header-row-border);
    color: var(--ag-header-text-color);
    font-family: var(--ag-header-font-family);
    font-size: var(--ag-header-font-size);
    font-weight: var(--ag-header-font-weight);
    width: 100%
  }

  .ag-header-row {
    height: var(--ag-header-height);
    position: absolute
  }

  .ag-header-row:not(:first-child) .ag-header-cell:not(.ag-header-span-height.ag-header-span-total),
  .ag-header-row:not(:first-child) .ag-header-group-cell.ag-header-group-cell-with-group {
    border-top: var(--ag-header-row-border)
  }

  .ag-header-row:not(.ag-header-row-column-group) {
    overflow: hidden
  }

  .ag-header.ag-header-allow-overflow .ag-header-row {
    overflow: visible
  }

  .ag-header-cell,
  .ag-header-group-cell {
    align-items: center;
    display: inline-flex;
    gap: var(--ag-cell-widget-spacing);
    height: 100%;
    padding: 0 var(--ag-cell-horizontal-padding);
    position: absolute
  }

  :is(.ag-header-cell:not(.ag-floating-filter), .ag-header-group-cell):before {
    background-color: transparent;
    content: "";
    inset: 0;
    position: absolute;
    transition: background-color var(--ag-header-cell-hover-background-transition-duration)
  }

  .ag-header-cell-moving:is(.ag-header-cell:not(.ag-floating-filter), .ag-header-group-cell):before,
  :is(.ag-header-cell:not(.ag-floating-filter), .ag-header-group-cell):hover:before {
    background-color: var(--ag-header-cell-hover-background-color)
  }

  :where(.ag-header-cell:not(.ag-floating-filter) *, .ag-header-group-cell *) {
    position: relative;
    z-index: 1
  }

  .ag-header-cell-filter-button,
  .ag-header-cell.ag-header-active .ag-header-cell-menu-button {
    opacity: 1
  }

  .ag-header-cell-menu-button:not(.ag-header-menu-always-show) {
    opacity: 0;
    transition: opacity .2s
  }

  .ag-header-cell-label,
  .ag-header-group-cell-label {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1 1 auto;
    gap: var(--ag-grid-size)
  }

  .ag-header-cell-label {
    overflow: hidden;
    text-overflow: ellipsis
  }

  .ag-header-group-cell-label.ag-sticky-label {
    flex: none;
    max-width: 100%;
    position: sticky
  }

  .ag-ltr .ag-header-group-cell-label.ag-sticky-label {
    left: var(--ag-cell-horizontal-padding)
  }

  .ag-rtl .ag-header-group-cell-label.ag-sticky-label {
    right: var(--ag-cell-horizontal-padding)
  }

  .ag-header-group-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-header-cell-text {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word
  }

  .ag-header-cell:not(.ag-header-cell-auto-height) .ag-header-cell-comp-wrapper {
    align-items: center;
    display: flex;
    height: 100%
  }

  .ag-header-cell-comp-wrapper {
    width: 100%
  }

  .ag-header-cell-wrap-text .ag-header-cell-comp-wrapper {
    white-space: normal
  }

  .ag-right-aligned-header .ag-header-cell-label {
    flex-direction: row-reverse
  }

  .ag-floating-filter-button-button,
  .ag-header-cell-filter-button,
  .ag-header-cell-menu-button,
  .ag-header-cell-sortable .ag-header-cell-label,
  .ag-header-expand-icon,
  .ag-panel-title-bar-button,
  .ag-side-button-button {
    cursor: pointer
  }

  .ag-advanced-filter-header-cell:focus-visible,
  .ag-header-cell:focus-visible,
  .ag-header-group-cell:focus-visible {
    box-shadow: inset var(--ag-focus-shadow)
  }

  .ag-header-cell:after,
  .ag-header-group-cell:not(.ag-header-span-height.ag-header-group-cell-no-group):after {
    content: "";
    height: var(--ag-header-column-border-height);
    position: absolute;
    top: calc(50% - var(--ag-header-column-border-height)*.5);
    z-index: 1
  }

  .ag-ltr .ag-header-cell:after,
  .ag-ltr .ag-header-group-cell:not(.ag-header-span-height.ag-header-group-cell-no-group):after {
    border-right: var(--ag-header-column-border);
    right: 0
  }

  .ag-rtl .ag-header-cell:after,
  .ag-rtl .ag-header-group-cell:not(.ag-header-span-height.ag-header-group-cell-no-group):after {
    border-left: var(--ag-header-column-border);
    left: 0
  }

  .ag-header-cell-resize {
    align-items: center;
    cursor: ew-resize;
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    width: 8px;
    z-index: 2
  }

  .ag-ltr .ag-header-cell-resize {
    right: -4px
  }

  .ag-rtl .ag-header-cell-resize {
    left: -4px
  }

  .ag-header-cell-resize:after {
    background-color: var(--ag-header-column-resize-handle-color);
    content: "";
    display: var(--ag-header-column-resize-handle-display);
    height: var(--ag-header-column-resize-handle-height);
    position: absolute;
    top: calc(50% - var(--ag-header-column-resize-handle-height)*.5);
    width: var(--ag-header-column-resize-handle-width);
    z-index: 1
  }

  .ag-ltr .ag-header-cell-resize:after {
    left: calc(50% - var(--ag-header-column-resize-handle-width))
  }

  .ag-rtl .ag-header-cell-resize:after {
    right: calc(50% - var(--ag-header-column-resize-handle-width))
  }

  .ag-header-cell.ag-header-span-height .ag-header-cell-resize:after {
    height: calc(100% - var(--ag-grid-size)*4);
    top: calc(var(--ag-grid-size)*2)
  }

  .ag-header-group-cell-no-group.ag-header-span-height .ag-header-cell-resize {
    display: none
  }

  .ag-menu {
    background-color: var(--ag-menu-background-color);
    border: var(--ag-menu-border);
    border-radius: var(--ag-border-radius);
    box-shadow: var(--ag-menu-shadow);
    color: var(--ag-menu-text-color);
    max-height: 100%;
    overflow-y: auto;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-menu-list {
    cursor: default;
    display: table;
    padding: var(--ag-grid-size) 0;
    width: 100%
  }

  .ag-menu-option,
  .ag-menu-separator {
    display: table-row
  }

  .ag-menu-option-part,
  .ag-menu-separator-part {
    display: table-cell;
    vertical-align: middle
  }

  .ag-menu-option-text {
    white-space: nowrap
  }

  .ag-menu-option-custom {
    display: contents
  }

  .ag-compact-menu-option {
    display: flex;
    flex-wrap: nowrap;
    width: 100%
  }

  .ag-compact-menu-option-text {
    flex: 1 1 auto;
    white-space: nowrap
  }

  .ag-menu-separator {
    height: calc(var(--ag-grid-size)*2 + 1px)
  }

  .ag-menu-separator-part:after {
    border-top: 1px solid var(--ag-menu-separator-color);
    content: "";
    display: block
  }

  .ag-compact-menu-option-active,
  .ag-menu-option-active {
    background-color: var(--ag-row-hover-color)
  }

  .ag-compact-menu-option-part,
  .ag-menu-option-part {
    line-height: var(--ag-icon-size);
    padding: calc(var(--ag-grid-size) + 2px) 0
  }

  .ag-compact-menu-option-disabled,
  .ag-menu-option-disabled {
    cursor: not-allowed;
    opacity: .5
  }

  .ag-compact-menu-option-icon,
  .ag-menu-option-icon {
    width: var(--ag-icon-size)
  }

  .ag-ltr .ag-compact-menu-option-icon,
  .ag-ltr .ag-menu-option-icon {
    padding-left: calc(var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-compact-menu-option-icon,
  .ag-rtl .ag-menu-option-icon {
    padding-right: calc(var(--ag-grid-size)*2)
  }

  .ag-compact-menu-option-text,
  .ag-menu-option-text {
    padding-left: calc(var(--ag-grid-size)*2);
    padding-right: calc(var(--ag-grid-size)*2)
  }

  .ag-ltr .ag-compact-menu-option-shortcut,
  .ag-ltr .ag-menu-option-shortcut {
    padding-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-compact-menu-option-shortcut,
  .ag-rtl .ag-menu-option-shortcut {
    padding-left: var(--ag-grid-size)
  }

  .ag-ltr .ag-compact-menu-option-popup-pointer,
  .ag-ltr .ag-menu-option-popup-pointer {
    padding-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-compact-menu-option-popup-pointer,
  .ag-rtl .ag-menu-option-popup-pointer {
    padding-left: var(--ag-grid-size)
  }

  .ag-menu-column-select-wrapper {
    height: 265px;
    overflow: auto
  }

  .ag-menu-column-select-wrapper .ag-column-select {
    height: 100%
  }

  .ag-menu.ag-tabs {
    min-width: 290px
  }

  .ag-filter-separator {
    border-top: 1px solid var(--menu-separator-color)
  }

  .ag-filter-select .ag-picker-field-wrapper {
    width: 0
  }

  .ag-filter-condition-operator {
    height: 17px
  }

  .ag-ltr .ag-filter-condition-operator-or {
    margin-left: calc(var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-filter-condition-operator-or {
    margin-right: calc(var(--ag-grid-size)*2)
  }

  .ag-set-filter-select-all {
    padding-top: var(--ag-widget-container-vertical-padding)
  }

  .ag-filter-no-matches,
  .ag-set-filter-list {
    height: calc(var(--ag-list-item-height)*6)
  }

  .ag-filter-no-matches {
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-set-filter-tree-list {
    height: calc(var(--ag-list-item-height)*10)
  }

  .ag-set-filter-filter {
    margin-left: var(--ag-widget-container-horizontal-padding);
    margin-right: var(--ag-widget-container-horizontal-padding);
    margin-top: var(--ag-widget-container-vertical-padding)
  }

  .ag-filter-to {
    margin-top: var(--ag-widget-vertical-spacing)
  }

  .ag-mini-filter {
    margin: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-ltr .ag-set-filter-item {
    padding-left: calc(var(--ag-widget-container-horizontal-padding) + var(--ag-indentation-level)*var(--ag-set-filter-indent-size))
  }

  .ag-rtl .ag-set-filter-item {
    padding-right: calc(var(--ag-widget-container-horizontal-padding) + var(--ag-indentation-level)*var(--ag-set-filter-indent-size))
  }

  .ag-ltr .ag-set-filter-add-group-indent {
    margin-left: calc(var(--ag-icon-size) + var(--ag-widget-container-horizontal-padding))
  }

  .ag-rtl .ag-set-filter-add-group-indent {
    margin-right: calc(var(--ag-icon-size) + var(--ag-widget-container-horizontal-padding))
  }

  .ag-ltr .ag-set-filter-group-icons {
    margin-right: var(--ag-widget-container-horizontal-padding)
  }

  .ag-rtl .ag-set-filter-group-icons {
    margin-left: var(--ag-widget-container-horizontal-padding)
  }

  .ag-filter-menu .ag-set-filter-list {
    min-width: 200px
  }

  .ag-filter-virtual-list-item:focus-visible {
    box-shadow: inset var(--ag-focus-shadow)
  }

  .ag-filter-apply-panel {
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    padding: var(--ag-widget-vertical-spacing) var(--ag-widget-container-horizontal-padding) var(--ag-widget-container-vertical-padding)
  }

  .ag-filter-apply-panel-button {
    line-height: 1.5
  }

  .ag-ltr .ag-filter-apply-panel-button {
    margin-left: calc(var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-filter-apply-panel-button {
    margin-right: calc(var(--ag-grid-size)*2)
  }

  .ag-simple-filter-body-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--ag-widget-vertical-spacing);
    min-height: calc(var(--ag-list-item-height) + var(--ag-widget-container-vertical-padding) + var(--ag-widget-vertical-spacing));
    overflow-y: auto;
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-simple-filter-body-wrapper .ag-resizer-wrapper {
    margin: 0
  }

  .ag-multi-filter-menu-item {
    margin: var(--ag-grid-size) 0
  }

  .ag-multi-filter-group-title-bar {
    background-color: transparent;
    color: var(--ag-header-text-color);
    font-weight: 500;
    padding: calc(var(--ag-grid-size)*1.5) var(--ag-grid-size)
  }

  .ag-multi-filter-group-title-bar:focus-visible {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-group-filter-field-select-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--ag-widget-vertical-spacing);
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-menu-option .ag-icon {
    opacity: 65%
  }

  .ag-menu-option {
    cursor: pointer;
    font-weight: 500
  }

  .ag-ltr .ag-menu-option-popup-pointer .ag-icon {
    text-align: right
  }

  .ag-rtl .ag-menu-option-popup-pointer .ag-icon {
    text-align: left
  }

  .ag-panel {
    background-color: var(--ag-panel-background-color);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative
  }

  .ag-dialog {
    border: var(--ag-dialog-border);
    border-radius: var(--ag-border-radius);
    box-shadow: var(--ag-dialog-shadow);
    position: absolute
  }

  .ag-panel-title-bar {
    align-items: center;
    background-color: var(--ag-panel-title-bar-background-color);
    border-bottom: var(--ag-panel-title-bar-border);
    color: var(--ag-header-text-color);
    cursor: default;
    display: flex;
    flex: none;
    height: var(--ag-header-height);
    padding: var(--ag-grid-size) var(--ag-cell-horizontal-padding)
  }

  .ag-ltr .ag-panel-title-bar-button {
    margin-left: calc(var(--ag-grid-size)*2);
    margin-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-panel-title-bar-button {
    margin-left: var(--ag-grid-size);
    margin-right: calc(var(--ag-grid-size)*2)
  }

  .ag-panel-title-bar-title {
    color: var(--ag-header-text-color);
    flex: 1 1 auto;
    font-weight: 500
  }

  .ag-panel-title-bar-buttons {
    display: flex
  }

  .ag-panel-title-bar-button {
    cursor: pointer
  }

  .ag-panel-content-wrapper {
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    position: relative
  }

  .ag-resizer {
    pointer-events: none;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    z-index: 1
  }

  .ag-resizer.ag-resizer-topLeft {
    height: 5px;
    left: 0;
    top: 0;
    width: 5px
  }

  .ag-ltr .ag-resizer.ag-resizer-topLeft {
    cursor: nwse-resize
  }

  .ag-rtl .ag-resizer.ag-resizer-topLeft {
    cursor: nesw-resize
  }

  .ag-resizer.ag-resizer-top {
    cursor: ns-resize;
    height: 5px;
    left: 5px;
    right: 5px;
    top: 0
  }

  .ag-resizer.ag-resizer-topRight {
    height: 5px;
    right: 0;
    top: 0;
    width: 5px
  }

  .ag-ltr .ag-resizer.ag-resizer-topRight {
    cursor: nesw-resize
  }

  .ag-rtl .ag-resizer.ag-resizer-topRight {
    cursor: nwse-resize
  }

  .ag-resizer.ag-resizer-right {
    bottom: 5px;
    cursor: ew-resize;
    right: 0;
    top: 5px;
    width: 5px
  }

  .ag-resizer.ag-resizer-bottomRight {
    bottom: 0;
    height: 5px;
    right: 0;
    width: 5px
  }

  .ag-ltr .ag-resizer.ag-resizer-bottomRight {
    cursor: nwse-resize
  }

  .ag-rtl .ag-resizer.ag-resizer-bottomRight {
    cursor: nesw-resize
  }

  .ag-resizer.ag-resizer-bottom {
    bottom: 0;
    cursor: ns-resize;
    height: 5px;
    left: 5px;
    right: 5px
  }

  .ag-resizer.ag-resizer-bottomLeft {
    bottom: 0;
    height: 5px;
    left: 0;
    width: 5px
  }

  .ag-ltr .ag-resizer.ag-resizer-bottomLeft {
    cursor: nesw-resize
  }

  .ag-rtl .ag-resizer.ag-resizer-bottomLeft {
    cursor: nwse-resize
  }

  .ag-resizer.ag-resizer-left {
    bottom: 5px;
    cursor: ew-resize;
    left: 0;
    top: 5px;
    width: 5px
  }

  .ag-dragging-fill-handle .ag-dialog,
  .ag-dragging-range-handle .ag-dialog {
    opacity: .7;
    pointer-events: none
  }

  .ag-pinned-left-header,
  .ag-pinned-right-header {
    display: inline-block;
    overflow: hidden;
    position: relative
  }

  .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-left-spacer:not(.ag-scroller-corner) {
    border-right: var(--ag-pinned-column-border)
  }

  .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-right-spacer:not(.ag-scroller-corner),
  .ag-pinned-right-header {
    border-left: var(--ag-pinned-column-border)
  }

  .ag-pinned-left-header {
    border-right: var(--ag-pinned-column-border)
  }

  .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell) {
    border-left: var(--ag-pinned-column-border)
  }

  .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell) {
    border-right: var(--ag-pinned-column-border)
  }

  .ag-pinned-left-header .ag-header-cell-resize:after {
    left: calc(50% - var(--ag-header-column-resize-handle-width))
  }

  .ag-pinned-right-header .ag-header-cell-resize:after {
    left: 50%
  }

  .ag-pinned-left-header,
  .ag-pinned-right-header {
    height: 100%
  }

  .ag-pinned-left-header .ag-header-cell-resize {
    right: -4px
  }

  .ag-pinned-right-header .ag-header-cell-resize {
    left: -4px
  }

  .ag-layout-print.ag-body {
    display: block;
    height: unset
  }

  .ag-layout-print.ag-root-wrapper {
    display: inline-block
  }

  .ag-layout-print .ag-body-horizontal-scroll,
  .ag-layout-print .ag-body-vertical-scroll {
    display: none
  }

  .ag-layout-print.ag-force-vertical-scroll {
    overflow-y: visible !important
  }

  @media print {
    .ag-root-wrapper.ag-layout-print {
      display: table
    }

    .ag-root-wrapper.ag-layout-print .ag-body-horizontal-scroll-viewport,
    .ag-root-wrapper.ag-layout-print .ag-body-viewport,
    .ag-root-wrapper.ag-layout-print .ag-center-cols-container,
    .ag-root-wrapper.ag-layout-print .ag-center-cols-viewport,
    .ag-root-wrapper.ag-layout-print .ag-root,
    .ag-root-wrapper.ag-layout-print .ag-root-wrapper-body,
    .ag-root-wrapper.ag-layout-print .ag-virtual-list-viewport {
      display: block !important;
      height: auto !important;
      overflow: hidden !important
    }

    .ag-root-wrapper.ag-layout-print .ag-cell,
    .ag-root-wrapper.ag-layout-print .ag-row {
      -moz-column-break-inside: avoid;
      break-inside: avoid
    }
  }

  .ag-select {
    align-items: center;
    display: flex;
    flex-direction: row
  }

  .ag-select .ag-picker-field-wrapper {
    cursor: default
  }

  .ag-ltr .ag-select .ag-picker-field-wrapper {
    padding-left: calc(var(--ag-cell-horizontal-padding)/2);
    padding-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-select .ag-picker-field-wrapper {
    padding-left: var(--ag-grid-size);
    padding-right: calc(var(--ag-cell-horizontal-padding)/2)
  }

  .ag-select.ag-disabled .ag-picker-field-wrapper:focus {
    box-shadow: none
  }

  .ag-select:not(.ag-cell-editor, .ag-label-align-top) {
    min-height: var(--ag-list-item-height)
  }

  .ag-select .ag-picker-field-display {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-select .ag-picker-field-icon {
    align-items: center;
    display: flex
  }

  .ag-select.ag-disabled {
    opacity: .5
  }

  .ag-rich-select {
    cursor: default;
    height: 100%
  }

  .ag-rich-select-value {
    align-items: center;
    background-color: var(--ag-input-background-color);
    display: flex;
    height: 100%;
    padding: var(--ag-grid-size)
  }

  .ag-rich-select-value .ag-picker-field-display {
    overflow: hidden;
    text-overflow: ellipsis
  }

  .ag-rich-select-value .ag-picker-field-display.ag-display-as-placeholder {
    opacity: .5
  }

  .ag-rich-select-list {
    background-color: var(--ag-input-background-color);
    border: var(--ag-input-border);
    border-radius: var(--ag-input-border-radius);
    box-shadow: var(--ag-dropdown-shadow);
    height: auto;
    position: relative;
    width: 100%
  }

  .ag-rich-select-list .ag-loading-text {
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding)
  }

  .ag-rich-select-row {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    overflow: hidden;
    padding: 0 var(--ag-grid-size);
    white-space: nowrap
  }

  .ag-rich-select-row-selected {
    background-color: var(--ag-selected-row-background-color)
  }

  .ag-rich-select-row-highlighted,
  .ag-rich-select-row:hover {
    background-image: linear-gradient(var(--ag-row-hover-color), var(--ag-row-hover-color))
  }

  .ag-rich-select-row-text-highlight {
    font-weight: 700
  }

  .ag-rich-select-field-input {
    flex: 1 1 auto
  }

  .ag-ltr .ag-rich-select-field-input {
    left: var(--ag-grid-size)
  }

  .ag-rtl .ag-rich-select-field-input {
    right: var(--ag-grid-size)
  }

  .ag-rich-select-field-input .ag-input-field-input {
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    text-overflow: ellipsis
  }

  .ag-rich-select-field-input .ag-input-field-input::-moz-placeholder {
    opacity: .8
  }

  .ag-rich-select-field-input .ag-input-field-input::placeholder {
    opacity: .8
  }

  .ag-popup-editor .ag-rich-select-value {
    height: var(--ag-row-height);
    min-width: 200px
  }

  .ag-rich-select-virtual-list-item {
    cursor: default;
    height: var(--ag-list-item-height)
  }

  .ag-pill-container {
    display: flex;
    flex-wrap: nowrap;
    gap: .25rem
  }

  .ag-pill {
    align-items: center;
    background: var(--ag-select-cell-background-color);
    border: var(--ag-select-cell-border);
    border-radius: var(--ag-border-radius);
    display: flex;
    padding: 0 .25rem;
    white-space: nowrap
  }

  .ag-pill:focus-visible {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-pill .ag-pill-button {
    border: none;
    padding: 0
  }

  .ag-ltr .ag-pill .ag-pill-button {
    margin-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-pill .ag-pill-button {
    margin-right: var(--ag-grid-size)
  }

  .ag-pill .ag-pill-button:hover {
    color: var(--ag-accent-color);
    cursor: pointer
  }

  .ag-root-wrapper {
    cursor: default;
    display: flex;
    flex-direction: column;
    line-height: normal;
    overflow: hidden;
    position: relative;
    white-space: normal;
    -webkit-font-smoothing: antialiased;
    background-color: var(--ag-background-color);
    border: var(--ag-wrapper-border);
    border-radius: var(--ag-wrapper-border-radius);
    color: var(--ag-text-color);
    color-scheme: var(--ag-color-scheme);
    font-family: var(--ag-font-family);
    font-size: var(--ag-font-size)
  }

  .ag-root-wrapper.ag-layout-normal {
    height: 100%
  }

  .ag-popup,
  .ag-root-wrapper {
    --ag-indentation-level: 0
  }

  .ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize {
    right: -3px
  }

  .ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize,
  .ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize {
    left: -3px
  }

  .ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize {
    right: -3px
  }

  .ag-tool-panel-wrapper {
    width: var(--ag-side-bar-panel-width)
  }

  .ag-side-bar {
    background-color: var(--ag-side-bar-background-color);
    display: flex;
    flex-direction: row-reverse;
    position: relative
  }

  .ag-side-bar-left {
    flex-direction: row;
    order: -1
  }

  .ag-side-buttons {
    position: relative;
    width: calc(var(--ag-icon-size) + var(--ag-grid-size)*2)
  }

  .ag-side-button.ag-selected {
    background-color: var(--ag-side-button-selected-background-color);
    border-bottom: var(--ag-side-button-selected-border)
  }

  .ag-side-button.ag-selected:not(:first-of-type) {
    border-top: var(--ag-side-button-selected-border)
  }

  .ag-side-button-button {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--ag-grid-size);
    padding: calc(var(--ag-grid-size)*3) 0;
    position: relative;
    white-space: nowrap;
    width: 100%
  }

  .ag-side-button-button:focus {
    box-shadow: none
  }

  .ag-side-button-button:focus-visible {
    box-shadow: inset var(--ag-focus-shadow)
  }

  .ag-side-button-label {
    writing-mode: vertical-lr
  }

  @media (max-resolution:1.5x) {
    .ag-side-button-label {
      font-family: "Segoe UI", var(--ag-font-family)
    }

    .ag-ltr .ag-side-button-label {
      transform: rotate(.05deg)
    }

    .ag-rtl .ag-side-button-label {
      transform: rotate(-.05deg)
    }
  }

  .ag-ltr .ag-side-bar-left,
  .ag-rtl .ag-side-bar-right {
    border-right: var(--ag-side-panel-border)
  }

  .ag-ltr .ag-side-bar-left .ag-tool-panel-wrapper,
  .ag-ltr .ag-side-bar-right,
  .ag-rtl .ag-side-bar-left,
  .ag-rtl .ag-side-bar-right .ag-tool-panel-wrapper {
    border-left: var(--ag-side-panel-border)
  }

  .ag-ltr .ag-side-bar-right .ag-tool-panel-wrapper,
  .ag-rtl .ag-side-bar-left .ag-tool-panel-wrapper {
    border-right: var(--ag-side-panel-border)
  }

  .ag-ltr .ag-chart-menu-panel {
    border-left: var(--ag-side-panel-border)
  }

  .ag-rtl .ag-chart-menu-panel {
    border-right: var(--ag-side-panel-border)
  }

  .ag-button {
    border-radius: 0
  }

  .ag-standard-button {
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--ag-background-color);
    border: var(--ag-input-border);
    border-radius: var(--ag-border-radius);
    cursor: pointer;
    font-family: inherit;
    padding: var(--ag-grid-size) calc(var(--ag-grid-size)*2)
  }

  .ag-standard-button:hover {
    background-color: var(--ag-row-hover-color)
  }

  .ag-standard-button:active {
    border-color: var(--ag-accent-color)
  }

  .ag-standard-button:disabled {
    background-color: var(--ag-input-disabled-background-color);
    border: var(--ag-input-disabled-border);
    color: var(--ag-input-disabled-text-color)
  }

  :where(input[class^=ag-][type=button], button[class^=ag-]):focus-visible {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-checkbox-input-wrapper,
  .ag-radio-button-input-wrapper {
    background-color: var(--ag-checkbox-unchecked-background-color);
    border: solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);
    flex: none;
    height: var(--ag-icon-size);
    position: relative;
    width: var(--ag-icon-size)
  }

  .ag-checkbox-input-wrapper input,
  .ag-radio-button-input-wrapper input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 100%;
    opacity: 0;
    width: 100%
  }

  .ag-checkbox-input-wrapper:after,
  .ag-radio-button-input-wrapper:after {
    content: "";
    display: block;
    inset: 0;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    pointer-events: none;
    position: absolute
  }

  .ag-checkbox-input-wrapper.ag-checked,
  .ag-radio-button-input-wrapper.ag-checked {
    background-color: var(--ag-checkbox-checked-background-color);
    border-color: var(--ag-checkbox-checked-border-color)
  }

  .ag-checkbox-input-wrapper.ag-checked:after,
  .ag-radio-button-input-wrapper.ag-checked:after {
    background-color: var(--ag-checkbox-checked-shape-color)
  }

  .ag-checkbox-input-wrapper:active,
  .ag-checkbox-input-wrapper:focus-within,
  .ag-radio-button-input-wrapper:active,
  .ag-radio-button-input-wrapper:focus-within {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-checkbox-input-wrapper.ag-disabled,
  .ag-radio-button-input-wrapper.ag-disabled {
    filter: grayscale();
    opacity: .5
  }

  .ag-checkbox-input-wrapper {
    border-radius: var(--ag-checkbox-border-radius)
  }

  .ag-checkbox-input-wrapper.ag-checked:after {
    -webkit-mask-image: var(--ag-checkbox-checked-shape-image);
    mask-image: var(--ag-checkbox-checked-shape-image)
  }

  .ag-checkbox-input-wrapper.ag-indeterminate {
    background-color: var(--ag-checkbox-indeterminate-background-color);
    border-color: var(--ag-checkbox-indeterminate-border-color)
  }

  .ag-checkbox-input-wrapper.ag-indeterminate:after {
    background-color: var(--ag-checkbox-indeterminate-shape-color);
    -webkit-mask-image: var(--ag-checkbox-indeterminate-shape-image);
    mask-image: var(--ag-checkbox-indeterminate-shape-image)
  }

  .ag-radio-button-input-wrapper {
    border-radius: 100%
  }

  .ag-radio-button-input-wrapper.ag-checked:after {
    -webkit-mask-image: var(--ag-radio-checked-shape-image);
    mask-image: var(--ag-radio-checked-shape-image)
  }

  .ag-drag-handle {
    color: varXXX(--ag-icon-font-color);
    cursor: grab
  }

  .ag-list-item,
  .ag-virtual-list-item {
    height: var(--ag-list-item-height)
  }

  .ag-virtual-list-item {
    position: absolute;
    width: 100%
  }

  .ag-select-list {
    background-color: var(--ag-background-color);
    border: var(--ag-input-border);
    border-radius: var(--ag-border-radius);
    box-shadow: var(--ag-dropdown-shadow);
    overflow-x: hidden;
    overflow-y: auto
  }

  .ag-list-item {
    align-items: center;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-list-item.ag-active-item {
    background-color: var(--ag-row-hover-color)
  }

  .ag-select-list-item {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-ltr .ag-select-list-item {
    padding-left: calc(var(--ag-cell-horizontal-padding)/2)
  }

  .ag-rtl .ag-select-list-item {
    padding-right: calc(var(--ag-cell-horizontal-padding)/2)
  }

  .ag-select-list-item span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-list-item-hovered:after {
    background-color: var(--ag-range-selection-border-color);
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0
  }

  .ag-item-highlight-top:after {
    top: 0
  }

  .ag-item-highlight-bottom:after {
    bottom: 0
  }

  .ag-range-field {
    align-items: center;
    display: flex
  }

  .ag-range-field .ag-input-wrapper {
    height: 100%
  }

  input[class^=ag-][type=range] {
    -webkit-appearance: none;
    background: none;
    height: 100%;
    overflow: visible;
    padding: 0;
    width: 100%
  }

  input[class^=ag-][type=range]::-webkit-slider-runnable-track {
    background-color: var(--ag-border-color);
    border-radius: 1.5px;
    height: 3px;
    margin: 0;
    padding: 0;
    width: 100%
  }

  input[class^=ag-][type=range]::-moz-range-track {
    background-color: var(--ag-border-color);
    border-radius: 1.5px;
    height: 3px;
    margin: 0;
    padding: 0;
    width: 100%
  }

  input[class^=ag-][type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: var(--ag-background-color);
    border: 1px solid var(--ag-border-color);
    border-radius: 100%;
    height: var(--ag-icon-size);
    margin: 0;
    padding: 0;
    transform: translateY(calc(var(--ag-icon-size)*-.5 + 1.5px));
    width: var(--ag-icon-size)
  }

  input[class^=ag-][type=range]::-moz-ag-range-thumb {
    -webkit-appearance: none;
    background-color: var(--ag-background-color);
    border: 1px solid var(--ag-border-color);
    border-radius: 100%;
    height: var(--ag-icon-size);
    margin: 0;
    padding: 0;
    transform: translateY(calc(var(--ag-icon-size)*-.5 + 1.5px));
    width: var(--ag-icon-size)
  }

  input[class^=ag-][type=range]:focus::-webkit-slider-thumb {
    border-color: var(--ag-accent-color);
    box-shadow: var(--ag-focus-shadow)
  }

  input[class^=ag-][type=range]:focus::-moz-ag-range-thumb {
    border-color: var(--ag-accent-color);
    box-shadow: var(--ag-focus-shadow)
  }

  input[class^=ag-][type=range]:active::-webkit-slider-runnable-track {
    background-color: var(--ag-accent-color)
  }

  input[class^=ag-][type=range]:active::-moz-ag-range-track {
    background-color: var(--ag-accent-color)
  }

  input[class^=ag-][type=range]:disabled {
    opacity: .5
  }

  .ag-toggle-button {
    flex: none;
    min-width: unset;
    width: unset
  }

  .ag-toggle-button-input-wrapper {
    background-color: var(--ag-toggle-button-off-background-color);
    border: solid var(--ag-toggle-button-border-width) var(--ag-toggle-button-off-border-color);
    border-radius: calc(var(--ag-toggle-button-height)*.5);
    flex: none;
    height: var(--ag-toggle-button-height);
    max-width: var(--ag-toggle-button-width);
    min-width: var(--ag-toggle-button-width);
    position: relative
  }

  .ag-toggle-button-input-wrapper input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 100%;
    opacity: 0;
    width: 100%
  }

  .ag-toggle-button-input-wrapper:before {
    background-color: var(--ag-toggle-button-switch-background-color);
    border: var(--ag-toggle-button-border-width) solid var(--ag-toggle-button-switch-border-color);
    border-radius: 100%;
    content: "";
    display: block;
    height: var(--ag-toggle-button-height);
    pointer-events: none;
    position: absolute;
    top: calc(0px - var(--ag-toggle-button-border-width));
    width: var(--ag-toggle-button-height)
  }

  .ag-ltr .ag-toggle-button-input-wrapper:before {
    left: calc(0px - var(--ag-toggle-button-border-width));
    transition: left .1s
  }

  .ag-rtl .ag-toggle-button-input-wrapper:before {
    right: calc(0px - var(--ag-toggle-button-border-width));
    transition: right .1s
  }

  .ag-toggle-button-input-wrapper.ag-checked {
    background-color: var(--ag-toggle-button-on-background-color)
  }

  .ag-toggle-button-input-wrapper.ag-checked,
  .ag-toggle-button-input-wrapper.ag-checked:before {
    border-color: var(--ag-toggle-button-on-border-color)
  }

  .ag-ltr .ag-toggle-button-input-wrapper.ag-checked:before {
    left: calc(100% - var(--ag-toggle-button-height) + var(--ag-toggle-button-border-width))
  }

  .ag-rtl .ag-toggle-button-input-wrapper.ag-checked:before {
    right: calc(100% - var(--ag-toggle-button-height) + var(--ag-toggle-button-border-width))
  }

  .ag-toggle-button-input-wrapper:focus-within {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-toggle-button-input-wrapper.ag-disabled {
    opacity: .5
  }

  .ag-autocomplete {
    align-items: center;
    display: flex;
    width: 100%
  }

  .ag-autocomplete>* {
    flex: 1 1 auto
  }

  .ag-autocomplete-list-popup {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
  }

  .ag-autocomplete-list {
    height: calc(var(--ag-row-height)*6.5);
    min-width: 200px;
    position: relative;
    width: 100%
  }

  .ag-autocomplete-virtual-list-item {
    cursor: default;
    display: flex;
    height: var(--ag-list-item-height)
  }

  .ag-autocomplete-virtual-list-item:focus-visible:after {
    content: none
  }

  .ag-autocomplete-virtual-list-item:hover {
    background-color: var(--ag-row-hover-color)
  }

  .ag-autocomplete-row {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden
  }

  .ag-autocomplete-row-label {
    margin: 0 var(--ag-widget-container-horizontal-padding);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-autocomplete-row-selected {
    background-color: var(--ag-selected-row-background-color)
  }

  .ag-tooltip {
    background-color: var(--ag-tooltip-background-color);
    border: var(--ag-tooltip-border);
    border-radius: var(--ag-border-radius);
    color: var(--ag-tooltip-text-color);
    padding: var(--ag-widget-container-vertical-padding) var(--ag-widget-container-horizontal-padding);
    white-space: normal
  }

  .ag-tooltip,
  .ag-tooltip-custom {
    position: absolute;
    z-index: 99999
  }

  .ag-tooltip-custom:not(.ag-tooltip-interactive),
  .ag-tooltip:not(.ag-tooltip-interactive) {
    pointer-events: none
  }

  .ag-tooltip-custom.ag-tooltip-animate,
  .ag-tooltip.ag-tooltip-animate {
    transition: opacity 1s
  }

  .ag-tooltip-custom.ag-tooltip-animate.ag-tooltip-hiding,
  .ag-tooltip.ag-tooltip-animate.ag-tooltip-hiding {
    opacity: 0
  }

  .ag-angle-select {
    align-items: center;
    display: flex
  }

  .ag-angle-select-wrapper {
    display: flex
  }

  .ag-angle-select-parent-circle {
    display: block;
    position: relative
  }

  .ag-angle-select-child-circle {
    position: absolute
  }

  .ag-slider-wrapper {
    display: flex
  }

  .ag-picker-field-display,
  .ag-slider-wrapper .ag-input-field {
    flex: 1 1 auto
  }

  .ag-picker-field {
    align-items: center;
    display: flex
  }

  .ag-picker-field-icon {
    border: 0;
    cursor: pointer;
    display: flex;
    margin: 0;
    padding: 0
  }

  .ag-color-panel {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%
  }

  .ag-spectrum-color {
    cursor: default;
    flex: 1 1 auto;
    overflow: visible;
    position: relative
  }

  .ag-spectrum-fill {
    inset: 0;
    position: absolute
  }

  .ag-spectrum-val {
    cursor: pointer
  }

  .ag-spectrum-dragger {
    cursor: pointer;
    pointer-events: none;
    position: absolute
  }

  .ag-spectrum-alpha,
  .ag-spectrum-hue {
    cursor: default
  }

  .ag-spectrum-hue-background {
    background: linear-gradient(270deg, red 3%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
    height: 100%;
    width: 100%
  }

  .ag-spectrum-alpha-background {
    background: linear-gradient(to right, var(--ag-internal-spectrum-alpha-color-from), var(--ag-internal-spectrum-alpha-color-to)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect x="0" y="0" width="4" height="4" fill="%23fff"/><path d="M0 0H2V4H4V2H0Z" fill="%23b2b2b2"/></svg>') 0 0 /4px 4px;
    height: 100%;
    width: 100%
  }

  .ag-spectrum-tool {
    cursor: pointer;
    position: relative
  }

  .ag-spectrum-slider {
    pointer-events: none;
    position: absolute
  }

  .ag-spectrum-alpha .ag-spectrum-slider {
    background: linear-gradient(to bottom, var(--ag-internal-spectrum-alpha-color), var(--ag-internal-spectrum-alpha-color)) var(--ag-background-color)
  }

  .ag-recent-colors {
    display: flex;
    gap: 6px;
    margin-top: 10px
  }

  .ag-recent-color {
    cursor: pointer
  }

  .ag-angle-select[disabled] {
    opacity: .5;
    pointer-events: none
  }

  .ag-ltr .ag-angle-select-field,
  .ag-ltr .ag-slider-field {
    margin-right: calc(var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-angle-select-field,
  .ag-rtl .ag-slider-field {
    margin-left: calc(var(--ag-grid-size)*2)
  }

  .ag-angle-select-parent-circle {
    background-color: var(--ag-background-color);
    border: 1px solid;
    border-color: var(--ag-border-color);
    border-radius: 12px;
    height: 24px;
    width: 24px
  }

  .ag-angle-select-child-circle {
    background-color: var(--ag-foreground-color);
    border-radius: 3px;
    height: 6px;
    left: 12px;
    margin-left: -3px;
    margin-top: -4px;
    top: 4px;
    width: 6px
  }

  .ag-picker-field-wrapper {
    background-color: var(--ag-background-color);
    border: var(--ag-input-border);
    border-radius: 5px;
    min-height: max(var(--ag-list-item-height), calc(var(--ag-grid-size)*4));
    overflow: hidden
  }

  .ag-picker-field-wrapper:disabled {
    opacity: .5
  }

  .ag-picker-field-wrapper.ag-picker-has-focus,
  .ag-picker-field-wrapper:focus-within {
    border: var(--ag-input-focus-border);
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-picker-field-button {
    background-color: var(--ag-background-color)
  }

  .ag-dialog.ag-color-dialog {
    border-radius: 5px
  }

  .ag-color-picker .ag-picker-field-wrapper {
    padding-left: var(--ag-grid-size);
    padding-right: var(--ag-grid-size)
  }

  .ag-color-picker .ag-picker-field-display {
    align-items: center;
    display: flex;
    flex-direction: row;
    min-height: var(--ag-list-item-height)
  }

  .ag-ltr .ag-color-picker-color,
  .ag-ltr .ag-color-picker-value {
    margin-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-color-picker-color,
  .ag-rtl .ag-color-picker-value {
    margin-left: var(--ag-grid-size)
  }

  .ag-color-panel {
    padding: var(--ag-grid-size)
  }

  .ag-spectrum-tools {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0
  }

  .ag-spectrum-tool {
    height: 12px
  }

  .ag-spectrum-alpha-background,
  .ag-spectrum-hue-background {
    border-radius: 12px
  }

  .ag-spectrum-slider {
    border: 3px solid #f8f8f8;
    border-radius: 18px;
    height: 18px;
    margin-top: -15px;
    width: 18px
  }

  .ag-recent-colors {
    margin-bottom: 2px;
    margin-left: var(--ag-grid-size);
    margin-right: var(--ag-grid-size)
  }

  .ag-color-input-color,
  .ag-color-picker-color,
  .ag-recent-color {
    border-radius: 4px
  }

  .ag-recent-color {
    border: 1px solid var(--ag-border-color)
  }

  .ag-spectrum-sat {
    background-image: linear-gradient(90deg, #fff, hsla(20, 42%, 65%, 0))
  }

  .ag-spectrum-val {
    background-image: linear-gradient(0deg, #000, hsla(20, 42%, 65%, 0))
  }

  .ag-spectrum-dragger {
    background: #000;
    border: 3px solid #fff;
    border-radius: 18px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, .24);
    height: 18px;
    width: 18px
  }

  .ag-spectrum-alpha-background,
  .ag-spectrum-hue-background {
    border-radius: 2px
  }

  .ag-spectrum-tool {
    border-radius: 2px;
    height: 11px;
    margin-bottom: 10px
  }

  .ag-spectrum-slider {
    border: 2px solid #fff;
    border-radius: 13px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .37);
    height: 13px;
    margin-top: -12px;
    width: 13px
  }

  .ag-recent-color:focus-visible:not(:disabled):not([readonly]),
  .ag-spectrum-color:focus-visible:not(:disabled):not([readonly]),
  .ag-spectrum-slider:focus-visible:not(:disabled):not([readonly]) {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-ltr .ag-color-input input.ag-input-field-input[class^=ag-][type=text] {
    padding-left: calc(var(--ag-icon-size) + var(--ag-grid-size)*2)
  }

  .ag-rtl .ag-color-input input.ag-input-field-input[class^=ag-][type=text] {
    padding-right: calc(var(--ag-icon-size) + var(--ag-grid-size)*2)
  }

  .ag-color-input .ag-color-input-color {
    position: absolute
  }

  .ag-ltr .ag-color-input .ag-color-input-color {
    margin-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-color-input .ag-color-input-color {
    margin-right: var(--ag-grid-size)
  }

  .ag-color-input-color,
  .ag-color-picker-color {
    border: 1px solid var(--ag-border-color);
    border-radius: 2px;
    height: var(--ag-icon-size);
    width: var(--ag-icon-size)
  }

  .ag-pill-select .ag-picker-field-display {
    color: var(--ag-chart-menu-label-color);
    font-weight: 500
  }

  .ag-pill-select .ag-picker-field-icon .ag-icon {
    color: var(--ag-chart-menu-label-color)
  }

  .ag-filter-toolpanel {
    flex: 1 1 0px;
    min-width: 0
  }

  .ag-filter-toolpanel-header {
    position: relative
  }

  .ag-filter-toolpanel-header,
  .ag-filter-toolpanel-header>*,
  .ag-filter-toolpanel-search,
  .ag-filter-toolpanel-search>* {
    align-items: center;
    display: flex
  }

  .ag-filter-toolpanel-header {
    height: calc(var(--ag-grid-size)*6)
  }

  .ag-filter-toolpanel-header:focus-visible {
    border-radius: var(--ag-border-radius);
    box-shadow: inset var(--ag-focus-shadow)
  }

  .ag-filter-toolpanel-header,
  .ag-filter-toolpanel-search {
    padding: 0 var(--ag-grid-size)
  }

  .ag-filter-toolpanel-group:not(.ag-has-filter)>.ag-group-title-bar .ag-filter-toolpanel-group-instance-header-icon {
    display: none
  }

  .ag-filter-toolpanel-group-level-0-header {
    height: calc(var(--ag-grid-size)*8)
  }

  .ag-filter-toolpanel-group-item {
    margin-bottom: calc(var(--ag-grid-size)*.5);
    margin-top: calc(var(--ag-grid-size)*.5)
  }

  .ag-filter-toolpanel-search {
    margin-bottom: var(--ag-grid-size);
    margin-top: var(--ag-widget-container-vertical-padding)
  }

  .ag-filter-toolpanel-search-input {
    flex-grow: 1;
    height: calc(var(--ag-grid-size)*4)
  }

  .ag-ltr .ag-filter-toolpanel-group-title-bar-icon {
    margin-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-filter-toolpanel-group-title-bar-icon {
    margin-left: var(--ag-grid-size)
  }

  .ag-filter-toolpanel-expand {
    cursor: pointer
  }

  .ag-ltr .ag-filter-toolpanel-expand {
    margin-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-filter-toolpanel-expand {
    margin-left: var(--ag-grid-size)
  }

  .ag-ltr .ag-filter-toolpanel-group-title-bar,
  .ag-ltr .ag-filter-toolpanel-instance-header {
    padding-left: calc(var(--ag-grid-size) + var(--ag-filter-tool-panel-group-indent)*var(--ag-indentation-level))
  }

  .ag-rtl .ag-filter-toolpanel-group-title-bar,
  .ag-rtl .ag-filter-toolpanel-instance-header {
    padding-right: calc(var(--ag-grid-size) + var(--ag-filter-tool-panel-group-indent)*var(--ag-indentation-level))
  }

  .ag-ltr .ag-filter-toolpanel-instance-body {
    margin-left: var(--ag-filter-tool-panel-group-indent)
  }

  .ag-rtl .ag-filter-toolpanel-instance-body {
    margin-right: var(--ag-filter-tool-panel-group-indent)
  }

  .ag-ltr .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header {
    padding-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header {
    padding-right: var(--ag-grid-size)
  }

  .ag-ltr .ag-filter-toolpanel-group-instance-header-icon,
  .ag-ltr .ag-filter-toolpanel-instance-header-icon {
    margin-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-filter-toolpanel-group-instance-header-icon,
  .ag-rtl .ag-filter-toolpanel-instance-header-icon {
    margin-right: var(--ag-grid-size)
  }

  .ag-filter-toolpanel-instance-filter {
    background-color: var(--ag-chrome-background-color)
  }

  .ag-filter-toolpanel-group-level-0 {
    border-top: none
  }

  .ag-filter-toolpanel-header {
    height: auto;
    padding-bottom: var(--ag-grid-size);
    padding-top: var(--ag-grid-size)
  }

  .ag-filter-toolpanel-group-item {
    margin: 0
  }

  .ag-filter-toolpanel-header,
  .ag-filter-toolpanel-search {
    color: var(--ag-header-text-color);
    font-weight: 500
  }

  .ag-paging-panel {
    align-items: center;
    border-top: var(--ag-footer-row-border);
    display: flex;
    gap: calc(var(--ag-grid-size)*4);
    height: max(var(--ag-row-height), 22px);
    justify-content: flex-end;
    padding: 0 var(--ag-cell-horizontal-padding)
  }

  .ag-paging-page-size .ag-wrapper {
    min-width: 50px
  }

  .ag-paging-page-summary-panel {
    align-items: center;
    display: flex;
    gap: var(--ag-cell-widget-spacing)
  }

  .ag-disabled .ag-paging-page-summary-panel {
    pointer-events: none
  }

  .ag-paging-button {
    cursor: pointer;
    position: relative
  }

  .ag-paging-button:focus-visible {
    box-shadow: var(--ag-focus-shadow)
  }

  .ag-paging-button.ag-disabled {
    cursor: default;
    opacity: .5
  }

  .ag-paging-number,
  .ag-paging-row-summary-panel-number {
    font-weight: 500
  }

  .ag-status-bar {
    border-top: var(--ag-footer-row-border);
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
    overflow: hidden;
    padding-left: calc(var(--ag-grid-size)*4);
    padding-right: calc(var(--ag-grid-size)*4)
  }

  .ag-status-panel {
    display: inline-flex
  }

  .ag-status-name-value {
    white-space: nowrap
  }

  .ag-status-bar-center,
  .ag-status-bar-left,
  .ag-status-bar-right {
    display: inline-flex
  }

  .ag-status-bar-center {
    text-align: center
  }

  .ag-status-name-value {
    margin-left: var(--ag-grid-size);
    margin-right: var(--ag-grid-size);
    padding-bottom: var(--ag-widget-container-vertical-padding);
    padding-top: var(--ag-widget-container-vertical-padding)
  }

  .ag-status-name-value-value {
    font-weight: 500
  }

  .ag-overlay {
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 2
  }

  .ag-overlay-panel,
  .ag-overlay-wrapper {
    display: flex;
    height: 100%;
    width: 100%
  }

  .ag-overlay-wrapper {
    align-items: center;
    flex: none;
    justify-content: center;
    text-align: center
  }

  .ag-overlay-loading-wrapper {
    pointer-events: all
  }

  .ag-overlay-loading-center {
    background: var(--ag-background-color);
    border: 1px solid var(--ag-border-color);
    border-radius: var(--ag-border-radius);
    box-shadow: var(--ag-popup-shadow);
    padding: var(--ag-grid-size)
  }

  .ag-icon {
    display: block;
    height: var(--ag-icon-size);
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: var(--ag-icon-size)
  }

  .ag-column-select-column-group-readonly .ag-icon,
  .ag-disabled .ag-icon,
  [disabled] .ag-icon {
    opacity: .5
  }

  .ag-icon-grip {
    opacity: .7
  }

  .ag-column-select-column-readonly .ag-icon-grip,
  .ag-column-select-column-readonly.ag-icon-grip {
    opacity: .35
  }

  :is(.ag-header-cell-menu-button, .ag-header-cell-filter-button, .ag-panel-title-bar-button, .ag-header-expand-icon, .ag-column-group-icons, .ag-set-filter-group-icons, .ag-group-expanded .ag-icon, .ag-group-contracted .ag-icon, .ag-chart-settings-prev, .ag-chart-settings-next, .ag-group-title-bar-icon, .ag-column-select-header-icon, .ag-floating-filter-button-button, .ag-filter-toolpanel-expand, .ag-panel-title-bar-button-icon, .ag-chart-menu-icon):hover {
    background-color: var(--ag-icon-button-hover-color);
    border-radius: 1px;
    box-shadow: 0 0 0 4px var(--ag-icon-button-hover-color)
  }

  .ag-filter-active {
    --ag-icon-button-hover-color: color-mix(in srgb, transparent, var(--ag-accent-color) 28%);
    background-color: color-mix(in srgb, transparent, var(--ag-accent-color) 14%);
    border-radius: 1px;
    box-shadow: 0 0 0 4px color-mix(in srgb, transparent, var(--ag-accent-color) 14%);
    position: relative
  }

  .ag-filter-active:after {
    background-color: var(--ag-accent-color);
    border-radius: 50%;
    content: "";
    height: 6px;
    position: absolute;
    top: -1px;
    width: 6px
  }

  .ag-ltr .ag-filter-active:after {
    right: -1px
  }

  .ag-rtl .ag-filter-active:after {
    left: -1px
  }

  .ag-filter-active .ag-icon-filter {
    clip-path: path("M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z")
  }

  .ag-label-align-right .ag-label {
    order: 1
  }

  .ag-label-align-right>* {
    flex: none
  }

  .ag-label-align-top {
    align-items: flex-start;
    flex-direction: column
  }

  .ag-label-align-top>* {
    align-self: stretch
  }

  .ag-label-ellipsis {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ag-label {
    white-space: nowrap
  }

  .ag-ltr .ag-label {
    margin-right: var(--ag-grid-size)
  }

  .ag-rtl .ag-label {
    margin-left: var(--ag-grid-size)
  }

  .ag-label-align-top .ag-label {
    margin-bottom: calc(var(--ag-grid-size)*.5)
  }

  .ag-ltr .ag-label-align-right .ag-label {
    margin-left: var(--ag-grid-size)
  }

  .ag-rtl .ag-label-align-right .ag-label {
    margin-right: var(--ag-grid-size)
  }


  /* Part iconSet/alpine */
  .ag-icon:before {
    background-color: currentColor;
    content: "";
    display: block;
    height: var(--ag-icon-size);
    -webkit-mask-size: contain;
    mask-size: contain;
    width: var(--ag-icon-size)
  }

  .ag-icon-aggregation:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M24 6H8v2l8 8-8 8v2h16v-2H11l8-8-8-8h13z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M24 6H8v2l8 8-8 8v2h16v-2H11l8-8-8-8h13z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-arrows:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M7.515 11.171 2.687 16l4.828 4.829-1.414 1.414L-.142 16l6.243-6.243zm16.97 0 1.414-1.414L32.142 16l-6.243 6.243-1.414-1.414L29.313 16zM16.028 13.2l2.829 2.828-2.829 2.829-2.828-2.829zm-4.857 11.285L16 29.313l4.829-4.828 1.414 1.414L16 32.142l-6.243-6.243zm0-16.97L9.757 6.101 16-.142l6.243 6.243-1.414 1.414L16 2.687z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M7.515 11.171 2.687 16l4.828 4.829-1.414 1.414L-.142 16l6.243-6.243zm16.97 0 1.414-1.414L32.142 16l-6.243 6.243-1.414-1.414L29.313 16zM16.028 13.2l2.829 2.828-2.829 2.829-2.828-2.829zm-4.857 11.285L16 29.313l4.829-4.828 1.414 1.414L16 32.142l-6.243-6.243zm0-16.97L9.757 6.101 16-.142l6.243 6.243-1.414 1.414L16 2.687z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-asc:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m5.333 16 1.88 1.88 7.453-7.44v16.227h2.667V10.44l7.44 7.453L26.666 16 15.999 5.333 5.332 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m5.333 16 1.88 1.88 7.453-7.44v16.227h2.667V10.44l7.44 7.453L26.666 16 15.999 5.333 5.332 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-cancel:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M16 2.667A13.32 13.32 0 0 0 2.667 16c0 7.373 5.96 13.333 13.333 13.333S29.333 23.373 29.333 16 23.373 2.667 16 2.667m6.667 18.12-1.88 1.88L16 17.88l-4.787 4.787-1.88-1.88L14.12 16l-4.787-4.787 1.88-1.88L16 14.12l4.787-4.787 1.88 1.88L17.88 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M16 2.667A13.32 13.32 0 0 0 2.667 16c0 7.373 5.96 13.333 13.333 13.333S29.333 23.373 29.333 16 23.373 2.667 16 2.667m6.667 18.12-1.88 1.88L16 17.88l-4.787 4.787-1.88-1.88L14.12 16l-4.787-4.787 1.88-1.88L16 14.12l4.787-4.787 1.88 1.88L17.88 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-chart:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath d='M14 7h4v18h-4zM8 17h4v8H8zM20 13h4v12h-4z'/%3E%3C/g%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath d='M14 7h4v18h-4zM8 17h4v8H8zM20 13h4v12h-4z'/%3E%3C/g%3E%3C/svg%3E")
  }

  .ag-icon-color-picker:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M23.907 17.587 10.574 4.254l-1.88 1.88 3.173 3.173-8.28 8.28 10.16 10.16zm-16.547 0 6.387-6.387 6.387 6.387zm18.387 2s-2.667 2.893-2.667 4.667c0 1.467 1.2 2.667 2.667 2.667s2.667-1.2 2.667-2.667c0-1.773-2.667-4.667-2.667-4.667' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M23.907 17.587 10.574 4.254l-1.88 1.88 3.173 3.173-8.28 8.28 10.16 10.16zm-16.547 0 6.387-6.387 6.387 6.387zm18.387 2s-2.667 2.893-2.667 4.667c0 1.467 1.2 2.667 2.667 2.667s2.667-1.2 2.667-2.667c0-1.773-2.667-4.667-2.667-4.667' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-columns:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M26 25H6V7h20zM12 11H8v12h4zm6 0h-4v12h4zm6 12V11h-4v12z' style='fill-rule:nonzero' transform='translate(0 -1)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M26 25H6V7h20zM12 11H8v12h4zm6 0h-4v12h4zm6 12V11h-4v12z' style='fill-rule:nonzero' transform='translate(0 -1)'/%3E%3C/svg%3E")
  }

  .ag-icon-contracted:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m12 6 10 10-10 10-2-2 8-8-8-8z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m12 6 10 10-10 10-2-2 8-8-8-8z'/%3E%3C/svg%3E")
  }

  .ag-icon-copy:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M22 1.333H6A2.675 2.675 0 0 0 3.333 4v18.667H6V4h16zm4 5.334H11.333a2.675 2.675 0 0 0-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667H26c1.467 0 2.667-1.2 2.667-2.667V9.334c0-1.467-1.2-2.667-2.667-2.667M26 28H11.333V9.333H26z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M22 1.333H6A2.675 2.675 0 0 0 3.333 4v18.667H6V4h16zm4 5.334H11.333a2.675 2.675 0 0 0-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667H26c1.467 0 2.667-1.2 2.667-2.667V9.334c0-1.467-1.2-2.667-2.667-2.667M26 28H11.333V9.333H26z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-cross:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M15.984 13.894 27.05 2.828l2.122 2.122-11.066 11.066 11.066 11.066-2.122 2.12-11.066-11.066L4.918 29.202l-2.12-2.12 11.066-11.066L2.798 4.95l2.12-2.122z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M15.984 13.894 27.05 2.828l2.122 2.122-11.066 11.066 11.066 11.066-2.122 2.12-11.066-11.066L4.918 29.202l-2.12-2.12 11.066-11.066L2.798 4.95l2.12-2.122z'/%3E%3C/svg%3E")
  }

  .ag-icon-csv:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M384 131.9c-7.753-8.433-110.425-128.473-114.9-133L48-.1C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-35.9 2.1H257V27.9zM30 479V27h200l1 105c0 13.3-1.3 29 12 29h111l1 318z' style='fill-rule:nonzero' transform='matrix(.06285 0 0 .06285 3.934 -.054)'/%3E%3Cpath d='M.688-.226a.2.2 0 0 1-.017.074.28.28 0 0 1-.145.14.412.412 0 0 1-.234.013.28.28 0 0 1-.202-.168.468.468 0 0 1-.04-.19q0-.086.025-.155a.319.319 0 0 1 .182-.191.4.4 0 0 1 .134-.025q.087 0 .155.035a.3.3 0 0 1 .104.085.17.17 0 0 1 .036.097.06.06 0 0 1-.018.044.06.06 0 0 1-.042.019.06.06 0 0 1-.042-.013.2.2 0 0 1-.031-.046.2.2 0 0 0-.066-.079.16.16 0 0 0-.095-.027.17.17 0 0 0-.142.068.3.3 0 0 0-.053.193.4.4 0 0 0 .023.139.2.2 0 0 0 .067.083.2.2 0 0 0 .1.027q.063 0 .106-.031a.2.2 0 0 0 .065-.091.2.2 0 0 1 .023-.046q.014-.018.044-.018a.06.06 0 0 1 .044.018.06.06 0 0 1 .019.045' style='fill-rule:nonzero' transform='matrix(8.39799 0 0 12.455 7.122 25.977)'/%3E%3Cpath d='M.622-.215a.2.2 0 0 1-.033.117.23.23 0 0 1-.098.081.4.4 0 0 1-.153.029.34.34 0 0 1-.175-.04.23.23 0 0 1-.079-.077.17.17 0 0 1-.031-.093q0-.027.019-.045a.06.06 0 0 1 .046-.019.06.06 0 0 1 .039.014.1.1 0 0 1 .027.044.3.3 0 0 0 .03.057q.015.023.044.038.03.015.076.015.065 0 .105-.03a.09.09 0 0 0 .04-.075.08.08 0 0 0-.022-.058.14.14 0 0 0-.056-.034 1 1 0 0 0-.092-.025.7.7 0 0 1-.129-.042.2.2 0 0 1-.083-.066.17.17 0 0 1-.03-.104q0-.058.032-.105a.2.2 0 0 1 .093-.07.4.4 0 0 1 .144-.025q.066 0 .114.016a.3.3 0 0 1 .08.044.2.2 0 0 1 .046.057q.015.03.015.058a.07.07 0 0 1-.018.046.06.06 0 0 1-.046.021q-.025 0-.038-.012a.2.2 0 0 1-.028-.041.2.2 0 0 0-.047-.063Q.387-.625.326-.625a.15.15 0 0 0-.09.025q-.035.024-.035.059 0 .021.012.037a.1.1 0 0 0 .032.027.4.4 0 0 0 .111.036q.06.015.11.031.048.018.083.042a.2.2 0 0 1 .054.062.2.2 0 0 1 .019.091' style='fill-rule:nonzero' transform='matrix(8.39799 0 0 12.455 13.339 25.977)'/%3E%3Cpath d='m.184-.633.162.48.163-.483q.013-.038.019-.053a.062.062 0 0 1 .061-.039q.018 0 .034.009a.1.1 0 0 1 .025.025q.009.015.009.031L.654-.64l-.007.025-.009.024-.173.468-.019.051a.2.2 0 0 1-.021.042.1.1 0 0 1-.033.03.1.1 0 0 1-.049.012.1.1 0 0 1-.05-.011A.1.1 0 0 1 .26-.03a.2.2 0 0 1-.021-.042L.22-.123.05-.587.041-.612.033-.638.03-.662q0-.025.02-.046a.07.07 0 0 1 .05-.02q.037 0 .053.023.015.023.031.072' style='fill-rule:nonzero' transform='matrix(8.39799 0 0 12.455 18.94 25.977)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M384 131.9c-7.753-8.433-110.425-128.473-114.9-133L48-.1C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-35.9 2.1H257V27.9zM30 479V27h200l1 105c0 13.3-1.3 29 12 29h111l1 318z' style='fill-rule:nonzero' transform='matrix(.06285 0 0 .06285 3.934 -.054)'/%3E%3Cpath d='M.688-.226a.2.2 0 0 1-.017.074.28.28 0 0 1-.145.14.412.412 0 0 1-.234.013.28.28 0 0 1-.202-.168.468.468 0 0 1-.04-.19q0-.086.025-.155a.319.319 0 0 1 .182-.191.4.4 0 0 1 .134-.025q.087 0 .155.035a.3.3 0 0 1 .104.085.17.17 0 0 1 .036.097.06.06 0 0 1-.018.044.06.06 0 0 1-.042.019.06.06 0 0 1-.042-.013.2.2 0 0 1-.031-.046.2.2 0 0 0-.066-.079.16.16 0 0 0-.095-.027.17.17 0 0 0-.142.068.3.3 0 0 0-.053.193.4.4 0 0 0 .023.139.2.2 0 0 0 .067.083.2.2 0 0 0 .1.027q.063 0 .106-.031a.2.2 0 0 0 .065-.091.2.2 0 0 1 .023-.046q.014-.018.044-.018a.06.06 0 0 1 .044.018.06.06 0 0 1 .019.045' style='fill-rule:nonzero' transform='matrix(8.39799 0 0 12.455 7.122 25.977)'/%3E%3Cpath d='M.622-.215a.2.2 0 0 1-.033.117.23.23 0 0 1-.098.081.4.4 0 0 1-.153.029.34.34 0 0 1-.175-.04.23.23 0 0 1-.079-.077.17.17 0 0 1-.031-.093q0-.027.019-.045a.06.06 0 0 1 .046-.019.06.06 0 0 1 .039.014.1.1 0 0 1 .027.044.3.3 0 0 0 .03.057q.015.023.044.038.03.015.076.015.065 0 .105-.03a.09.09 0 0 0 .04-.075.08.08 0 0 0-.022-.058.14.14 0 0 0-.056-.034 1 1 0 0 0-.092-.025.7.7 0 0 1-.129-.042.2.2 0 0 1-.083-.066.17.17 0 0 1-.03-.104q0-.058.032-.105a.2.2 0 0 1 .093-.07.4.4 0 0 1 .144-.025q.066 0 .114.016a.3.3 0 0 1 .08.044.2.2 0 0 1 .046.057q.015.03.015.058a.07.07 0 0 1-.018.046.06.06 0 0 1-.046.021q-.025 0-.038-.012a.2.2 0 0 1-.028-.041.2.2 0 0 0-.047-.063Q.387-.625.326-.625a.15.15 0 0 0-.09.025q-.035.024-.035.059 0 .021.012.037a.1.1 0 0 0 .032.027.4.4 0 0 0 .111.036q.06.015.11.031.048.018.083.042a.2.2 0 0 1 .054.062.2.2 0 0 1 .019.091' style='fill-rule:nonzero' transform='matrix(8.39799 0 0 12.455 13.339 25.977)'/%3E%3Cpath d='m.184-.633.162.48.163-.483q.013-.038.019-.053a.062.062 0 0 1 .061-.039q.018 0 .034.009a.1.1 0 0 1 .025.025q.009.015.009.031L.654-.64l-.007.025-.009.024-.173.468-.019.051a.2.2 0 0 1-.021.042.1.1 0 0 1-.033.03.1.1 0 0 1-.049.012.1.1 0 0 1-.05-.011A.1.1 0 0 1 .26-.03a.2.2 0 0 1-.021-.042L.22-.123.05-.587.041-.612.033-.638.03-.662q0-.025.02-.046a.07.07 0 0 1 .05-.02q.037 0 .053.023.015.023.031.072' style='fill-rule:nonzero' transform='matrix(8.39799 0 0 12.455 18.94 25.977)'/%3E%3C/svg%3E")
  }

  .ag-icon-cut:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M13.775 15.198 3.835 2.945a1.501 1.501 0 0 1 2.33-1.89l14.997 18.488A6.003 6.003 0 0 1 29.657 25c0 3.311-2.688 6-6 6s-6-2.689-6-6c0-1.335.437-2.569 1.176-3.566l-3.127-3.855-3.001 3.7A5.97 5.97 0 0 1 14 25c0 3.311-2.689 6-6 6s-6-2.689-6-6a6.003 6.003 0 0 1 8.315-5.536zm9.882 6.702a3.1 3.1 0 0 0-3.1 3.1c0 1.711 1.389 3.1 3.1 3.1s3.1-1.389 3.1-3.1-1.389-3.1-3.1-3.1M8 21.95a3.05 3.05 0 1 0 .001 6.101A3.05 3.05 0 0 0 8 21.95m9.63-11.505 1.932 2.381 8.015-9.881a1.5 1.5 0 0 0-2.329-1.89z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M13.775 15.198 3.835 2.945a1.501 1.501 0 0 1 2.33-1.89l14.997 18.488A6.003 6.003 0 0 1 29.657 25c0 3.311-2.688 6-6 6s-6-2.689-6-6c0-1.335.437-2.569 1.176-3.566l-3.127-3.855-3.001 3.7A5.97 5.97 0 0 1 14 25c0 3.311-2.689 6-6 6s-6-2.689-6-6a6.003 6.003 0 0 1 8.315-5.536zm9.882 6.702a3.1 3.1 0 0 0-3.1 3.1c0 1.711 1.389 3.1 3.1 3.1s3.1-1.389 3.1-3.1-1.389-3.1-3.1-3.1M8 21.95a3.05 3.05 0 1 0 .001 6.101A3.05 3.05 0 0 0 8 21.95m9.63-11.505 1.932 2.381 8.015-9.881a1.5 1.5 0 0 0-2.329-1.89z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-desc:before,
  .ag-icon-down:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m26.667 16-1.88-1.88-7.453 7.44V5.333h-2.667V21.56l-7.44-7.453L5.334 16l10.667 10.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m26.667 16-1.88-1.88-7.453 7.44V5.333h-2.667V21.56l-7.44-7.453L5.334 16l10.667 10.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-excel:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M384 131.9c-7.753-8.433-110.425-128.473-114.9-133L48-.1C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-35.9 2.1H257V27.9zM30 479V27h200l1 105c0 13.3-1.3 29 12 29h111l1 318z' style='fill-rule:nonzero' transform='matrix(.06285 0 0 .06285 3.934 -.054)'/%3E%3Cpath d='m.052-.139.16-.234-.135-.208a.4.4 0 0 1-.028-.052.1.1 0 0 1-.01-.042.05.05 0 0 1 .018-.037.07.07 0 0 1 .045-.016q.03 0 .047.018a1 1 0 0 1 .047.066l.107.174.115-.174.024-.038.019-.026.021-.015a.1.1 0 0 1 .027-.005.06.06 0 0 1 .044.016.05.05 0 0 1 .018.039q0 .033-.038.089l-.141.211.152.234a.3.3 0 0 1 .03.051.1.1 0 0 1 .009.038.1.1 0 0 1-.008.031.1.1 0 0 1-.024.023.1.1 0 0 1-.034.008.1.1 0 0 1-.035-.008.1.1 0 0 1-.023-.022L.427-.067.301-.265l-.134.204-.022.034-.016.019a.1.1 0 0 1-.022.015.1.1 0 0 1-.03.005.06.06 0 0 1-.044-.016.06.06 0 0 1-.017-.047q0-.036.036-.088' style='fill-rule:nonzero' transform='matrix(17.82892 0 0 16.50777 10.371 25.928)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M384 131.9c-7.753-8.433-110.425-128.473-114.9-133L48-.1C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-35.9 2.1H257V27.9zM30 479V27h200l1 105c0 13.3-1.3 29 12 29h111l1 318z' style='fill-rule:nonzero' transform='matrix(.06285 0 0 .06285 3.934 -.054)'/%3E%3Cpath d='m.052-.139.16-.234-.135-.208a.4.4 0 0 1-.028-.052.1.1 0 0 1-.01-.042.05.05 0 0 1 .018-.037.07.07 0 0 1 .045-.016q.03 0 .047.018a1 1 0 0 1 .047.066l.107.174.115-.174.024-.038.019-.026.021-.015a.1.1 0 0 1 .027-.005.06.06 0 0 1 .044.016.05.05 0 0 1 .018.039q0 .033-.038.089l-.141.211.152.234a.3.3 0 0 1 .03.051.1.1 0 0 1 .009.038.1.1 0 0 1-.008.031.1.1 0 0 1-.024.023.1.1 0 0 1-.034.008.1.1 0 0 1-.035-.008.1.1 0 0 1-.023-.022L.427-.067.301-.265l-.134.204-.022.034-.016.019a.1.1 0 0 1-.022.015.1.1 0 0 1-.03.005.06.06 0 0 1-.044-.016.06.06 0 0 1-.017-.047q0-.036.036-.088' style='fill-rule:nonzero' transform='matrix(17.82892 0 0 16.50777 10.371 25.928)'/%3E%3C/svg%3E")
  }

  .ag-icon-expanded:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M20 26 10 16 20 6l2 2-8 8 8 8z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M20 26 10 16 20 6l2 2-8 8 8 8z'/%3E%3C/svg%3E")
  }

  .ag-icon-eye-slash:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M8.95 10.364 7 8.414 8.414 7l2.32 2.32A13.2 13.2 0 0 1 16.5 8c5.608 0 10.542 3.515 12.381 8.667L29 17l-.119.333a13 13 0 0 1-4.255 5.879l1.466 1.466-1.414 1.414-1.754-1.753A13.2 13.2 0 0 1 16.5 26c-5.608 0-10.542-3.515-12.381-8.667L4 17l.119-.333a13 13 0 0 1 4.83-6.303m1.445 1.445A11.02 11.02 0 0 0 6.148 17c1.646 4.177 5.728 7 10.352 7 1.76 0 3.441-.409 4.94-1.146l-1.878-1.878A5.06 5.06 0 0 1 16.5 22c-2.789 0-5.05-2.239-5.05-5 0-1.158.398-2.223 1.065-3.07zm1.855-.974 1.794 1.795A5.07 5.07 0 0 1 16.5 12c2.789 0 5.05 2.239 5.05 5 0 .9-.24 1.745-.661 2.474l2.305 2.306A11 11 0 0 0 26.852 17c-1.646-4.177-5.728-7-10.352-7-1.495 0-2.933.295-4.25.835'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M8.95 10.364 7 8.414 8.414 7l2.32 2.32A13.2 13.2 0 0 1 16.5 8c5.608 0 10.542 3.515 12.381 8.667L29 17l-.119.333a13 13 0 0 1-4.255 5.879l1.466 1.466-1.414 1.414-1.754-1.753A13.2 13.2 0 0 1 16.5 26c-5.608 0-10.542-3.515-12.381-8.667L4 17l.119-.333a13 13 0 0 1 4.83-6.303m1.445 1.445A11.02 11.02 0 0 0 6.148 17c1.646 4.177 5.728 7 10.352 7 1.76 0 3.441-.409 4.94-1.146l-1.878-1.878A5.06 5.06 0 0 1 16.5 22c-2.789 0-5.05-2.239-5.05-5 0-1.158.398-2.223 1.065-3.07zm1.855-.974 1.794 1.795A5.07 5.07 0 0 1 16.5 12c2.789 0 5.05 2.239 5.05 5 0 .9-.24 1.745-.661 2.474l2.305 2.306A11 11 0 0 0 26.852 17c-1.646-4.177-5.728-7-10.352-7-1.495 0-2.933.295-4.25.835'/%3E%3C/svg%3E")
  }

  .ag-icon-eye:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M16.5 23c4.624 0 8.706-2.823 10.352-7-1.646-4.177-5.728-7-10.352-7s-8.706 2.823-10.352 7c1.646 4.177 5.728 7 10.352 7M4.119 15.667C5.958 10.515 10.892 7 16.5 7s10.542 3.515 12.381 8.667L29 16l-.119.333C27.042 21.485 22.108 25 16.5 25S5.958 21.485 4.119 16.333L4 16zM16.5 21c2.789 0 5.049-2.239 5.049-5s-2.26-5-5.049-5-5.049 2.239-5.049 5 2.26 5 5.049 5' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M16.5 23c4.624 0 8.706-2.823 10.352-7-1.646-4.177-5.728-7-10.352-7s-8.706 2.823-10.352 7c1.646 4.177 5.728 7 10.352 7M4.119 15.667C5.958 10.515 10.892 7 16.5 7s10.542 3.515 12.381 8.667L29 16l-.119.333C27.042 21.485 22.108 25 16.5 25S5.958 21.485 4.119 16.333L4 16zM16.5 21c2.789 0 5.049-2.239 5.049-5s-2.26-5-5.049-5-5.049 2.239-5.049 5 2.26 5 5.049 5' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-filter:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m28 8-8 8v5l-6 6V16L6 8V6h22zM9 8l7 7v7l2-2v-5l7-7z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m28 8-8 8v5l-6 6V16L6 8V6h22zM9 8l7 7v7l2-2v-5l7-7z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-first:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M24.273 22.12 18.153 16l6.12-6.12L22.393 8l-8 8 8 8zM7.727 8h2.667v16H7.727z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M24.273 22.12 18.153 16l6.12-6.12L22.393 8l-8 8 8 8zM7.727 8h2.667v16H7.727z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-group:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M14 7v1H9V7zm0-3v1H5.001V4zm-7 7H5v-1h2zm0-3H5V7h2zM3 5H1V4h2zm11 5v1H9v-1zm-7 4H5v-1h2zm7-1v1H9v-1z' style='fill-rule:nonzero' transform='matrix(2 0 0 2 0 -2)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M14 7v1H9V7zm0-3v1H5.001V4zm-7 7H5v-1h2zm0-3H5V7h2zM3 5H1V4h2zm11 5v1H9v-1zm-7 4H5v-1h2zm7-1v1H9v-1z' style='fill-rule:nonzero' transform='matrix(2 0 0 2 0 -2)'/%3E%3C/svg%3E")
  }

  .ag-icon-last:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m7.727 9.88 6.12 6.12-6.12 6.12L9.607 24l8-8-8-8zM21.607 8h2.667v16h-2.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m7.727 9.88 6.12 6.12-6.12 6.12L9.607 24l8-8-8-8zM21.607 8h2.667v16h-2.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-left:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M26.667 14.667H10.44l7.453-7.453L16 5.334 5.333 16.001 16 26.668l1.88-1.88-7.44-7.453h16.227z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M26.667 14.667H10.44l7.453-7.453L16 5.334 5.333 16.001 16 26.668l1.88-1.88-7.44-7.453h16.227z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-linked:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M5.2 16a4.136 4.136 0 0 1 4.133-4.133h5.333V9.334H9.333a6.67 6.67 0 0 0-6.667 6.667 6.67 6.67 0 0 0 6.667 6.667h5.333v-2.533H9.333A4.136 4.136 0 0 1 5.2 16.002zm5.467 1.333h10.667v-2.667H10.667zm12-8h-5.333v2.533h5.333a4.136 4.136 0 0 1 4.133 4.133 4.136 4.136 0 0 1-4.133 4.133h-5.333v2.533h5.333a6.67 6.67 0 0 0 6.667-6.667 6.67 6.67 0 0 0-6.667-6.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M5.2 16a4.136 4.136 0 0 1 4.133-4.133h5.333V9.334H9.333a6.67 6.67 0 0 0-6.667 6.667 6.67 6.67 0 0 0 6.667 6.667h5.333v-2.533H9.333A4.136 4.136 0 0 1 5.2 16.002zm5.467 1.333h10.667v-2.667H10.667zm12-8h-5.333v2.533h5.333a4.136 4.136 0 0 1 4.133 4.133 4.136 4.136 0 0 1-4.133 4.133h-5.333v2.533h5.333a6.67 6.67 0 0 0 6.667-6.667 6.67 6.67 0 0 0-6.667-6.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-loading:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M17 29h-2v-8h2zm-3.586-9L7 26.414 5.586 25 12 18.586zm13 5L25 26.414 18.586 20 20 18.586zM29 17h-8v-2h8zm-18 0H3v-2h8zm2.414-5L12 13.414 5.586 7 7 5.586zm13-5L20 13.414 18.586 12 25 5.586zM17 11h-2V3h2z' style='fill-rule:nonzero' transform='translate(-3.692 -3.692)scale(1.23077)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M17 29h-2v-8h2zm-3.586-9L7 26.414 5.586 25 12 18.586zm13 5L25 26.414 18.586 20 20 18.586zM29 17h-8v-2h8zm-18 0H3v-2h8zm2.414-5L12 13.414 5.586 7 7 5.586zm13-5L20 13.414 18.586 12 25 5.586zM17 11h-2V3h2z' style='fill-rule:nonzero' transform='translate(-3.692 -3.692)scale(1.23077)'/%3E%3C/svg%3E")
  }

  .ag-icon-maximize:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M14 30H2V18h2.828v7.05l8.254-8.252 2.12 2.12-8.252 8.254H14zm4-28h12v12h-2.828V6.95l-8.254 8.252-2.12-2.12 8.252-8.254H18z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M14 30H2V18h2.828v7.05l8.254-8.252 2.12 2.12-8.252 8.254H14zm4-28h12v12h-2.828V6.95l-8.254 8.252-2.12-2.12 8.252-8.254H18z'/%3E%3C/svg%3E")
  }

  .ag-icon-menu:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M20 13H0v-2h20zm0-6H0V5h20zm0-6H0v-2h20z' style='fill-rule:nonzero' transform='translate(6 9)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M20 13H0v-2h20zm0-6H0V5h20zm0-6H0v-2h20z' style='fill-rule:nonzero' transform='translate(6 9)'/%3E%3C/svg%3E")
  }

  .ag-icon-menu-alt:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%23000' d='M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%23000' d='M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/%3E%3C/svg%3E")
  }

  .ag-icon-minimize:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M2 18h12v12h-2.828v-7.05l-8.254 8.252-2.12-2.12 8.252-8.254H2zm28-4H18V2h2.828v7.05L29.082.798l2.12 2.12-8.252 8.254H30z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M2 18h12v12h-2.828v-7.05l-8.254 8.252-2.12-2.12 8.252-8.254H2zm28-4H18V2h2.828v7.05L29.082.798l2.12 2.12-8.252 8.254H30z'/%3E%3C/svg%3E")
  }

  .ag-icon-minus:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M6.572 6.572a13.32 13.32 0 0 0 0 18.856 13.32 13.32 0 0 0 18.856 0 13.32 13.32 0 0 0 0-18.856 13.32 13.32 0 0 0-18.856 0m17.527 8.099v2.658H7.901v-2.658z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M6.572 6.572a13.32 13.32 0 0 0 0 18.856 13.32 13.32 0 0 0 18.856 0 13.32 13.32 0 0 0 0-18.856 13.32 13.32 0 0 0-18.856 0m17.527 8.099v2.658H7.901v-2.658z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-next:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M10.94 6 9.06 7.88 17.167 16 9.06 24.12 10.94 26l10-10z' style='fill-rule:nonzero' transform='translate(1)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M10.94 6 9.06 7.88 17.167 16 9.06 24.12 10.94 26l10-10z' style='fill-rule:nonzero' transform='translate(1)'/%3E%3C/svg%3E")
  }

  .ag-icon-none:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath d='M23.708 14.645 16 6.939l-7.708 7.706 1.416 1.416L16 9.767l6.292 6.294zM23.708 20.355 16 28.061l-7.708-7.706 1.416-1.416L16 25.233l6.292-6.294z'/%3E%3C/g%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath d='M23.708 14.645 16 6.939l-7.708 7.706 1.416 1.416L16 9.767l6.292 6.294zM23.708 20.355 16 28.061l-7.708-7.706 1.416-1.416L16 25.233l6.292-6.294z'/%3E%3C/g%3E%3C/svg%3E")
  }

  .ag-icon-not-allowed:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M16 2.667C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667M5.333 16c0-5.893 4.773-10.667 10.667-10.667 2.467 0 4.733.84 6.533 2.253L7.586 22.533A10.54 10.54 0 0 1 5.333 16M16 26.667c-2.467 0-4.733-.84-6.533-2.253L24.414 9.467A10.54 10.54 0 0 1 26.667 16c0 5.893-4.773 10.667-10.667 10.667' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M16 2.667C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667M5.333 16c0-5.893 4.773-10.667 10.667-10.667 2.467 0 4.733.84 6.533 2.253L7.586 22.533A10.54 10.54 0 0 1 5.333 16M16 26.667c-2.467 0-4.733-.84-6.533-2.253L24.414 9.467A10.54 10.54 0 0 1 26.667 16c0 5.893-4.773 10.667-10.667 10.667' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-paste:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M25.334 4H19.76C19.2 2.453 17.733 1.333 16 1.333S12.8 2.453 12.24 4H6.667A2.675 2.675 0 0 0 4 6.667V28c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667V6.667C28.001 5.2 26.801 4 25.334 4M16 4c.733 0 1.333.6 1.333 1.333s-.6 1.333-1.333 1.333-1.333-.6-1.333-1.333S15.267 4 16 4m9.333 24H6.666V6.667h2.667v4h13.333v-4h2.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M25.334 4H19.76C19.2 2.453 17.733 1.333 16 1.333S12.8 2.453 12.24 4H6.667A2.675 2.675 0 0 0 4 6.667V28c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667V6.667C28.001 5.2 26.801 4 25.334 4M16 4c.733 0 1.333.6 1.333 1.333s-.6 1.333-1.333 1.333-1.333-.6-1.333-1.333S15.267 4 16 4m9.333 24H6.666V6.667h2.667v4h13.333v-4h2.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-pin:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m10.78 19.777-4.668-4.666s.032-1 .67-1.87c1.366-1.86 4.052-1.96 6.056-1.572l3.158-3.108c-.7-2.342 3.352-5.046 3.352-5.046l9.166 9.168q-.334.447-.67.894c-1.074 1.426-2.538 2.63-4.272 2.338l-3.32 3.218c.046.344.042.03.118 1.152.144 2.13-.64 4.324-2.632 5.34l-.746.364-4.798-4.798-7.292 7.294-1.416-1.416zm8.24-13.672c-.688.568-1.416 1.45-1.024 2.072l.49.722-4.986 4.988c-1.988-.506-4.346-.636-5.156.614l9.02 9.032q.14-.099.272-.21c1.226-1.08.764-3.04.498-4.9l4.79-4.79s1.47.938 2.936-.776l-6.79-6.79q-.026.019-.05.038' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m10.78 19.777-4.668-4.666s.032-1 .67-1.87c1.366-1.86 4.052-1.96 6.056-1.572l3.158-3.108c-.7-2.342 3.352-5.046 3.352-5.046l9.166 9.168q-.334.447-.67.894c-1.074 1.426-2.538 2.63-4.272 2.338l-3.32 3.218c.046.344.042.03.118 1.152.144 2.13-.64 4.324-2.632 5.34l-.746.364-4.798-4.798-7.292 7.294-1.416-1.416zm8.24-13.672c-.688.568-1.416 1.45-1.024 2.072l.49.722-4.986 4.988c-1.988-.506-4.346-.636-5.156.614l9.02 9.032q.14-.099.272-.21c1.226-1.08.764-3.04.498-4.9l4.79-4.79s1.47.938 2.936-.776l-6.79-6.79q-.026.019-.05.038' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-pivot:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M25.128 2.002c2.56.096 4.772 2.292 4.87 4.87a712 712 0 0 1 0 18.256c-.096 2.56-2.292 4.772-4.87 4.87a712 712 0 0 1-18.256 0c-2.558-.096-4.772-2.29-4.87-4.87a712 712 0 0 1 0-18.256c.096-2.56 2.292-4.772 4.87-4.87a712 712 0 0 1 18.256 0m2.966 7.954H9.892v18.136c5.086.13 10.18.098 15.264-.096 1.48-.094 2.746-1.35 2.84-2.84.192-5.064.226-10.134.098-15.2M3.968 24.1q.015.528.036 1.056c.094 1.484 1.354 2.746 2.84 2.84l1.012.036V24.1zM22 15.414l-.292.294-1.416-1.416L23 11.586l2.708 2.706-1.416 1.416-.292-.294v3.592c-.032 2.604-2.246 4.892-4.872 4.992L15.414 24l.294.292-1.416 1.416L11.586 23l2.706-2.708 1.416 1.416-.322.32c3.372.03 6.578-.164 6.614-3.034zM3.88 18.038c.002 1.346.012 2.694.038 4.04h3.938v-4.04zm.05-6.062a681 681 0 0 0-.044 4.042h3.97v-4.042zm5.962-7.99Q8.449 3.999 7.006 4c-1.57.02-2.946 1.348-3.004 2.922q-.02 1.517-.042 3.034h3.896v-2.02h2.036zm14.244-.016v3.966h3.898q-.017-.546-.038-1.092c-.094-1.48-1.35-2.746-2.84-2.84q-.51-.019-1.02-.034m-8.14-.054q-2.035.022-4.07.048v3.972h4.07zm6.106.008a213 213 0 0 0-4.07-.022v4.034h4.07z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M25.128 2.002c2.56.096 4.772 2.292 4.87 4.87a712 712 0 0 1 0 18.256c-.096 2.56-2.292 4.772-4.87 4.87a712 712 0 0 1-18.256 0c-2.558-.096-4.772-2.29-4.87-4.87a712 712 0 0 1 0-18.256c.096-2.56 2.292-4.772 4.87-4.87a712 712 0 0 1 18.256 0m2.966 7.954H9.892v18.136c5.086.13 10.18.098 15.264-.096 1.48-.094 2.746-1.35 2.84-2.84.192-5.064.226-10.134.098-15.2M3.968 24.1q.015.528.036 1.056c.094 1.484 1.354 2.746 2.84 2.84l1.012.036V24.1zM22 15.414l-.292.294-1.416-1.416L23 11.586l2.708 2.706-1.416 1.416-.292-.294v3.592c-.032 2.604-2.246 4.892-4.872 4.992L15.414 24l.294.292-1.416 1.416L11.586 23l2.706-2.708 1.416 1.416-.322.32c3.372.03 6.578-.164 6.614-3.034zM3.88 18.038c.002 1.346.012 2.694.038 4.04h3.938v-4.04zm.05-6.062a681 681 0 0 0-.044 4.042h3.97v-4.042zm5.962-7.99Q8.449 3.999 7.006 4c-1.57.02-2.946 1.348-3.004 2.922q-.02 1.517-.042 3.034h3.896v-2.02h2.036zm14.244-.016v3.966h3.898q-.017-.546-.038-1.092c-.094-1.48-1.35-2.746-2.84-2.84q-.51-.019-1.02-.034m-8.14-.054q-2.035.022-4.07.048v3.972h4.07zm6.106.008a213 213 0 0 0-4.07-.022v4.034h4.07z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-plus:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M6.572 6.572a13.32 13.32 0 0 0 0 18.856 13.32 13.32 0 0 0 18.856 0 13.32 13.32 0 0 0 0-18.856 13.32 13.32 0 0 0-18.856 0m17.527 8.099v2.658h-6.77v6.77h-2.658v-6.77h-6.77v-2.658h6.77v-6.77h2.658v6.77z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M6.572 6.572a13.32 13.32 0 0 0 0 18.856 13.32 13.32 0 0 0 18.856 0 13.32 13.32 0 0 0 0-18.856 13.32 13.32 0 0 0-18.856 0m17.527 8.099v2.658h-6.77v6.77h-2.658v-6.77h-6.77v-2.658h6.77v-6.77h2.658v6.77z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-previous:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M21.94 7.88 20.06 6l-10 10 10 10 1.88-1.88L13.833 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M21.94 7.88 20.06 6l-10 10 10 10 1.88-1.88L13.833 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-right:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m16 5.333-1.88 1.88 7.44 7.453H5.333v2.667H21.56l-7.44 7.453 1.88 1.88 10.667-10.667L16 5.332z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m16 5.333-1.88 1.88 7.44 7.453H5.333v2.667H21.56l-7.44 7.453 1.88 1.88 10.667-10.667L16 5.332z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-save:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M15.708 2.355 8 10.061.292 2.355 1.708.939 8 7.233 14.292.939z' style='fill-rule:nonzero' transform='translate(8 14)'/%3E%3Cpath d='M5 26h22v2H5zM15 4h2v18h-2z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M15.708 2.355 8 10.061.292 2.355 1.708.939 8 7.233 14.292.939z' style='fill-rule:nonzero' transform='translate(8 14)'/%3E%3Cpath d='M5 26h22v2H5zM15 4h2v18h-2z'/%3E%3C/svg%3E")
  }

  .ag-icon-small-down:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M7.334 10.667 16 21.334l8.667-10.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M7.334 10.667 16 21.334l8.667-10.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-small-left:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M21.333 7.334 10.666 16l10.667 8.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M21.333 7.334 10.666 16l10.667 8.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-small-right:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M10.667 24.666 21.334 16 10.667 7.333z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M10.667 24.666 21.334 16 10.667 7.333z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-small-up:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M7.334 21.333 16 10.666l8.667 10.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M7.334 21.333 16 10.666l8.667 10.667z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-tick:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M11.586 22.96 27.718 6.828 29.84 8.95 11.586 27.202 2.4 18.016l2.12-2.122z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M11.586 22.96 27.718 6.828 29.84 8.95 11.586 27.202 2.4 18.016l2.12-2.122z'/%3E%3C/svg%3E")
  }

  .ag-icon-tree-closed:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m11.94 6-1.88 1.88L18.167 16l-8.107 8.12L11.94 26l10-10z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m11.94 6-1.88 1.88L18.167 16l-8.107 8.12L11.94 26l10-10z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-tree-indeterminate:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M6 13.5h20v3H6z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M6 13.5h20v3H6z'/%3E%3C/svg%3E")
  }

  .ag-icon-tree-open:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M24.12 9.06 16 17.167 7.88 9.06 6 10.94l10 10 10-10z' style='fill-rule:nonzero' transform='translate(0 1)'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M24.12 9.06 16 17.167 7.88 9.06 6 10.94l10 10 10-10z' style='fill-rule:nonzero' transform='translate(0 1)'/%3E%3C/svg%3E")
  }

  .ag-icon-unlinked:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M22.667 9.333h-5.333v2.533h5.333a4.136 4.136 0 0 1 4.133 4.133c0 1.907-1.307 3.507-3.08 3.973l1.947 1.947c2.173-1.107 3.667-3.32 3.667-5.92a6.67 6.67 0 0 0-6.667-6.667zm-1.334 5.334h-2.92l2.667 2.667h.253zM2.667 5.693 6.814 9.84A6.65 6.65 0 0 0 2.667 16a6.67 6.67 0 0 0 6.667 6.667h5.333v-2.533H9.334a4.136 4.136 0 0 1-4.133-4.133c0-2.12 1.613-3.867 3.68-4.093l2.76 2.76h-.973v2.667h3.64l3.027 3.027v2.307h2.307l5.347 5.333 1.68-1.68L4.362 4.002 2.669 5.695z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M22.667 9.333h-5.333v2.533h5.333a4.136 4.136 0 0 1 4.133 4.133c0 1.907-1.307 3.507-3.08 3.973l1.947 1.947c2.173-1.107 3.667-3.32 3.667-5.92a6.67 6.67 0 0 0-6.667-6.667zm-1.334 5.334h-2.92l2.667 2.667h.253zM2.667 5.693 6.814 9.84A6.65 6.65 0 0 0 2.667 16a6.67 6.67 0 0 0 6.667 6.667h5.333v-2.533H9.334a4.136 4.136 0 0 1-4.133-4.133c0-2.12 1.613-3.867 3.68-4.093l2.76 2.76h-.973v2.667h3.64l3.027 3.027v2.307h2.307l5.347 5.333 1.68-1.68L4.362 4.002 2.669 5.695z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-up:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m5.333 16 1.88 1.88 7.453-7.44v16.227h2.667V10.44l7.44 7.453L26.666 16 15.999 5.333 5.332 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='m5.333 16 1.88 1.88 7.453-7.44v16.227h2.667V10.44l7.44 7.453L26.666 16 15.999 5.333 5.332 16z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-grip:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M8 24H6v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zM8 18H6v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zM8 12H6V8h2zm6 0h-2V8h2zm6 0h-2V8h2zm6 0h-2V8h2z' style='fill-rule:nonzero'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2' viewBox='0 0 32 32'%3E%3Cpath d='M8 24H6v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zM8 18H6v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zm6 0h-2v-4h2zM8 12H6V8h2zm6 0h-2V8h2zm6 0h-2V8h2zm6 0h-2V8h2z' style='fill-rule:nonzero'/%3E%3C/svg%3E")
  }

  .ag-icon-settings:before {
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%23000' d='M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%23000' d='M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3'/%3E%3C/svg%3E")
  }


  /* Part tabStyle/quartz */
  .ag-tabs-header {
    background-color: var(--ag-tab-bar-background-color);
    border-bottom: var(--ag-tab-bar-border);
    gap: var(--ag-tab-spacing);
    padding: var(--ag-tab-bar-top-padding) var(--ag-tab-bar-horizontal-padding) 0
  }

  .ag-tabs-header-wrapper {
    display: flex
  }

  .ag-tabs-header-wrapper .ag-tabs-header {
    flex: 1
  }

  .ag-tabs-close-button-wrapper {
    border: 0;
    padding: var(--ag-grid-size)
  }

  .ag-ltr .ag-tabs-close-button-wrapper {
    border-right: 1px solid var(--ag-border-color)
  }

  .ag-rtl .ag-tabs-close-button-wrapper {
    border-left: 1px solid var(--ag-border-color)
  }

  .ag-tabs-close-button {
    background-color: unset;
    border: 0;
    cursor: pointer;
    padding: 0
  }

  .ag-tab {
    align-items: center;
    background-color: var(--ag-tab-background-color);
    border-left: var(--ag-tab-selected-border-width) solid transparent;
    border-right: var(--ag-tab-selected-border-width) solid transparent;
    color: var(--ag-tab-text-color);
    display: flex;
    flex: 1;
    justify-content: center;
    padding: var(--ag-tab-top-padding) var(--ag-tab-horizontal-padding) var(--ag-tab-bottom-padding);
    position: relative
  }

  .ag-tab:hover {
    background-color: var(--ag-tab-hover-background-color);
    color: var(--ag-tab-hover-text-color)
  }

  .ag-tab.ag-tab-selected {
    background-color: var(--ag-tab-selected-background-color);
    color: var(--ag-tab-selected-text-color)
  }

  .ag-ltr .ag-tab.ag-tab-selected:not(:first-of-type) {
    border-left-color: var(--ag-tab-selected-border-color)
  }

  .ag-ltr .ag-tab.ag-tab-selected:not(:last-of-type),
  .ag-rtl .ag-tab.ag-tab-selected:not(:first-of-type) {
    border-right-color: var(--ag-tab-selected-border-color)
  }

  .ag-rtl .ag-tab.ag-tab-selected:not(:last-of-type) {
    border-left-color: var(--ag-tab-selected-border-color)
  }

  .ag-tab:after {
    background-color: var(--ag-tab-selected-underline-color);
    bottom: 0;
    content: "";
    display: block;
    height: var(--ag-tab-selected-underline-width);
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    transition: opacity var(--ag-tab-selected-underline-transition-duration)
  }

  .ag-tab.ag-tab-selected:after {
    opacity: 1
  }

  .ag-tab:focus-visible {
    box-shadow: inset var(--ag-focus-shadow)
  }


  /* Part inputStyle/bordered */
  :where(input[class^=ag-][type=number]:not(.ag-number-field-input-stepper)) {
    -moz-appearance: textfield
  }

  :where(input[class^=ag-][type=number]:not(.ag-number-field-input-stepper))::-webkit-inner-spin-button,
  :where(input[class^=ag-][type=number]:not(.ag-number-field-input-stepper))::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0
  }

  :where(input[class^=ag-]:not([type]), input[class^=ag-][type=text], input[class^=ag-][type=number], input[class^=ag-][type=tel], input[class^=ag-][type=date], input[class^=ag-][type=datetime-local], textarea[class^=ag-]) {
    background-color: var(--ag-input-background-color);
    border: var(--ag-input-border);
    border-radius: var(--ag-input-border-radius);
    color: var(--ag-input-text-color);
    min-height: var(--ag-input-height)
  }

  .ag-ltr :where(input[class^=ag-]:not([type]), input[class^=ag-][type=text], input[class^=ag-][type=number], input[class^=ag-][type=tel], input[class^=ag-][type=date], input[class^=ag-][type=datetime-local], textarea[class^=ag-]) {
    padding-left: var(--ag-input-padding-start)
  }

  .ag-rtl :where(input[class^=ag-]:not([type]), input[class^=ag-][type=text], input[class^=ag-][type=number], input[class^=ag-][type=tel], input[class^=ag-][type=date], input[class^=ag-][type=datetime-local], textarea[class^=ag-]) {
    padding-right: var(--ag-input-padding-start)
  }

  :where(input[class^=ag-]:not([type]), input[class^=ag-][type=text], input[class^=ag-][type=number], input[class^=ag-][type=tel], input[class^=ag-][type=date], input[class^=ag-][type=datetime-local], textarea[class^=ag-]):where(:disabled) {
    background-color: var(--ag-input-disabled-background-color);
    border: var(--ag-input-disabled-border);
    color: var(--ag-input-disabled-text-color)
  }

  :where(input[class^=ag-]:not([type]), input[class^=ag-][type=text], input[class^=ag-][type=number], input[class^=ag-][type=tel], input[class^=ag-][type=date], input[class^=ag-][type=datetime-local], textarea[class^=ag-]):where(:focus) {
    background-color: var(--ag-input-focus-background-color);
    border: var(--ag-input-focus-border);
    box-shadow: var(--ag-input-focus-shadow);
    color: var(--ag-input-focus-text-color)
  }

  :where(input[class^=ag-]:not([type]), input[class^=ag-][type=text], input[class^=ag-][type=number], input[class^=ag-][type=tel], input[class^=ag-][type=date], input[class^=ag-][type=datetime-local], textarea[class^=ag-]):where(:invalid) {
    background-color: var(--ag-input-invalid-background-color);
    border: var(--ag-input-invalid-border);
    color: var(--ag-input-invalid-text-color)
  }

  :where(input[class^=ag-]:not([type]), input[class^=ag-][type=text], input[class^=ag-][type=number], input[class^=ag-][type=tel], input[class^=ag-][type=date], input[class^=ag-][type=datetime-local], textarea[class^=ag-]):where(.invalid) {
    background-color: var(--ag-input-invalid-background-color);
    border: var(--ag-input-invalid-border);
    color: var(--ag-input-invalid-text-color)
  }
`;
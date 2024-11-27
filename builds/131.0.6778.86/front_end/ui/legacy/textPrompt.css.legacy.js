// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
export default {
  cssContent: `/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.text-prompt-root {
  display: flex;
  align-items: center;
}

.text-prompt-editing {
  box-shadow: var(--drop-shadow);
  background-color: var(--sys-color-cdt-base-container);
  text-overflow: clip !important; /* stylelint-disable-line declaration-no-important */
  margin: 0 -2px -1px;
  padding: 0 2px 1px;
  opacity: 100% !important; /* stylelint-disable-line declaration-no-important */
}

.text-prompt {
  cursor: text;
  overflow-x: visible;
}

.text-prompt::-webkit-scrollbar {
  display: none;
}

.text-prompt-editing > .text-prompt {
  color: var(--sys-color-on-surface) !important; /* stylelint-disable-line declaration-no-important */
  text-decoration: none !important; /* stylelint-disable-line declaration-no-important */
  white-space: pre;
}

.text-prompt > .auto-complete-text {
  color: var(--sys-color-token-subtle) !important; /* stylelint-disable-line declaration-no-important */
}

.text-prompt[data-placeholder] {
  &:empty::before {
    content: attr(data-placeholder);
    color: var(--sys-color-on-surface-subtle);
  }

  &.disabled:empty::before {
    color: var(--sys-color-state-disabled);
  }
}

.text-prompt:not([data-placeholder]):empty::after {
  content: "\\00A0";
  width: 0;
  display: block;
}

.text-prompt.disabled {
  opacity: 50%;
  cursor: default;
}

.text-prompt-editing br {
  display: none;
}

.text-prompt-root:not(:focus-within) ::selection {
  background: transparent;
}

@media (forced-colors: active) {
  .text-prompt[data-placeholder]:empty::before {
    color: GrayText !important; /* stylelint-disable-line declaration-no-important */
  }

  .text-prompt.disabled {
    opacity: 100%;
  }
}

/*# sourceURL=textPrompt.css */
`
};

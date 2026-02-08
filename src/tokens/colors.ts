import { defineTokens } from '@chakra-ui/react'

/**
 * Color tokens that reference CSS variables from cssVariables.ts
 * This ensures Chakra tokens stay in sync with CSS custom properties.
 */
export const colors = defineTokens.colors({
  // Surface Colors (deep purple monochrome)
  surface: {
    0: { value: 'var(--color-surface-0)' }, // Base background - darkest
    1: { value: 'var(--color-surface-1)' }, // Elevated surfaces
    2: { value: 'var(--color-surface-2)' }, // Cards/panels
    3: { value: 'var(--color-surface-3)' }, // Raised/hover states
  },

  // Text Colors (WCAG AA verified)
  text: {
    primary: { value: 'var(--color-text-primary)' }, // 16.49:1 contrast
    secondary: { value: 'var(--color-text-secondary)' }, // 12.29:1 contrast
    muted: { value: 'var(--color-text-muted)' }, // 8.72:1 contrast
    disabled: { value: 'var(--color-text-disabled)' }, // 6.32:1 contrast
  },

  // Primary (Purple - interactive)
  primary: {
    DEFAULT: { value: 'var(--color-interactive-primary)' },
    hover: { value: 'var(--color-interactive-primary-hover)' },
  },

  // Utility (Teal - complementary)
  utility: {
    DEFAULT: { value: 'var(--color-interactive-secondary)' },
    hover: { value: 'var(--color-interactive-secondary-hover)' },
  },

  // Emphasis (Rose - sparingly)
  emphasis: {
    DEFAULT: { value: 'var(--color-interactive-accent)' },
  },

  // Border Colors (neutral gray)
  border: {
    subtle: { value: 'var(--color-border-subtle)' },
    strong: { value: 'var(--color-border-strong)' },
  },

  // Status Colors
  status: {
    success: { value: 'var(--color-status-success)' },
    warning: { value: 'var(--color-status-warning)' },
    error: { value: 'var(--color-status-error)' },
    info: { value: 'var(--color-status-info)' },
  },

  // Overlays (purple-based transparency)
  overlay: {
    subtle: { value: 'var(--color-overlay-subtle)' }, // Hover tint
    light: { value: 'var(--color-overlay-light)' }, // Selected
    medium: { value: 'var(--color-overlay-medium)' }, // Active
    heavy: { value: 'var(--color-overlay-heavy)' }, // Emphasis
    error: { value: 'var(--color-overlay-error)' }, // Error tint
    backdrop: {
      light: { value: 'var(--color-overlay-backdrop-light)' },
      heavy: { value: 'var(--color-overlay-backdrop-heavy)' },
    },
  },
})

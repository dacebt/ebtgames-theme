/**
 * CSS Variables - Single Source of Truth
 *
 * This file defines all design tokens as CSS custom properties.
 * Chakra tokens reference these variables, ensuring consistency
 * between Chakra components and non-Chakra code (WebGL, etc.)
 *
 * Token naming: --{category}-{semantic}-{variant}
 * Examples: --color-surface-0, --color-text-primary, --shadow-glow-primary
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colorVariables = {
  // Surface Colors (neutral dark foundation)
  '--color-surface-0': '#0F1216', // Base background - darkest
  '--color-surface-1': '#18202A', // Elevated surfaces
  '--color-surface-2': '#222C38', // Cards/panels
  '--color-surface-3': '#2F3B4A', // Raised/hover states
  '--color-surface-card-top': '#31364A', // subtle purple cast
  '--color-surface-card-bottom': '#232B39',
  '--color-surface-control-top': '#2A3341',
  '--color-surface-control-bottom': '#1E2632',

  // Text Colors (WCAG AA verified against surface-0)
  '--color-text-primary': '#F3F6FB',
  '--color-text-secondary': '#D7DEE9',
  '--color-text-muted': '#AAB6C5',
  '--color-text-disabled': '#7F8A99',

  // Interactive - Primary (Purple)
  '--color-interactive-primary': '#9B7CFF',
  '--color-interactive-primary-hover': '#8A6EF0',

  // Interactive - Secondary (Teal)
  '--color-interactive-secondary': '#34CBBF',
  '--color-interactive-secondary-hover': '#5DD9CF',

  // Interactive - Accent (Rose)
  '--color-interactive-accent': '#E282AE',

  // Border Colors
  '--color-border-subtle': '#334051',
  '--color-border-strong': '#5D6D84',
  '--color-border-soft': '#465365',
  '--color-border-contrast': '#748AA4',

  // Status Colors
  '--color-status-success': '#34CBBF', // Teal
  '--color-status-warning': '#E0AD5D', // Amber
  '--color-status-error': '#E26662', // Red
  '--color-status-info': '#9B7CFF', // Purple

  // Overlay Colors (neutral transparency with accent overlays)
  '--color-overlay-subtle': 'rgba(255, 255, 255, 0.03)', // Hover tint
  '--color-overlay-light': 'rgba(255, 255, 255, 0.06)', // Selected
  '--color-overlay-medium': 'rgba(255, 255, 255, 0.1)', // Active
  '--color-overlay-heavy': 'rgba(255, 255, 255, 0.16)', // Emphasis
  '--color-overlay-primary-soft': 'rgba(155, 124, 255, 0.12)',
  '--color-overlay-secondary-soft': 'rgba(52, 203, 191, 0.12)',
  '--color-overlay-error': 'rgba(226, 102, 98, 0.14)', // Error tint
  '--color-overlay-backdrop-light': 'rgba(10, 12, 16, 0.78)',
  '--color-overlay-backdrop-heavy': 'rgba(10, 12, 16, 0.9)',
} as const

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typographyVariables = {
  // Font Families
  '--font-display': "'Courier New', 'Courier', monospace",
  '--font-heading': "'Courier New', 'Courier', monospace",
  '--font-body': "'Courier New', 'Courier', monospace",

  // Font Sizes (static scale)
  '--font-size-xs': '0.75rem', // 12px
  '--font-size-sm': '0.875rem', // 14px
  '--font-size-base': '1rem', // 16px
  '--font-size-md': '1.125rem', // 18px
  '--font-size-lg': '1.25rem', // 20px
  '--font-size-xl': '1.5rem', // 24px
  '--font-size-2xl': '2rem', // 32px
  '--font-size-3xl': '3rem', // 48px
  '--font-size-4xl': '4rem', // 64px

  // Font Sizes (responsive)
  '--font-size-cell': 'clamp(1rem, 3vw, 1.5rem)',
  '--font-size-hero': 'clamp(2.5rem, 8vw, 4rem)',
  '--font-size-subtitle': 'clamp(1rem, 3vw, 1.25rem)',

  // Font Weights
  '--font-weight-normal': '400',
  '--font-weight-medium': '600',
  '--font-weight-bold': '700',

  // Letter Spacing
  '--letter-spacing-tight': '0.05em',
  '--letter-spacing-normal': '0.1em',
  '--letter-spacing-wide': '0.2em',
} as const

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacingVariables = {
  '--spacing-2xs': '0.125rem', // 2px
  '--spacing-xs': '0.25rem', // 4px
  '--spacing-sm': '0.5rem', // 8px
  '--spacing-md': '1rem', // 16px
  '--spacing-lg': '1.5rem', // 24px
  '--spacing-xl': '2rem', // 32px
  '--spacing-2xl': '3rem', // 48px
} as const

// ============================================================================
// BORDER TOKENS
// ============================================================================

export const borderVariables = {
  // Border Widths
  '--border-width-thin': '1px',
  '--border-width-base': '2px',
  '--border-width-thick': '3px',

  // Border Radii
  '--radius-sm': '2px',
  '--radius-md': '4px',
  '--radius-lg': '6px',
} as const

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadowVariables = {
  // Depth shadows (layered)
  '--shadow-xs': '0 1px 2px rgba(0, 0, 0, 0.4)',
  '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)',
  '--shadow-md': '0 4px 16px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.4)',
  '--shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.5)',
  '--shadow-xl':
    '0 16px 48px rgba(0, 0, 0, 0.8), 0 8px 24px rgba(0, 0, 0, 0.6)',
  '--shadow-elevation-1':
    '0 1px 2px rgba(0, 0, 0, 0.36), 0 3px 8px rgba(0, 0, 0, 0.22)',
  '--shadow-elevation-2':
    '0 6px 16px rgba(0, 0, 0, 0.32), 0 2px 6px rgba(0, 0, 0, 0.2)',
  '--shadow-elevation-3':
    '0 12px 28px rgba(0, 0, 0, 0.36), 0 6px 14px rgba(0, 0, 0, 0.24)',

  // Glow shadows - Primary (Purple)
  '--shadow-glow-primary': '0 0 10px rgba(155, 124, 255, 0.24)',
  '--shadow-glow-primary-lg':
    '0 0 20px rgba(155, 124, 255, 0.3), 0 0 40px rgba(155, 124, 255, 0.18)',
  '--shadow-glow-primary-xl':
    '0 0 30px rgba(155, 124, 255, 0.38), 0 0 60px rgba(155, 124, 255, 0.24)',

  // Glow shadows - Secondary (Teal)
  '--shadow-glow-secondary': '0 0 10px rgba(52, 203, 191, 0.2)',
  '--shadow-glow-secondary-lg':
    '0 0 20px rgba(52, 203, 191, 0.28), 0 0 40px rgba(52, 203, 191, 0.15)',

  // Glow shadows - Accent (Rose)
  '--shadow-glow-accent': '0 0 10px rgba(226, 130, 174, 0.2)',
  '--shadow-glow-accent-lg':
    '0 0 20px rgba(226, 130, 174, 0.28), 0 0 40px rgba(226, 130, 174, 0.15)',

  // Glow shadows - Error
  '--shadow-glow-error': '0 0 10px rgba(226, 102, 98, 0.24)',
  '--shadow-focus-ring-primary': '0 0 0 2px rgba(155, 124, 255, 0.55)',
  '--shadow-focus-ring-secondary': '0 0 0 2px rgba(52, 203, 191, 0.55)',

  // Inset shadows
  '--shadow-inset-primary': 'inset 0 0 10px rgba(155, 124, 255, 0.18)',
  '--shadow-inset-subtle': 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
  '--shadow-inset-deep': 'inset 0 2px 8px rgba(0, 0, 0, 0.5)',
  '--shadow-press-inset': 'inset 0 2px 6px rgba(0, 0, 0, 0.45)',
} as const

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const zIndexVariables = {
  '--z-index-base': '1',
  '--z-index-dropdown': '100',
  '--z-index-overlay': '500',
  '--z-index-modal': '1000',
  '--z-index-toast': '1500',
  '--z-index-fullscreen': '2000',
} as const

// ============================================================================
// TIMING TOKENS
// ============================================================================

export const timingVariables = {
  // Durations
  '--timing-fast': '150ms',
  '--timing-base': '200ms',
  '--timing-slow': '300ms',

  // Easing functions
  '--easing-default': 'ease',
  '--easing-out': 'ease-out',
  '--easing-in-out': 'ease-in-out',
} as const

// ============================================================================
// BREAKPOINT TOKENS (for JS reference)
// ============================================================================

export const breakpointVariables = {
  '--breakpoint-mobile': '767px',
  '--breakpoint-tablet': '768px',
  '--breakpoint-desktop': '1024px',
} as const

// ============================================================================
// BACKWARD COMPATIBILITY ALIASES
// ============================================================================

/**
 * Aliases for legacy CSS variable names used in ninefold/wordtrace.
 * These ensure existing code continues to work during migration.
 */
export const legacyAliases = {
  // Color aliases
  '--color-primary': 'var(--color-interactive-primary)',
  '--color-primary-hover': 'var(--color-interactive-primary-hover)',
  '--color-utility': 'var(--color-interactive-secondary)',
  '--color-utility-hover': 'var(--color-interactive-secondary-hover)',
  '--color-emphasis': 'var(--color-interactive-accent)',
  '--color-success': 'var(--color-status-success)',
  '--color-warning': 'var(--color-status-warning)',
  '--color-error': 'var(--color-status-error)',

  // Shadow glow aliases
  '--shadow-glow-utility': 'var(--shadow-glow-secondary)',
  '--shadow-glow-utility-lg': 'var(--shadow-glow-secondary-lg)',
  '--shadow-glow-emphasis': 'var(--shadow-glow-accent)',
  '--shadow-glow-emphasis-lg': 'var(--shadow-glow-accent-lg)',

  // Border radius aliases
  '--border-radius-sm': 'var(--radius-sm)',
  '--border-radius-md': 'var(--radius-md)',
  '--border-radius-lg': 'var(--radius-lg)',

  // Timing aliases
  '--transition-fast': 'var(--timing-fast)',
  '--transition-base': 'var(--timing-base)',
  '--transition-slow': 'var(--timing-slow)',
  '--ease-default': 'var(--easing-default)',
  '--ease-out': 'var(--easing-out)',
} as const

// ============================================================================
// ALL VARIABLES COMBINED
// ============================================================================

export const allCssVariables = {
  ...colorVariables,
  ...typographyVariables,
  ...spacingVariables,
  ...borderVariables,
  ...shadowVariables,
  ...zIndexVariables,
  ...timingVariables,
  ...breakpointVariables,
  ...legacyAliases,
} as const

// Type for CSS variable names
export type CssVariableName = keyof typeof allCssVariables

// Helper to get CSS variable value
export function getCssVariable(name: CssVariableName): string {
  return allCssVariables[name]
}

// Helper to create var() reference
export function cssVar(name: CssVariableName): string {
  return `var(${name})`
}

// CSS string for :root injection (used in globalStyles)
export function generateCssVariablesString(): string {
  return Object.entries(allCssVariables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n  ')
}

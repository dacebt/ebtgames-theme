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
  // Surface Colors (deep purple monochrome)
  '--color-surface-0': '#1B0F26', // Base background - darkest
  '--color-surface-1': '#24122F', // Elevated surfaces
  '--color-surface-2': '#2B173A', // Cards/panels
  '--color-surface-3': '#342046', // Raised/hover states

  // Text Colors (WCAG AA verified against surface-0)
  '--color-text-primary': '#F5F1FA', // 16.49:1 contrast
  '--color-text-secondary': '#D8D0E3', // 12.29:1 contrast
  '--color-text-muted': '#B9AEC9', // 8.72:1 contrast
  '--color-text-disabled': '#9E92B4', // 6.32:1 contrast

  // Interactive - Primary (Purple)
  '--color-interactive-primary': '#7C5BD6',
  '--color-interactive-primary-hover': '#6F4FCB',

  // Interactive - Secondary (Teal)
  '--color-interactive-secondary': '#2AB9B0',
  '--color-interactive-secondary-hover': '#52D6CC',

  // Interactive - Accent (Rose)
  '--color-interactive-accent': '#D86B9A',

  // Border Colors
  '--color-border-subtle': '#3A3341',
  '--color-border-strong': '#4A4354',

  // Status Colors
  '--color-status-success': '#2AB9B0', // Teal
  '--color-status-warning': '#D9A24F', // Amber
  '--color-status-error': '#D8524D', // Red
  '--color-status-info': '#7C5BD6', // Purple

  // Overlay Colors (purple-based transparency)
  '--color-overlay-subtle': 'rgba(124, 91, 214, 0.05)', // Hover tint
  '--color-overlay-light': 'rgba(124, 91, 214, 0.1)', // Selected
  '--color-overlay-medium': 'rgba(124, 91, 214, 0.15)', // Active
  '--color-overlay-heavy': 'rgba(124, 91, 214, 0.25)', // Emphasis
  '--color-overlay-error': 'rgba(216, 82, 77, 0.12)', // Error tint
  '--color-overlay-backdrop-light': 'rgba(27, 15, 38, 0.8)',
  '--color-overlay-backdrop-heavy': 'rgba(27, 15, 38, 0.95)',
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

  // Glow shadows - Primary (Purple)
  '--shadow-glow-primary': '0 0 10px rgba(124, 91, 214, 0.4)',
  '--shadow-glow-primary-lg':
    '0 0 20px rgba(124, 91, 214, 0.5), 0 0 40px rgba(124, 91, 214, 0.3)',
  '--shadow-glow-primary-xl':
    '0 0 30px rgba(124, 91, 214, 0.6), 0 0 60px rgba(124, 91, 214, 0.4)',

  // Glow shadows - Secondary (Teal)
  '--shadow-glow-secondary': '0 0 10px rgba(42, 185, 176, 0.3)',
  '--shadow-glow-secondary-lg':
    '0 0 20px rgba(42, 185, 176, 0.4), 0 0 40px rgba(42, 185, 176, 0.2)',

  // Glow shadows - Accent (Rose)
  '--shadow-glow-accent': '0 0 10px rgba(216, 107, 154, 0.3)',
  '--shadow-glow-accent-lg':
    '0 0 20px rgba(216, 107, 154, 0.4), 0 0 40px rgba(216, 107, 154, 0.2)',

  // Glow shadows - Error
  '--shadow-glow-error': '0 0 10px rgba(216, 82, 77, 0.4)',

  // Inset shadows
  '--shadow-inset-primary': 'inset 0 0 10px rgba(124, 91, 214, 0.3)',
  '--shadow-inset-subtle': 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
  '--shadow-inset-deep': 'inset 0 2px 8px rgba(0, 0, 0, 0.5)',
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

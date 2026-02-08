/**
 * WCAG Contrast Ratio Utilities
 *
 * Provides functions to calculate and verify contrast ratios
 * between colors for accessibility compliance.
 */

/**
 * Parse a hex color string to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) {
    throw new Error(`Invalid hex color: ${hex}`)
  }
  return {
    r: parseInt(result[1]!, 16),
    g: parseInt(result[2]!, 16),
    b: parseInt(result[3]!, 16),
  }
}

/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.1 definition: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
export function relativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs! + 0.7152 * gs! + 0.0722 * bs!
}

/**
 * Calculate contrast ratio between two colors
 * Returns a value between 1 and 21
 */
export function contrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  const l1 = relativeLuminance(rgb1.r, rgb1.g, rgb1.b)
  const l2 = relativeLuminance(rgb2.r, rgb2.g, rgb2.b)

  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Format contrast ratio for display (e.g., "16.49:1")
 */
export function formatContrastRatio(ratio: number): string {
  return `${ratio.toFixed(2)}:1`
}

/**
 * WCAG compliance levels
 */
export type WcagLevel = 'AAA' | 'AA' | 'AA-large' | 'fail'

/**
 * Check WCAG compliance level for a contrast ratio
 * @param ratio - The contrast ratio
 * @param isLargeText - Whether the text is considered "large" (14pt bold or 18pt regular)
 */
export function getWcagLevel(ratio: number, isLargeText = false): WcagLevel {
  if (isLargeText) {
    if (ratio >= 4.5) return 'AAA'
    if (ratio >= 3) return 'AA'
    return 'fail'
  } else {
    if (ratio >= 7) return 'AAA'
    if (ratio >= 4.5) return 'AA'
    if (ratio >= 3) return 'AA-large'
    return 'fail'
  }
}

/**
 * Get a human-readable description of WCAG compliance
 */
export function getWcagDescription(level: WcagLevel): string {
  switch (level) {
    case 'AAA':
      return 'Enhanced accessibility (AAA)'
    case 'AA':
      return 'Minimum accessibility (AA)'
    case 'AA-large':
      return 'Large text only (AA)'
    case 'fail':
      return 'Does not meet WCAG standards'
  }
}

/**
 * Check if a contrast ratio meets minimum WCAG AA requirements
 */
export function meetsWcagAA(ratio: number, isLargeText = false): boolean {
  const level = getWcagLevel(ratio, isLargeText)
  return level === 'AAA' || level === 'AA'
}

/**
 * Get all color pairs with their contrast ratios
 * Useful for building contrast grids
 */
export interface ContrastPair {
  foreground: string
  background: string
  ratio: number
  level: WcagLevel
}

export function getContrastPairs(
  foregrounds: Record<string, string>,
  backgrounds: Record<string, string>
): ContrastPair[] {
  const pairs: ContrastPair[] = []

  for (const [fgName, fgColor] of Object.entries(foregrounds)) {
    for (const [bgName, bgColor] of Object.entries(backgrounds)) {
      const ratio = contrastRatio(fgColor, bgColor)
      pairs.push({
        foreground: fgName,
        background: bgName,
        ratio,
        level: getWcagLevel(ratio),
      })
    }
  }

  return pairs
}

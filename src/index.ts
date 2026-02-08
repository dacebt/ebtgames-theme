import { createSystem, defaultConfig } from '@chakra-ui/react'
import { colors } from './tokens/colors'
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
} from './tokens/typography'
import { spacing } from './tokens/spacing'
import { borderWidths, radii } from './tokens/borders'
import { shadows } from './tokens/shadows'
import { zIndex } from './tokens/zIndex'
import { semanticTokens } from './semanticTokens'
import { keyframes } from './keyframes/animations'
import { globalCss } from './globalStyles'
import { breakpoints } from './breakpoints'
import { recipes } from './recipes'
import { slotRecipes } from './slotRecipes'

// Export CSS variable utilities for non-Chakra code (WebGL, etc.)
export {
  allCssVariables,
  colorVariables,
  typographyVariables,
  spacingVariables,
  borderVariables,
  shadowVariables,
  zIndexVariables,
  timingVariables,
  breakpointVariables,
  getCssVariable,
  cssVar,
  generateCssVariablesString,
} from './cssVariables'
export type { CssVariableName } from './cssVariables'

// Export contrast utilities for accessibility verification
export {
  hexToRgb,
  relativeLuminance,
  contrastRatio,
  formatContrastRatio,
  getWcagLevel,
  getWcagDescription,
  meetsWcagAA,
  getContrastPairs,
} from './utils/contrast'
export type { WcagLevel, ContrastPair } from './utils/contrast'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors,
      fonts,
      fontSizes,
      fontWeights,
      letterSpacings,
      spacing,
      borderWidths,
      radii,
      shadows,
      zIndex,
    },
    semanticTokens,
    keyframes,
    breakpoints,
    recipes,
    slotRecipes,
  },
  globalCss,
})

import { defineRecipe } from '@chakra-ui/react'

/**
 * Badge recipe for labels and tags
 */
export const badgeRecipe = defineRecipe({
  className: 'badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    borderRadius: 'sm',
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      solid: {
        color: 'surface.0',
      },
      subtle: {
        borderWidth: 'thin',
        borderStyle: 'solid',
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 'thin',
        borderStyle: 'solid',
      },
    },
    colorScheme: {
      primary: {},
      secondary: {},
      accent: {},
      success: {},
      warning: {},
      error: {},
    },
    size: {
      sm: {
        fontSize: 'xs',
        paddingX: 'xs',
        paddingY: '2xs',
      },
      md: {
        fontSize: 'xs',
        paddingX: 'sm',
        paddingY: 'xs',
      },
      lg: {
        fontSize: 'sm',
        paddingX: 'md',
        paddingY: 'xs',
      },
    },
  },
  compoundVariants: [
    // Solid variants
    {
      variant: 'solid',
      colorScheme: 'primary',
      css: {
        backgroundColor: 'primary.DEFAULT',
        color: 'surface.0',
      },
    },
    {
      variant: 'solid',
      colorScheme: 'secondary',
      css: {
        backgroundColor: 'utility.DEFAULT',
        color: 'surface.0',
      },
    },
    {
      variant: 'solid',
      colorScheme: 'accent',
      css: {
        backgroundColor: 'emphasis.DEFAULT',
        color: 'surface.0',
      },
    },
    {
      variant: 'solid',
      colorScheme: 'success',
      css: {
        backgroundColor: 'status.success',
        color: 'surface.0',
      },
    },
    {
      variant: 'solid',
      colorScheme: 'warning',
      css: {
        backgroundColor: 'status.warning',
        color: 'surface.0',
      },
    },
    {
      variant: 'solid',
      colorScheme: 'error',
      css: {
        backgroundColor: 'status.error',
        color: 'surface.0',
      },
    },
    // Subtle variants
    {
      variant: 'subtle',
      colorScheme: 'primary',
      css: {
        backgroundColor: 'overlay.light',
        color: 'primary.DEFAULT',
        borderColor: 'primary.DEFAULT',
      },
    },
    {
      variant: 'subtle',
      colorScheme: 'secondary',
      css: {
        backgroundColor: 'rgba(42, 185, 176, 0.1)',
        color: 'utility.DEFAULT',
        borderColor: 'utility.DEFAULT',
      },
    },
    {
      variant: 'subtle',
      colorScheme: 'accent',
      css: {
        backgroundColor: 'rgba(216, 107, 154, 0.1)',
        color: 'emphasis.DEFAULT',
        borderColor: 'emphasis.DEFAULT',
      },
    },
    {
      variant: 'subtle',
      colorScheme: 'success',
      css: {
        backgroundColor: 'rgba(42, 185, 176, 0.1)',
        color: 'status.success',
        borderColor: 'status.success',
      },
    },
    {
      variant: 'subtle',
      colorScheme: 'warning',
      css: {
        backgroundColor: 'rgba(217, 162, 79, 0.1)',
        color: 'status.warning',
        borderColor: 'status.warning',
      },
    },
    {
      variant: 'subtle',
      colorScheme: 'error',
      css: {
        backgroundColor: 'overlay.error',
        color: 'status.error',
        borderColor: 'status.error',
      },
    },
    // Outline variants
    {
      variant: 'outline',
      colorScheme: 'primary',
      css: {
        color: 'primary.DEFAULT',
        borderColor: 'primary.DEFAULT',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'secondary',
      css: {
        color: 'utility.DEFAULT',
        borderColor: 'utility.DEFAULT',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'accent',
      css: {
        color: 'emphasis.DEFAULT',
        borderColor: 'emphasis.DEFAULT',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'success',
      css: {
        color: 'status.success',
        borderColor: 'status.success',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'warning',
      css: {
        color: 'status.warning',
        borderColor: 'status.warning',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'error',
      css: {
        color: 'status.error',
        borderColor: 'status.error',
      },
    },
  ],
  defaultVariants: {
    variant: 'subtle',
    colorScheme: 'primary',
    size: 'md',
  },
})

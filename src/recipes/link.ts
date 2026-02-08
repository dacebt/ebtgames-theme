import { defineRecipe } from '@chakra-ui/react'

/**
 * Link recipe for text links
 */
export const linkRecipe = defineRecipe({
  className: 'link',
  base: {
    color: 'primary.DEFAULT',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all var(--timing-fast) var(--easing-default)',

    _hover: {
      color: 'primary.hover',
      textDecoration: 'underline',
    },

    _active: {
      color: 'primary.hover',
    },

    _focusVisible: {
      outline: '2px solid var(--color-interactive-primary)',
      outlineOffset: '2px',
      borderRadius: 'sm',
    },
  },
  variants: {
    variant: {
      primary: {
        color: 'primary.DEFAULT',
        _hover: {
          color: 'primary.hover',
        },
      },
      secondary: {
        color: 'utility.DEFAULT',
        _hover: {
          color: 'utility.hover',
        },
      },
      muted: {
        color: 'text.muted',
        _hover: {
          color: 'text.primary',
        },
      },
    },
    underline: {
      always: {
        textDecoration: 'underline',
      },
      hover: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
        },
      },
      none: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    underline: 'hover',
  },
})

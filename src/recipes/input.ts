import { defineRecipe } from '@chakra-ui/react'

/**
 * Input recipe for text inputs and textareas
 */
export const inputRecipe = defineRecipe({
  className: 'input',
  base: {
    fontFamily: 'body',
    fontSize: 'base',
    color: 'text.primary',
    backgroundColor: 'surface.0',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    borderRadius: 'md',
    padding: 'sm',
    width: '100%',
    transition: 'all var(--timing-base) var(--easing-default)',

    _placeholder: {
      color: 'text.muted',
    },

    _hover: {
      borderColor: 'border.strong',
    },

    _focus: {
      borderColor: 'primary.DEFAULT',
      boxShadow: 'var(--shadow-glow-primary)',
      outline: 'none',
    },

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: 'surface.1',
    },

    _invalid: {
      borderColor: 'status.error',
      boxShadow: 'var(--shadow-glow-error)',
    },
  },
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
        padding: 'xs',
        borderRadius: 'sm',
      },
      md: {
        fontSize: 'base',
        padding: 'sm',
        borderRadius: 'md',
      },
      lg: {
        fontSize: 'md',
        padding: 'md',
        borderRadius: 'md',
      },
    },
    variant: {
      outline: {
        backgroundColor: 'transparent',
        borderColor: 'border.subtle',
      },
      filled: {
        backgroundColor: 'surface.1',
        borderColor: 'transparent',
        _hover: {
          backgroundColor: 'surface.2',
        },
        _focus: {
          backgroundColor: 'surface.0',
          borderColor: 'primary.DEFAULT',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})

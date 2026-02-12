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
    backgroundColor: 'surface.1',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.soft',
    borderRadius: 'md',
    padding: 'sm',
    width: '100%',
    transition: 'box-shadow var(--timing-base) var(--easing-default), border-color var(--timing-base) var(--easing-default), background-color var(--timing-base) var(--easing-default)',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), var(--shadow-inset-subtle)',

    _placeholder: {
      color: 'text.muted',
    },

    _hover: {
      borderColor: 'border.contrast',
    },

    _focus: {
      borderColor: 'primary.DEFAULT',
      boxShadow:
        'input.focus, inset 0 1px 0 rgba(255, 255, 255, 0.05), var(--shadow-inset-subtle)',
      outline: 'none',
    },

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: 'surface.1',
    },

    _invalid: {
      borderColor: 'status.error',
      boxShadow:
        '0 0 0 var(--border-width-thin) rgba(226, 102, 98, 0.5), 0 0 4px rgba(226, 102, 98, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05), var(--shadow-inset-subtle)',
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
        backgroundColor: 'surface.1',
        borderColor: 'border.soft',
      },
      filled: {
        backgroundColor: 'surface.2',
        borderColor: 'border.soft',
        _hover: {
          borderColor: 'border.contrast',
          backgroundColor: 'surface.2',
        },
        _focus: {
          backgroundColor: 'surface.2',
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

import { defineSlotRecipe } from '@chakra-ui/react'

/**
 * Accordion slot recipe for collapsible sections
 * Based on ninefold ControlPanel patterns
 */
export const accordionSlotRecipe = defineSlotRecipe({
  className: 'accordion',
  slots: ['root', 'item', 'trigger', 'icon', 'content'],
  base: {
    root: {
      width: '100%',
    },
    item: {
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderColor: 'border.subtle',
      borderRadius: 'md',
      overflow: 'hidden',
      marginBottom: 'sm',

      _last: {
        marginBottom: 0,
      },
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: 'sm',
      backgroundColor: 'surface.0',
      borderWidth: 0,
      borderBottomWidth: 'thin',
      borderStyle: 'solid',
      borderColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'primary.DEFAULT',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      transition: 'all var(--timing-base) var(--easing-default)',
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',

      _hover: {
        backgroundColor: 'surface.1',
      },

      _expanded: {
        borderBottomColor: 'border.subtle',
        backgroundColor: 'surface.1',
      },
    },
    icon: {
      transition: 'transform var(--timing-base) var(--easing-default)',
      color: 'text.muted',

      _expanded: {
        transform: 'rotate(180deg)',
      },
    },
    content: {
      padding: 'md',
      backgroundColor: 'surface.1',
    },
  },
  variants: {
    variant: {
      subtle: {
        item: {
          borderColor: 'border.subtle',
        },
        trigger: {
          backgroundColor: 'surface.0',
        },
        content: {
          backgroundColor: 'surface.1',
        },
      },
      outline: {
        item: {
          borderColor: 'border.strong',
        },
        trigger: {
          backgroundColor: 'transparent',
          _hover: {
            backgroundColor: 'overlay.subtle',
          },
        },
        content: {
          backgroundColor: 'transparent',
        },
      },
      solid: {
        item: {
          borderColor: 'primary.DEFAULT',
          boxShadow: 'var(--shadow-glow-primary)',
        },
        trigger: {
          backgroundColor: 'surface.1',
          borderBottomColor: 'primary.DEFAULT',
        },
        content: {
          backgroundColor: 'surface.0',
        },
      },
    },
    size: {
      sm: {
        trigger: {
          padding: 'xs',
          fontSize: 'xs',
        },
        content: {
          padding: 'sm',
        },
      },
      md: {
        trigger: {
          padding: 'sm',
          fontSize: 'sm',
        },
        content: {
          padding: 'md',
        },
      },
      lg: {
        trigger: {
          padding: 'md',
          fontSize: 'base',
        },
        content: {
          padding: 'lg',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
})

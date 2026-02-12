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
      borderColor: 'border.soft',
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
      background:
        'linear-gradient(145deg, var(--color-surface-control-top), var(--color-surface-control-bottom))',
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
        borderColor: 'border.contrast',
        background:
          'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
      },

      _expanded: {
        borderBottomColor: 'border.soft',
        background:
          'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
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
      backgroundColor: 'surface.2',
    },
  },
  variants: {
    variant: {
      subtle: {
        item: {
          borderColor: 'border.soft',
        },
        trigger: {
          background:
            'linear-gradient(145deg, var(--color-surface-control-top), var(--color-surface-control-bottom))',
        },
        content: {
          backgroundColor: 'surface.2',
        },
      },
      outline: {
        item: {
          borderColor: 'border.contrast',
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
          boxShadow: 'var(--shadow-elevation-2), var(--shadow-glow-primary)',
        },
        trigger: {
          background:
            'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
          borderBottomColor: 'primary.DEFAULT',
        },
        content: {
          backgroundColor: 'surface.2',
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

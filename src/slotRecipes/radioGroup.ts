import { defineSlotRecipe } from '@chakra-ui/react'

/**
 * RadioGroup slot recipe for selection groups
 * Based on ninefold SettingsModal patterns
 */
export const radioGroupSlotRecipe = defineSlotRecipe({
  className: 'radioGroup',
  slots: ['root', 'label', 'group', 'item', 'indicator', 'text', 'description'],
  base: {
    root: {
      width: '100%',
    },
    label: {
      fontFamily: 'body',
      fontSize: 'base',
      fontWeight: 'medium',
      color: 'text.secondary',
      textTransform: 'uppercase',
      letterSpacing: 'tight',
      marginBottom: 'md',
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    },
    item: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'sm',
      padding: 'sm',
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderColor: 'border.soft',
      borderRadius: 'md',
      background:
        'linear-gradient(145deg, var(--color-surface-control-top), var(--color-surface-control-bottom))',
      cursor: 'pointer',
      transition: 'all var(--timing-base) var(--easing-default)',

      _hover: {
        borderColor: 'border.contrast',
        backgroundColor: 'overlay.light',
      },

      _checked: {
        borderColor: 'primary.DEFAULT',
        backgroundColor: 'overlay.primarySoft',
        boxShadow: 'var(--shadow-focus-ring-primary)',
      },

      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        _hover: {
          borderColor: 'border.soft',
          background:
            'linear-gradient(145deg, var(--color-surface-control-top), var(--color-surface-control-bottom))',
        },
      },
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px',
      height: '18px',
      borderWidth: 'base',
      borderStyle: 'solid',
      borderColor: 'border.contrast',
      borderRadius: '50%',
      backgroundColor: 'surface.0',
      flexShrink: 0,
      marginTop: '2px',
      transition: 'all var(--timing-fast) var(--easing-default)',

      _checked: {
        borderColor: 'primary.DEFAULT',
        backgroundColor: 'primary.DEFAULT',

        _after: {
          content: '""',
          display: 'block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'surface.0',
        },
      },
    },
    text: {
      fontSize: 'base',
      fontWeight: 'medium',
      color: 'text.primary',
    },
    description: {
      fontSize: 'sm',
      color: 'text.muted',
      marginTop: '2xs',
    },
  },
  variants: {
    variant: {
      outline: {
        item: {
          backgroundColor: 'transparent',
        },
      },
      subtle: {
        item: {
          backgroundColor: 'surface.2',
          _hover: {
            backgroundColor: 'surface.3',
          },
          _checked: {
            backgroundColor: 'overlay.primarySoft',
          },
        },
      },
      cards: {
        item: {
          padding: 'md',
          borderRadius: 'md',
          boxShadow: 'var(--shadow-elevation-1)',
          _checked: {
            boxShadow: 'var(--shadow-elevation-2), var(--shadow-focus-ring-primary)',
          },
        },
      },
    },
    orientation: {
      vertical: {
        group: {
          flexDirection: 'column',
        },
      },
      horizontal: {
        group: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        item: {
          flex: '1 1 auto',
        },
      },
    },
    size: {
      sm: {
        item: {
          padding: 'xs',
        },
        indicator: {
          width: '14px',
          height: '14px',
          _checked: {
            _after: {
              width: '6px',
              height: '6px',
            },
          },
        },
        text: {
          fontSize: 'sm',
        },
        description: {
          fontSize: 'xs',
        },
      },
      md: {
        item: {
          padding: 'sm',
        },
        indicator: {
          width: '18px',
          height: '18px',
        },
        text: {
          fontSize: 'base',
        },
        description: {
          fontSize: 'sm',
        },
      },
      lg: {
        item: {
          padding: 'md',
        },
        indicator: {
          width: '22px',
          height: '22px',
          _checked: {
            _after: {
              width: '10px',
              height: '10px',
            },
          },
        },
        text: {
          fontSize: 'md',
        },
        description: {
          fontSize: 'base',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    orientation: 'vertical',
    size: 'md',
  },
})

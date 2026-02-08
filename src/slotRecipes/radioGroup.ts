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
      color: 'primary.DEFAULT',
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
      borderColor: 'border.subtle',
      borderRadius: 'md',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'all var(--timing-base) var(--easing-default)',

      _hover: {
        borderColor: 'primary.DEFAULT',
        backgroundColor: 'overlay.subtle',
      },

      _checked: {
        borderColor: 'primary.DEFAULT',
        backgroundColor: 'overlay.light',
      },

      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        _hover: {
          borderColor: 'border.subtle',
          backgroundColor: 'transparent',
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
      borderColor: 'border.strong',
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
          backgroundColor: 'surface.1',
          _hover: {
            backgroundColor: 'surface.2',
          },
          _checked: {
            backgroundColor: 'overlay.light',
          },
        },
      },
      cards: {
        item: {
          padding: 'md',
          borderRadius: 'md',
          boxShadow: 'var(--shadow-xs)',
          _checked: {
            boxShadow: 'var(--shadow-sm), var(--shadow-glow-primary)',
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

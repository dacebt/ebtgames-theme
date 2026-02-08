import { defineSlotRecipe } from '@chakra-ui/react'

export const switchSlotRecipe = defineSlotRecipe({
  className: 'switch',
  slots: ['root', 'label', 'control', 'thumb', 'indicator'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'sm',
      position: 'relative',
      '--switch-width': 'sizes.10',
      '--switch-height': 'sizes.5',
      '--switch-diff': 'calc(var(--switch-width) - var(--switch-height))',
      '--switch-x': {
        base: 'var(--switch-diff)',
        _rtl: 'calc(var(--switch-diff) * -1)',
      },
    },
    label: {
      fontFamily: 'body',
      fontSize: 'xs',
      color: 'text.primary',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
      userSelect: 'none',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      borderRadius: 'full',
      borderWidth: 'base',
      borderStyle: 'solid',
      borderColor: 'border.strong',
      background:
        'linear-gradient(140deg, var(--color-surface-2), var(--color-surface-1) 50%, var(--color-surface-0))',
      boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      transition: 'all 200ms ease',
      _checked: {
        borderColor: 'primary.DEFAULT',
        background:
          'linear-gradient(140deg, var(--color-interactive-primary-hover), var(--color-interactive-primary))',
        boxShadow: 'var(--shadow-md), var(--shadow-glow-primary), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
    },
    thumb: {
      width: 'var(--switch-height)',
      height: 'var(--switch-height)',
      borderRadius: 'full',
      background: 'surface.0',
      boxShadow: 'var(--shadow-sm)',
      transitionProperty: 'translate',
      transitionDuration: 'fast',
      _checked: {
        translate: 'var(--switch-x) 0',
        background: 'surface.0',
      },
    },
  },
})

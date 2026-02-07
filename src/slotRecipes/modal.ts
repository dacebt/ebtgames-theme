import { defineSlotRecipe } from '@chakra-ui/react'

export const modalSlotRecipe = defineSlotRecipe({
  className: 'modal',
  slots: ['backdrop', 'modal', 'header', 'title', 'content'],
  base: {
    backdrop: {
      position: 'fixed',
      inset: 0,
      background: '{colors.overlay.backdrop.heavy}',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 'modal',
      padding: 'md',
    },
    modal: {
      background: 'linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})',
      borderWidth: 'base',
      borderStyle: 'solid',
      borderColor: 'primary.DEFAULT',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '{shadows.xl}, {shadows.glow.primary-xl}, inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      borderRadius: 'md',
    },
    header: {
      padding: 'lg',
      borderBottomWidth: 'thin',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border.subtle',
      background: 'linear-gradient(180deg, {colors.overlay.light}, transparent)',
    },
    title: {
      margin: 0,
      fontFamily: 'display',
      fontSize: 'xl',
      color: 'text.primary',
      textTransform: 'uppercase',
      letterSpacing: 'tight',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    },
    content: {
      padding: 'lg',
    },
  },
})

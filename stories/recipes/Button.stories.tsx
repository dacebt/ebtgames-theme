import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Button',
}

export default meta
type Story = StoryObj

const Button = styled('button', {
  base: {
    fontFamily: 'body',
    fontSize: 'base',
    px: 'lg',
    py: 'sm',
    borderWidth: 'base',
    borderStyle: 'solid',
    borderColor: 'border.strong',
    background: 'linear-gradient(145deg, var(--color-surface-1), var(--color-surface-0))',
    color: 'text.primary',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    fontWeight: 'medium',
    borderRadius: 'md',
    boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.05)',

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    _focusVisible: {
      outline: '2px solid var(--color-interactive-primary)',
      outlineOffset: '2px',
    },
  },
  variants: {
    variant: {
      primary: {
        borderColor: 'primary.DEFAULT',
        color: 'primary.DEFAULT',
        _hover: {
          background: 'linear-gradient(145deg, var(--color-interactive-primary-hover), var(--color-interactive-primary))',
          color: 'surface.0',
          boxShadow: 'var(--shadow-md), var(--shadow-glow-primary-lg)',
          transform: 'translateY(-2px)',
        },
        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-xs), var(--shadow-glow-primary)',
        },
      },
      secondary: {
        borderColor: 'utility.DEFAULT',
        color: 'utility.DEFAULT',
        _hover: {
          background: 'linear-gradient(145deg, var(--color-interactive-secondary), var(--color-interactive-secondary-hover))',
          color: 'surface.0',
          boxShadow: 'var(--shadow-md), var(--shadow-glow-secondary-lg)',
          transform: 'translateY(-2px)',
        },
        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-xs), var(--shadow-glow-secondary)',
        },
      },
      danger: {
        borderColor: 'status.error',
        color: 'status.error',
        _hover: {
          background: 'linear-gradient(145deg, var(--color-status-error), var(--color-status-error))',
          color: 'surface.0',
          boxShadow: 'var(--shadow-md), var(--shadow-glow-error)',
          transform: 'translateY(-2px)',
        },
        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-xs), var(--shadow-glow-error)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Button Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Primary, secondary, and danger button styles
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </Flex>
    </Flex>
  ),
}

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Button States
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Default, hover (try hovering), disabled states
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap" align="center">
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </Flex>
    </Flex>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Interactive Demo
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Hover and click to see transitions
        </Text>
      </Box>
      <Box p="lg" bg="surface.1" borderRadius="md">
        <Flex gap="4" justify="center">
          <Button variant="primary">Start Game</Button>
          <Button variant="secondary">Settings</Button>
        </Flex>
      </Box>
    </Flex>
  ),
}

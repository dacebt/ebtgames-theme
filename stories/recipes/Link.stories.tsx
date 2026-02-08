import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Link',
}

export default meta
type Story = StoryObj

const Link = styled('a', {
  base: {
    color: 'primary.DEFAULT',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 150ms ease',

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
        _hover: { color: 'primary.hover' },
      },
      secondary: {
        color: 'utility.DEFAULT',
        _hover: { color: 'utility.hover' },
      },
      muted: {
        color: 'text.muted',
        _hover: { color: 'text.primary' },
      },
    },
    underline: {
      always: {
        textDecoration: 'underline',
      },
      hover: {
        textDecoration: 'none',
        _hover: { textDecoration: 'underline' },
      },
      none: {
        textDecoration: 'none',
        _hover: { textDecoration: 'none' },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    underline: 'hover',
  },
})

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Link Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Primary, secondary, and muted link colors
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Link variant="primary" href="#">Primary link</Link>
        </Box>
        <Box>
          <Link variant="secondary" href="#">Secondary link</Link>
        </Box>
        <Box>
          <Link variant="muted" href="#">Muted link</Link>
        </Box>
      </Flex>
    </Flex>
  ),
}

export const UnderlineStyles: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Underline Styles
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Different underline behaviors
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="1">Always underlined</Text>
          <Link underline="always" href="#">Always visible underline</Link>
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="1">Underline on hover</Text>
          <Link underline="hover" href="#">Underline appears on hover</Link>
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="1">No underline</Text>
          <Link underline="none" href="#">Never underlined</Link>
        </Box>
      </Flex>
    </Flex>
  ),
}

export const InContext: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Links in Context
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Links within paragraph text
        </Text>
      </Box>
      <Box p="lg" bg="surface.1" borderRadius="md" maxW="500px">
        <Text fontSize="base" color="text.secondary">
          Welcome to the game! Check out our{' '}
          <Link href="#">getting started guide</Link> to learn the basics.
          You can also view the{' '}
          <Link variant="secondary" href="#">leaderboard</Link> to see top
          scores, or visit <Link variant="muted" href="#">settings</Link> to
          customize your experience.
        </Text>
      </Box>
    </Flex>
  ),
}

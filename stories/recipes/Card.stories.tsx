import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Card',
}

export default meta
type Story = StoryObj

const Card = styled('div', {
  base: {
    background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    borderRadius: 'md',
    padding: 'lg',
    boxShadow: 'var(--shadow-sm)',
  },
  variants: {
    variant: {
      subtle: {
        background: 'surface.1',
        borderColor: 'border.subtle',
        boxShadow: 'none',
      },
      elevated: {
        background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
        borderColor: 'border.strong',
        boxShadow: 'var(--shadow-md)',
      },
      outline: {
        background: 'transparent',
        borderColor: 'border.strong',
        boxShadow: 'none',
      },
      glow: {
        background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
        borderColor: 'primary.DEFAULT',
        boxShadow: 'var(--shadow-md), var(--shadow-glow-primary)',
      },
    },
    size: {
      sm: {
        padding: 'sm',
        borderRadius: 'sm',
      },
      md: {
        padding: 'md',
        borderRadius: 'md',
      },
      lg: {
        padding: 'lg',
        borderRadius: 'lg',
      },
    },
  },
  defaultVariants: {
    variant: 'elevated',
    size: 'md',
  },
})

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Card Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Different card styles for various use cases
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap">
        <Card variant="subtle" style={{ width: '200px' }}>
          <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="xs">Subtle</Text>
          <Text fontSize="xs" color="text.muted">
            Minimal styling for nested content
          </Text>
        </Card>
        <Card variant="elevated" style={{ width: '200px' }}>
          <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="xs">Elevated</Text>
          <Text fontSize="xs" color="text.muted">
            Default card with depth shadow
          </Text>
        </Card>
        <Card variant="outline" style={{ width: '200px' }}>
          <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="xs">Outline</Text>
          <Text fontSize="xs" color="text.muted">
            Transparent with border
          </Text>
        </Card>
        <Card variant="glow" style={{ width: '200px' }}>
          <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="xs">Glow</Text>
          <Text fontSize="xs" color="text.muted">
            Highlighted with primary glow
          </Text>
        </Card>
      </Flex>
    </Flex>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Card Sizes
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Small, medium, and large padding options
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap" align="flex-start">
        <Card size="sm" style={{ width: '180px' }}>
          <Text fontSize="sm" color="text.primary" fontWeight="medium">Small</Text>
          <Text fontSize="xs" color="text.muted">Compact padding</Text>
        </Card>
        <Card size="md" style={{ width: '200px' }}>
          <Text fontSize="sm" color="text.primary" fontWeight="medium">Medium</Text>
          <Text fontSize="xs" color="text.muted">Standard padding</Text>
        </Card>
        <Card size="lg" style={{ width: '220px' }}>
          <Text fontSize="sm" color="text.primary" fontWeight="medium">Large</Text>
          <Text fontSize="xs" color="text.muted">Spacious padding</Text>
        </Card>
      </Flex>
    </Flex>
  ),
}

export const UsageExample: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Usage Example
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Cards in a typical game UI context
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap">
        <Card variant="elevated" style={{ width: '300px' }}>
          <Text fontSize="lg" color="text.primary" fontWeight="medium" mb="sm">
            Game Stats
          </Text>
          <Flex direction="column" gap="xs">
            <Flex justify="space-between">
              <Text fontSize="sm" color="text.muted">Games Played</Text>
              <Text fontSize="sm" color="text.primary">42</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="sm" color="text.muted">Win Rate</Text>
              <Text fontSize="sm" color="utility.DEFAULT">78%</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="sm" color="text.muted">Best Time</Text>
              <Text fontSize="sm" color="emphasis.DEFAULT">3:24</Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  ),
}

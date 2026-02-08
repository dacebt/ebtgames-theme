import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Loading',
}

export default meta
type Story = StoryObj

const LoadingDot = styled('span', {
  base: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    backgroundColor: 'primary.DEFAULT',
    borderRadius: '50%',
    animation: 'bounce 1.4s infinite ease-in-out both',
  },
  variants: {
    size: {
      sm: { width: '8px', height: '8px' },
      md: { width: '12px', height: '12px' },
      lg: { width: '16px', height: '16px' },
    },
    color: {
      primary: { backgroundColor: 'primary.DEFAULT' },
      secondary: { backgroundColor: 'utility.DEFAULT' },
      accent: { backgroundColor: 'emphasis.DEFAULT' },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

function LoadingDots({
  size = 'md',
  color = 'primary',
}: {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent'
}) {
  return (
    <Flex gap="sm" align="center">
      <LoadingDot size={size} color={color} css={{ animationDelay: '-0.32s' }} />
      <LoadingDot size={size} color={color} css={{ animationDelay: '-0.16s' }} />
      <LoadingDot size={size} color={color} />
    </Flex>
  )
}

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Loading Dot Sizes
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Small, medium, and large loading indicators
        </Text>
      </Box>
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Small (8px)</Text>
          <LoadingDots size="sm" />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Medium (12px)</Text>
          <LoadingDots size="md" />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Large (16px)</Text>
          <LoadingDots size="lg" />
        </Box>
      </Flex>
    </Flex>
  ),
}

export const Colors: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Loading Dot Colors
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Primary, secondary, and accent colors
        </Text>
      </Box>
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Primary (Purple)</Text>
          <LoadingDots color="primary" />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Secondary (Teal)</Text>
          <LoadingDots color="secondary" />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Accent (Rose)</Text>
          <LoadingDots color="accent" />
        </Box>
      </Flex>
    </Flex>
  ),
}

export const WithMessage: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Loading with Message
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Loading indicator with accompanying text
        </Text>
      </Box>
      <Flex direction="column" align="center" gap="md" p="xl">
        <LoadingDots />
        <Text
          fontSize="md"
          color="primary.DEFAULT"
          textTransform="uppercase"
          letterSpacing="normal"
        >
          Loading...
        </Text>
      </Flex>
    </Flex>
  ),
}

export const OverlayExample: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Overlay Loading
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Full-screen loading overlay pattern
        </Text>
      </Box>
      <Box
        position="relative"
        w="100%"
        h="200px"
        bg="surface.1"
        borderRadius="md"
        overflow="hidden"
      >
        {/* Content behind overlay */}
        <Box p="lg">
          <Text color="text.muted">Content here...</Text>
        </Box>

        {/* Loading overlay */}
        <Flex
          position="absolute"
          inset={0}
          bg="overlay.backdrop.heavy"
          align="center"
          justify="center"
          direction="column"
          gap="md"
        >
          <LoadingDots />
          <Text
            fontSize="md"
            color="primary.DEFAULT"
            textTransform="uppercase"
            letterSpacing="normal"
          >
            Generating puzzle...
          </Text>
        </Flex>
      </Box>
    </Flex>
  ),
}

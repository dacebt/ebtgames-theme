import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Badge',
}

export default meta
type Story = StoryObj

const Badge = styled('span', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    borderRadius: 'sm',
    whiteSpace: 'nowrap',
    px: 'sm',
    py: 'xs',
  },
  variants: {
    variant: {
      solid: {},
      subtle: {
        borderWidth: 'thin',
        borderStyle: 'solid',
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 'thin',
        borderStyle: 'solid',
      },
    },
    colorScheme: {
      primary: {},
      secondary: {},
      accent: {},
      success: {},
      warning: {},
      error: {},
    },
  },
  compoundVariants: [
    // Solid
    { variant: 'solid', colorScheme: 'primary', css: { bg: 'primary.DEFAULT', color: 'surface.0' } },
    { variant: 'solid', colorScheme: 'secondary', css: { bg: 'utility.DEFAULT', color: 'surface.0' } },
    { variant: 'solid', colorScheme: 'accent', css: { bg: 'emphasis.DEFAULT', color: 'surface.0' } },
    { variant: 'solid', colorScheme: 'success', css: { bg: 'status.success', color: 'surface.0' } },
    { variant: 'solid', colorScheme: 'warning', css: { bg: 'status.warning', color: 'surface.0' } },
    { variant: 'solid', colorScheme: 'error', css: { bg: 'status.error', color: 'surface.0' } },
    // Subtle
    { variant: 'subtle', colorScheme: 'primary', css: { bg: 'overlay.light', color: 'primary.DEFAULT', borderColor: 'primary.DEFAULT' } },
    { variant: 'subtle', colorScheme: 'secondary', css: { bg: 'rgba(42, 185, 176, 0.1)', color: 'utility.DEFAULT', borderColor: 'utility.DEFAULT' } },
    { variant: 'subtle', colorScheme: 'accent', css: { bg: 'rgba(216, 107, 154, 0.1)', color: 'emphasis.DEFAULT', borderColor: 'emphasis.DEFAULT' } },
    { variant: 'subtle', colorScheme: 'success', css: { bg: 'rgba(42, 185, 176, 0.1)', color: 'status.success', borderColor: 'status.success' } },
    { variant: 'subtle', colorScheme: 'warning', css: { bg: 'rgba(217, 162, 79, 0.1)', color: 'status.warning', borderColor: 'status.warning' } },
    { variant: 'subtle', colorScheme: 'error', css: { bg: 'overlay.error', color: 'status.error', borderColor: 'status.error' } },
    // Outline
    { variant: 'outline', colorScheme: 'primary', css: { color: 'primary.DEFAULT', borderColor: 'primary.DEFAULT' } },
    { variant: 'outline', colorScheme: 'secondary', css: { color: 'utility.DEFAULT', borderColor: 'utility.DEFAULT' } },
    { variant: 'outline', colorScheme: 'accent', css: { color: 'emphasis.DEFAULT', borderColor: 'emphasis.DEFAULT' } },
    { variant: 'outline', colorScheme: 'success', css: { color: 'status.success', borderColor: 'status.success' } },
    { variant: 'outline', colorScheme: 'warning', css: { color: 'status.warning', borderColor: 'status.warning' } },
    { variant: 'outline', colorScheme: 'error', css: { color: 'status.error', borderColor: 'status.error' } },
  ],
  defaultVariants: {
    variant: 'subtle',
    colorScheme: 'primary',
  },
})

export const ColorSchemes: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Badge Color Schemes
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Available color options for badges
        </Text>
      </Box>
      <Flex gap="3" flexWrap="wrap">
        <Badge colorScheme="primary">Primary</Badge>
        <Badge colorScheme="secondary">Secondary</Badge>
        <Badge colorScheme="accent">Accent</Badge>
        <Badge colorScheme="success">Success</Badge>
        <Badge colorScheme="warning">Warning</Badge>
        <Badge colorScheme="error">Error</Badge>
      </Flex>
    </Flex>
  ),
}

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Badge Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Solid, subtle, and outline styles
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Solid</Text>
          <Flex gap="3" flexWrap="wrap">
            <Badge variant="solid" colorScheme="primary">Primary</Badge>
            <Badge variant="solid" colorScheme="secondary">Secondary</Badge>
            <Badge variant="solid" colorScheme="accent">Accent</Badge>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Subtle</Text>
          <Flex gap="3" flexWrap="wrap">
            <Badge variant="subtle" colorScheme="primary">Primary</Badge>
            <Badge variant="subtle" colorScheme="secondary">Secondary</Badge>
            <Badge variant="subtle" colorScheme="accent">Accent</Badge>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Outline</Text>
          <Flex gap="3" flexWrap="wrap">
            <Badge variant="outline" colorScheme="primary">Primary</Badge>
            <Badge variant="outline" colorScheme="secondary">Secondary</Badge>
            <Badge variant="outline" colorScheme="accent">Accent</Badge>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  ),
}

export const UsageExamples: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Usage Examples
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Badges in context
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Flex align="center" gap="sm">
          <Text fontSize="base" color="text.primary">Game Mode</Text>
          <Badge variant="solid" colorScheme="primary">Easy</Badge>
        </Flex>
        <Flex align="center" gap="sm">
          <Text fontSize="base" color="text.primary">Status</Text>
          <Badge variant="subtle" colorScheme="success">Completed</Badge>
        </Flex>
        <Flex align="center" gap="sm">
          <Text fontSize="base" color="text.primary">Score</Text>
          <Badge variant="outline" colorScheme="accent">New Record</Badge>
        </Flex>
        <Flex align="center" gap="sm">
          <Text fontSize="base" color="text.primary">Errors</Text>
          <Badge variant="subtle" colorScheme="error">3 mistakes</Badge>
        </Flex>
      </Flex>
    </Flex>
  ),
}

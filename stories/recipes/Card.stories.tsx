import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useRecipe } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Card',
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'card' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Card Variants
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Neutral foundation cards with accent-ready emphasis.
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box css={recipe({ variant: 'subtle' })}>
            <Text fontSize="md" color="text.primary" fontWeight="medium" mb="2">
              Subtle Card
            </Text>
            <Text fontSize="sm" color="text.muted">
              Gentle separation from the base layer with minimal elevation.
            </Text>
          </Box>
          <Box css={recipe({ variant: 'elevated' })}>
            <Text fontSize="md" color="text.primary" fontWeight="medium" mb="2">
              Elevated Card
            </Text>
            <Text fontSize="sm" color="text.muted">
              Stronger elevation and border emphasis for primary surfaces.
            </Text>
          </Box>
          <Box css={recipe({ variant: 'outline' })}>
            <Text fontSize="md" color="text.primary" fontWeight="medium" mb="2">
              Outline Card
            </Text>
            <Text fontSize="sm" color="text.muted">
              Transparent layout container with border-only structure.
            </Text>
          </Box>
          <Box css={recipe({ variant: 'glow' })}>
            <Text fontSize="md" color="text.primary" fontWeight="medium" mb="2">
              Glow Card
            </Text>
            <Text fontSize="sm" color="text.muted">
              Highlighted card with restrained accent glow for attention.
            </Text>
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'card' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Card Sizes
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Compact to spacious spacing with the same neutral depth system.
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box css={recipe({ size: 'sm' })}>
            <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="1">
              Small Card
            </Text>
            <Text fontSize="xs" color="text.muted">
              Compact padding for dense views.
            </Text>
          </Box>
          <Box css={recipe({ size: 'md' })}>
            <Text fontSize="md" color="text.primary" fontWeight="medium" mb="2">
              Medium Card
            </Text>
            <Text fontSize="sm" color="text.muted">
              Balanced spacing for standard content blocks.
            </Text>
          </Box>
          <Box css={recipe({ size: 'lg' })}>
            <Text fontSize="lg" color="text.primary" fontWeight="medium" mb="3">
              Large Card
            </Text>
            <Text fontSize="base" color="text.muted">
              Roomy spacing for feature content.
            </Text>
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const WithContent: Story = {
  render: () => {
    const cardRecipe = useRecipe({ key: 'card' })
    const buttonRecipe = useRecipe({ key: 'button' })
    const badgeRecipe = useRecipe({ key: 'badge' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Cards with Content
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Composition examples showing content tiers and action hierarchy.
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="600px">
          <Box css={cardRecipe({ variant: 'elevated' })}>
            <Text fontSize="lg" color="text.primary" fontWeight="bold" mb="2">
              Game Settings
            </Text>
            <Text fontSize="sm" color="text.muted" mb="4">
              Adjust gameplay options with clearly tiered actions.
            </Text>
            <Flex gap="2">
              <Box
                as="button"
                css={buttonRecipe({ variant: 'primary' })}
                px="lg"
                py="sm"
                fontSize="sm"
              >
                Apply
              </Box>
              <Box
                as="button"
                css={buttonRecipe({ variant: 'secondary' })}
                px="lg"
                py="sm"
                fontSize="sm"
              >
                Cancel
              </Box>
            </Flex>
          </Box>
          <Box css={cardRecipe({ variant: 'glow' })}>
            <Flex align="center" justify="space-between" mb="2">
              <Text fontSize="md" color="text.primary" fontWeight="medium">
                Achievement Unlocked
              </Text>
              <Box css={badgeRecipe({ variant: 'solid', colorScheme: 'success', size: 'sm' })}>
                NEW
              </Box>
            </Flex>
            <Text fontSize="sm" color="text.muted">
              You completed ten puzzles in a row.
            </Text>
          </Box>
        </Flex>
      </Flex>
    )
  },
}

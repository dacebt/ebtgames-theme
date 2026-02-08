import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useRecipe } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Badge',
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'badge' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Badge Variants
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Solid, subtle, and outline badge styles
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Solid</Text>
            <Flex gap="2" flexWrap="wrap">
              <Box css={recipe({ variant: 'solid', colorScheme: 'primary' })}>
                Primary
              </Box>
              <Box css={recipe({ variant: 'solid', colorScheme: 'secondary' })}>
                Secondary
              </Box>
              <Box css={recipe({ variant: 'solid', colorScheme: 'accent' })}>
                Accent
              </Box>
              <Box css={recipe({ variant: 'solid', colorScheme: 'success' })}>
                Success
              </Box>
              <Box css={recipe({ variant: 'solid', colorScheme: 'warning' })}>
                Warning
              </Box>
              <Box css={recipe({ variant: 'solid', colorScheme: 'error' })}>
                Error
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Subtle</Text>
            <Flex gap="2" flexWrap="wrap">
              <Box css={recipe({ variant: 'subtle', colorScheme: 'primary' })}>
                Primary
              </Box>
              <Box css={recipe({ variant: 'subtle', colorScheme: 'secondary' })}>
                Secondary
              </Box>
              <Box css={recipe({ variant: 'subtle', colorScheme: 'accent' })}>
                Accent
              </Box>
              <Box css={recipe({ variant: 'subtle', colorScheme: 'success' })}>
                Success
              </Box>
              <Box css={recipe({ variant: 'subtle', colorScheme: 'warning' })}>
                Warning
              </Box>
              <Box css={recipe({ variant: 'subtle', colorScheme: 'error' })}>
                Error
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Outline</Text>
            <Flex gap="2" flexWrap="wrap">
              <Box css={recipe({ variant: 'outline', colorScheme: 'primary' })}>
                Primary
              </Box>
              <Box css={recipe({ variant: 'outline', colorScheme: 'secondary' })}>
                Secondary
              </Box>
              <Box css={recipe({ variant: 'outline', colorScheme: 'accent' })}>
                Accent
              </Box>
              <Box css={recipe({ variant: 'outline', colorScheme: 'success' })}>
                Success
              </Box>
              <Box css={recipe({ variant: 'outline', colorScheme: 'warning' })}>
                Warning
              </Box>
              <Box css={recipe({ variant: 'outline', colorScheme: 'error' })}>
                Error
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'badge' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Badge Sizes
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Small, medium, and large sizes
          </Text>
        </Box>
        <Flex gap="3" align="center">
          <Box css={recipe({ size: 'sm' })}>
            Small
          </Box>
          <Box css={recipe({ size: 'md' })}>
            Medium
          </Box>
          <Box css={recipe({ size: 'lg' })}>
            Large
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const CompoundVariants: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'badge' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Compound Variants
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Different combinations of variant, colorScheme, and size
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Small Solid Badges</Text>
            <Flex gap="2" flexWrap="wrap">
              <Box css={recipe({ variant: 'solid', colorScheme: 'primary', size: 'sm' })}>
                Primary
              </Box>
              <Box css={recipe({ variant: 'solid', colorScheme: 'success', size: 'sm' })}>
                Success
              </Box>
              <Box css={recipe({ variant: 'solid', colorScheme: 'error', size: 'sm' })}>
                Error
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Large Outline Badges</Text>
            <Flex gap="2" flexWrap="wrap">
              <Box css={recipe({ variant: 'outline', colorScheme: 'primary', size: 'lg' })}>
                Primary
              </Box>
              <Box css={recipe({ variant: 'outline', colorScheme: 'accent', size: 'lg' })}>
                Accent
              </Box>
              <Box css={recipe({ variant: 'outline', colorScheme: 'warning', size: 'lg' })}>
                Warning
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    )
  },
}

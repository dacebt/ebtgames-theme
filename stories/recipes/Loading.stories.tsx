import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useRecipe } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Loading',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'loading' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Loading Dots
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Animated bouncing dots for loading states
          </Text>
        </Box>
        <Flex gap="2" align="center">
          <Box css={recipe()} style={{ animationDelay: '-0.32s' }} />
          <Box css={recipe()} style={{ animationDelay: '-0.16s' }} />
          <Box css={recipe()} />
        </Flex>
      </Flex>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'loading' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Loading Sizes
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Small, medium, and large loading indicators
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Small</Text>
            <Flex gap="2" align="center">
              <Box css={recipe({ size: 'sm' })} style={{ animationDelay: '-0.32s' }} />
              <Box css={recipe({ size: 'sm' })} style={{ animationDelay: '-0.16s' }} />
              <Box css={recipe({ size: 'sm' })} />
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Medium</Text>
            <Flex gap="2" align="center">
              <Box css={recipe({ size: 'md' })} style={{ animationDelay: '-0.32s' }} />
              <Box css={recipe({ size: 'md' })} style={{ animationDelay: '-0.16s' }} />
              <Box css={recipe({ size: 'md' })} />
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Large</Text>
            <Flex gap="2" align="center">
              <Box css={recipe({ size: 'lg' })} style={{ animationDelay: '-0.32s' }} />
              <Box css={recipe({ size: 'lg' })} style={{ animationDelay: '-0.16s' }} />
              <Box css={recipe({ size: 'lg' })} />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const Colors: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'loading' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Loading Colors
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Different color variations
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Primary (default)</Text>
            <Flex gap="2" align="center">
              <Box css={recipe({ color: 'primary' })} style={{ animationDelay: '-0.32s' }} />
              <Box css={recipe({ color: 'primary' })} style={{ animationDelay: '-0.16s' }} />
              <Box css={recipe({ color: 'primary' })} />
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Secondary</Text>
            <Flex gap="2" align="center">
              <Box css={recipe({ color: 'secondary' })} style={{ animationDelay: '-0.32s' }} />
              <Box css={recipe({ color: 'secondary' })} style={{ animationDelay: '-0.16s' }} />
              <Box css={recipe({ color: 'secondary' })} />
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Accent</Text>
            <Flex gap="2" align="center">
              <Box css={recipe({ color: 'accent' })} style={{ animationDelay: '-0.32s' }} />
              <Box css={recipe({ color: 'accent' })} style={{ animationDelay: '-0.16s' }} />
              <Box css={recipe({ color: 'accent' })} />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const InContext: Story = {
  render: () => {
    const loadingRecipe = useRecipe({ key: 'loading' })
    const cardRecipe = useRecipe({ key: 'card' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Loading in Context
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Examples of loading indicators in UI elements
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box css={cardRecipe()}>
            <Flex align="center" gap="3">
              <Flex gap="2">
                <Box css={loadingRecipe({ size: 'sm' })} style={{ animationDelay: '-0.32s' }} />
                <Box css={loadingRecipe({ size: 'sm' })} style={{ animationDelay: '-0.16s' }} />
                <Box css={loadingRecipe({ size: 'sm' })} />
              </Flex>
              <Text fontSize="sm" color="text.muted">
                Loading game state...
              </Text>
            </Flex>
          </Box>
          <Flex
            align="center"
            justify="center"
            gap="3"
            padding="xl"
            borderWidth="thin"
            borderStyle="dashed"
            borderColor="border.subtle"
            borderRadius="md"
          >
            <Flex gap="2">
              <Box css={loadingRecipe({ size: 'lg', color: 'accent' })} style={{ animationDelay: '-0.32s' }} />
              <Box css={loadingRecipe({ size: 'lg', color: 'accent' })} style={{ animationDelay: '-0.16s' }} />
              <Box css={loadingRecipe({ size: 'lg', color: 'accent' })} />
            </Flex>
            <Text fontSize="base" color="text.muted">
              Processing...
            </Text>
          </Flex>
        </Flex>
      </Flex>
    )
  },
}

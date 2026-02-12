import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useRecipe } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Button',
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'button' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Button Variants
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Neutral controls with accent-based action emphasis.
          </Text>
        </Box>
        <Flex gap="4" flexWrap="wrap">
          <Box
            as="button"
            css={recipe({ variant: 'primary' })}
            px="lg"
            py="sm"
            fontSize="base"
          >
            Primary
          </Box>
          <Box
            as="button"
            css={recipe({ variant: 'secondary' })}
            px="lg"
            py="sm"
            fontSize="base"
          >
            Secondary
          </Box>
          <Box
            as="button"
            css={recipe({ variant: 'danger' })}
            px="lg"
            py="sm"
            fontSize="base"
          >
            Danger
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const States: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'button' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Button States
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Hover lift, pressed inset, focus ring, and clear layer feedback.
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">
              Default
            </Text>
            <Flex gap="4" flexWrap="wrap">
              <Box as="button" css={recipe({ variant: 'primary' })} px="lg" py="sm">
                Primary
              </Box>
              <Box as="button" css={recipe({ variant: 'secondary' })} px="lg" py="sm">
                Secondary
              </Box>
            </Flex>
          </Box>

          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">
              Hover (simulated)
            </Text>
            <Flex gap="4" flexWrap="wrap">
              <Box as="button" css={recipe({ variant: 'primary' })} px="lg" py="sm" data-hover="true">
                Primary
              </Box>
              <Box as="button" css={recipe({ variant: 'secondary' })} px="lg" py="sm" data-hover="true">
                Secondary
              </Box>
            </Flex>
          </Box>

          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">
              Active (simulated)
            </Text>
            <Flex gap="4" flexWrap="wrap">
              <Box as="button" css={recipe({ variant: 'primary' })} px="lg" py="sm" data-active="true">
                Primary
              </Box>
              <Box as="button" css={recipe({ variant: 'danger' })} px="lg" py="sm" data-active="true">
                Danger
              </Box>
            </Flex>
          </Box>

          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">
              Focus visible (simulated)
            </Text>
            <Flex gap="4" flexWrap="wrap">
              <Box
                as="button"
                css={recipe({ variant: 'primary' })}
                px="lg"
                py="sm"
                data-focus-visible="true"
              >
                Primary
              </Box>
            </Flex>
          </Box>

          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">
              Disabled
            </Text>
            <Flex gap="4" flexWrap="wrap">
              <Box as="button" css={recipe({ variant: 'primary' })} px="lg" py="sm" disabled>
                Primary
              </Box>
              <Box as="button" css={recipe({ variant: 'secondary' })} px="lg" py="sm" disabled>
                Secondary
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
    const recipe = useRecipe({ key: 'button' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Button Sizes
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Size examples with a consistent neutral elevation profile.
          </Text>
        </Box>
        <Flex gap="4" align="center" flexWrap="wrap">
          <Box
            as="button"
            css={recipe({ variant: 'primary' })}
            px="sm"
            py="xs"
            fontSize="sm"
          >
            Small
          </Box>
          <Box
            as="button"
            css={recipe({ variant: 'primary' })}
            px="lg"
            py="sm"
            fontSize="base"
          >
            Medium
          </Box>
          <Box
            as="button"
            css={recipe({ variant: 'primary' })}
            px="xl"
            py="md"
            fontSize="lg"
          >
            Large
          </Box>
        </Flex>
      </Flex>
    )
  },
}

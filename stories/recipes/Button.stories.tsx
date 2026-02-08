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
            Primary, secondary, and danger button styles
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
            Normal, hover, active, and disabled states
          </Text>
        </Box>
        <Flex direction="column" gap="4">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Normal state</Text>
            <Flex gap="4">
              <Box
                as="button"
                css={recipe({ variant: 'primary' })}
                px="lg"
                py="sm"
              >
                Primary
              </Box>
              <Box
                as="button"
                css={recipe({ variant: 'secondary' })}
                px="lg"
                py="sm"
              >
                Secondary
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Disabled state</Text>
            <Flex gap="4">
              <Box
                as="button"
                css={recipe({ variant: 'primary' })}
                px="lg"
                py="sm"
                disabled
                opacity={0.5}
                cursor="not-allowed"
              >
                Primary
              </Box>
              <Box
                as="button"
                css={recipe({ variant: 'secondary' })}
                px="lg"
                py="sm"
                disabled
                opacity={0.5}
                cursor="not-allowed"
              >
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
            Different padding and font sizes
          </Text>
        </Box>
        <Flex gap="4" align="center">
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

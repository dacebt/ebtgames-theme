import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useRecipe } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Input',
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'input' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Input Variants
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Different input field styles
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Outline (default)</Text>
            <Box
              as="input"
              css={recipe({ variant: 'outline' })}
              placeholder="Enter text..."
            />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Filled</Text>
            <Box
              as="input"
              css={recipe({ variant: 'filled' })}
              placeholder="Enter text..."
            />
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const States: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'input' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Input States
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Normal, focus, disabled, and error states
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Normal</Text>
            <Box
              as="input"
              css={recipe()}
              placeholder="Normal input"
            />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Disabled</Text>
            <Box
              as="input"
              css={recipe()}
              placeholder="Disabled input"
              disabled
            />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">With value</Text>
            <Box
              as="input"
              css={recipe()}
              defaultValue="Some text content"
            />
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'input' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Input Sizes
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Different input field sizes
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Small</Text>
            <Box
              as="input"
              css={recipe({ size: 'sm' })}
              placeholder="Small input"
            />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Medium (default)</Text>
            <Box
              as="input"
              css={recipe({ size: 'md' })}
              placeholder="Medium input"
            />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Large</Text>
            <Box
              as="input"
              css={recipe({ size: 'lg' })}
              placeholder="Large input"
            />
          </Box>
        </Flex>
      </Flex>
    )
  },
}

export const Textarea: Story = {
  render: () => {
    const recipe = useRecipe({ key: 'input' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Textarea
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Multi-line text input using the same recipe
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Outline textarea</Text>
            <Box
              as="textarea"
              css={recipe({ variant: 'outline' })}
              placeholder="Enter multiple lines..."
              rows={4}
            />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.muted" mb="2">Filled textarea</Text>
            <Box
              as="textarea"
              css={recipe({ variant: 'filled' })}
              placeholder="Enter multiple lines..."
              rows={4}
            />
          </Box>
        </Flex>
      </Flex>
    )
  },
}

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
            Input surfaces built on neutral layers and readable contrast.
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text as="label" htmlFor="input-variant-outline" fontSize="sm" color="text.muted" mb="2">
              Outline (default)
            </Text>
            <Box
              as="input"
              id="input-variant-outline"
              css={recipe({ variant: 'outline' })}
              placeholder="Enter text..."
            />
          </Box>
          <Box>
            <Text as="label" htmlFor="input-variant-filled" fontSize="sm" color="text.muted" mb="2">
              Filled
            </Text>
            <Box
              as="input"
              id="input-variant-filled"
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
            State coverage with clear separation between base, focus, and error layers.
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text as="label" htmlFor="input-state-default" fontSize="sm" color="text.muted" mb="2">
              Default
            </Text>
            <Box as="input" id="input-state-default" css={recipe()} placeholder="Default input" />
          </Box>

          <Box>
            <Text as="label" htmlFor="input-state-hover" fontSize="sm" color="text.muted" mb="2">
              Hover (simulated)
            </Text>
            <Box
              as="input"
              id="input-state-hover"
              css={recipe()}
              placeholder="Hover input"
              data-hover="true"
            />
          </Box>

          <Box>
            <Text as="label" htmlFor="input-state-focused" fontSize="sm" color="text.muted" mb="2">
              Focus (simulated)
            </Text>
            <Box
              as="input"
              id="input-state-focused"
              css={recipe()}
              placeholder="Focused input"
              data-focus="true"
              data-focus-visible="true"
              defaultValue="Focused value"
            />
          </Box>

          <Box>
            <Text as="label" htmlFor="input-state-invalid" fontSize="sm" color="text.muted" mb="2">
              Invalid (simulated)
            </Text>
            <Box
              as="input"
              id="input-state-invalid"
              css={recipe()}
              defaultValue="bad@email"
              placeholder="Invalid email"
              data-invalid="true"
              aria-invalid="true"
            />
          </Box>

          <Box>
            <Text as="label" htmlFor="input-state-disabled" fontSize="sm" color="text.muted" mb="2">
              Disabled
            </Text>
            <Box as="input" id="input-state-disabled" css={recipe()} placeholder="Disabled input" disabled />
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
            Different field sizes with stable borders and neutral elevation.
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text as="label" htmlFor="input-size-small" fontSize="sm" color="text.muted" mb="2">
              Small
            </Text>
            <Box
              as="input"
              id="input-size-small"
              css={recipe({ size: 'sm' })}
              placeholder="Small input"
            />
          </Box>
          <Box>
            <Text as="label" htmlFor="input-size-medium" fontSize="sm" color="text.muted" mb="2">
              Medium (default)
            </Text>
            <Box
              as="input"
              id="input-size-medium"
              css={recipe({ size: 'md' })}
              placeholder="Medium input"
            />
          </Box>
          <Box>
            <Text as="label" htmlFor="input-size-large" fontSize="sm" color="text.muted" mb="2">
              Large
            </Text>
            <Box
              as="input"
              id="input-size-large"
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
            Multi-line inputs follow the same neutral depth and focus language.
          </Text>
        </Box>
        <Flex direction="column" gap="4" maxWidth="400px">
          <Box>
            <Text as="label" htmlFor="textarea-outline" fontSize="sm" color="text.muted" mb="2">
              Outline textarea
            </Text>
            <Box
              as="textarea"
              id="textarea-outline"
              css={recipe({ variant: 'outline' })}
              placeholder="Enter multiple lines..."
              rows={4}
            />
          </Box>
          <Box>
            <Text as="label" htmlFor="textarea-filled" fontSize="sm" color="text.muted" mb="2">
              Filled textarea
            </Text>
            <Box
              as="textarea"
              id="textarea-filled"
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

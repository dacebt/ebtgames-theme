import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { spacingVariables } from '../../src'

const meta: Meta = {
  title: 'Foundations/Spacing',
}

export default meta
type Story = StoryObj

const spacingScale = [
  { name: '2xs', var: '--spacing-2xs', value: spacingVariables['--spacing-2xs'], px: '2px' },
  { name: 'xs', var: '--spacing-xs', value: spacingVariables['--spacing-xs'], px: '4px' },
  { name: 'sm', var: '--spacing-sm', value: spacingVariables['--spacing-sm'], px: '8px' },
  { name: 'md', var: '--spacing-md', value: spacingVariables['--spacing-md'], px: '16px' },
  { name: 'lg', var: '--spacing-lg', value: spacingVariables['--spacing-lg'], px: '24px' },
  { name: 'xl', var: '--spacing-xl', value: spacingVariables['--spacing-xl'], px: '32px' },
  { name: '2xl', var: '--spacing-2xl', value: spacingVariables['--spacing-2xl'], px: '48px' },
]

export const SpacingScale: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Spacing Scale
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Consistent spacing tokens based on 4px/8px grid
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        {spacingScale.map((space) => (
          <Flex key={space.name} align="center" gap="4">
            <Box minW="50px">
              <Text fontSize="sm" color="text.muted" fontWeight="medium">
                {space.name}
              </Text>
            </Box>
            <Box minW="80px">
              <Text fontSize="xs" color="text.disabled">
                {space.value} ({space.px})
              </Text>
            </Box>
            <Box
              h="24px"
              w={space.name}
              bg="primary.DEFAULT"
              borderRadius="sm"
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
}

export const SpacingInContext: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Spacing in Context
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          How spacing tokens are used in UI patterns
        </Text>
      </Box>

      <Flex direction="column" gap="6">
        {/* Card with internal spacing */}
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">
            Card padding: lg (24px)
          </Text>
          <Box
            p="lg"
            bg="surface.1"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
          >
            <Text fontSize="base" color="text.primary" mb="sm">
              Card Title
            </Text>
            <Text fontSize="sm" color="text.muted">
              Card content with comfortable internal spacing
            </Text>
          </Box>
        </Box>

        {/* Button group spacing */}
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">
            Button group gap: sm (8px)
          </Text>
          <Flex gap="sm">
            <Box
              px="lg"
              py="sm"
              bg="surface.2"
              borderWidth="thin"
              borderColor="primary.DEFAULT"
              borderRadius="md"
            >
              <Text fontSize="sm" color="primary.DEFAULT">Button</Text>
            </Box>
            <Box
              px="lg"
              py="sm"
              bg="surface.2"
              borderWidth="thin"
              borderColor="utility.DEFAULT"
              borderRadius="md"
            >
              <Text fontSize="sm" color="utility.DEFAULT">Button</Text>
            </Box>
          </Flex>
        </Box>

        {/* List items */}
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">
            List item gap: xs (4px)
          </Text>
          <Flex direction="column" gap="xs">
            {['Item one', 'Item two', 'Item three'].map((item) => (
              <Box
                key={item}
                p="sm"
                bg="surface.1"
                borderRadius="sm"
              >
                <Text fontSize="sm" color="text.primary">{item}</Text>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Dense UI */}
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">
            Dense layout: 2xs (2px) gaps
          </Text>
          <Flex gap="2xs">
            {[1, 2, 3, 4, 5].map((n) => (
              <Box
                key={n}
                w="32px"
                h="32px"
                bg="surface.2"
                borderWidth="thin"
                borderColor="border.subtle"
                borderRadius="sm"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="sm" color="text.primary">{n}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  ),
}

export const Margins: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Margin Examples
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Spacing tokens applied as margins
        </Text>
      </Box>

      <Box bg="surface.1" p="md" borderRadius="md">
        <Text fontSize="sm" color="text.muted" mb="xs">
          Section with bottom margins
        </Text>
        <Text fontSize="lg" color="text.primary" mb="md">
          Heading (mb: md)
        </Text>
        <Text fontSize="base" color="text.secondary" mb="sm">
          Paragraph text with medium bottom margin.
        </Text>
        <Text fontSize="base" color="text.secondary" mb="lg">
          Another paragraph before a larger gap.
        </Text>
        <Flex gap="sm">
          <Box px="md" py="xs" bg="primary.DEFAULT" borderRadius="sm">
            <Text fontSize="sm" color="surface.0">Action</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  ),
}

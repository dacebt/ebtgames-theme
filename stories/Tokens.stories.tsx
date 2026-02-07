import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Theme/Tokens',
}

export default meta

type Story = StoryObj

export const Colors: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Text fontSize="xl" color="text.primary" fontFamily="display">
        Night Violet palette
      </Text>
      <Flex gap="4" flexWrap="wrap">
        {(['surface.0', 'surface.1', 'surface.2', 'surface.3', 'primary', 'utility', 'emphasis', 'status.success', 'status.warning', 'status.error'] as const).map((token) => (
          <Flex key={token} direction="column" align="center" gap="2">
            <Box
              w="64px"
              h="64px"
              borderRadius="md"
              bg={token}
              borderWidth="base"
              borderColor="border.strong"
            />
            <Text fontSize="xs" color="text.muted">
              {token}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
}

export const Spacing: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Text fontSize="xl" color="text.primary">
        Spacing scale
      </Text>
      {(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((s) => (
        <Flex key={s} align="center" gap="4">
          <Text color="text.secondary" w="32px" fontSize="sm">
            {s}
          </Text>
          <Box h="24px" w={s} bg="primary" borderRadius="sm" />
        </Flex>
      ))}
    </Flex>
  ),
}

export const Typography: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxWidth="600px">
      <Text fontSize="xl" color="text.primary" fontFamily="display">
        Typography Scale
      </Text>
      <Flex direction="column" gap="4">
        <Text fontSize="4xl" color="text.primary" fontFamily="display">
          Display Text (4xl)
        </Text>
        <Text fontSize="3xl" color="text.primary" fontFamily="display">
          Hero Text (3xl)
        </Text>
        <Text fontSize="2xl" color="text.primary" fontFamily="heading">
          Page Title (2xl)
        </Text>
        <Text fontSize="xl" color="text.primary">
          Modal Title (xl)
        </Text>
        <Text fontSize="lg" color="text.secondary">
          Section Heading (lg)
        </Text>
        <Text fontSize="md" color="text.secondary">
          Emphasized Body (md)
        </Text>
        <Text fontSize="base" color="text.muted">
          Body Text (base)
        </Text>
        <Text fontSize="sm" color="text.muted">
          Secondary Label (sm)
        </Text>
        <Text fontSize="xs" color="text.disabled">
          Helper Text (xs)
        </Text>
      </Flex>
    </Flex>
  ),
}

export const TextColors: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Text fontSize="xl" color="text.primary" fontFamily="display">
        Text Hierarchy
      </Text>
      <Flex direction="column" gap="3">
        <Text color="text.primary" fontSize="lg">
          Primary Text - High contrast
        </Text>
        <Text color="text.secondary" fontSize="lg">
          Secondary Text - Medium contrast
        </Text>
        <Text color="text.muted" fontSize="lg">
          Muted Text - Subtle content
        </Text>
        <Text color="text.disabled" fontSize="lg">
          Disabled Text - Inactive state
        </Text>
      </Flex>
    </Flex>
  ),
}

export const Borders: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Text fontSize="xl" color="text.primary" fontFamily="display">
        Borders
      </Text>
      <Flex gap="6" flexWrap="wrap">
        <Box
          w="120px"
          h="120px"
          borderWidth="thin"
          borderColor="border.subtle"
          borderRadius="md"
          bg="surface.1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="sm" color="text.muted">Subtle</Text>
        </Box>
        <Box
          w="120px"
          h="120px"
          borderWidth="base"
          borderColor="border.strong"
          borderRadius="md"
          bg="surface.1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="sm" color="text.muted">Strong</Text>
        </Box>
        <Box
          w="120px"
          h="120px"
          borderWidth="thick"
          borderColor="primary"
          borderRadius="md"
          bg="surface.1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="sm" color="text.muted">Thick</Text>
        </Box>
      </Flex>
    </Flex>
  ),
}

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

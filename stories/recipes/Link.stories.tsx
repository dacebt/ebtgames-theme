import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Link',
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Link Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Primary, secondary, and muted link colors
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Box
            as="a"
            href="#"
            color="primary.DEFAULT"
            textDecoration="none"
            cursor="pointer"
            transition="all 150ms ease"
            _hover={{ color: 'primary.hover', textDecoration: 'underline' }}
          >
            Primary link
          </Box>
        </Box>
        <Box>
          <Box
            as="a"
            href="#"
            color="utility.DEFAULT"
            textDecoration="none"
            cursor="pointer"
            transition="all 150ms ease"
            _hover={{ color: 'utility.hover', textDecoration: 'underline' }}
          >
            Secondary link
          </Box>
        </Box>
        <Box>
          <Box
            as="a"
            href="#"
            color="text.muted"
            textDecoration="none"
            cursor="pointer"
            transition="all 150ms ease"
            _hover={{ color: 'text.primary', textDecoration: 'underline' }}
          >
            Muted link
          </Box>
        </Box>
      </Flex>
    </Flex>
  ),
}

export const UnderlineStyles: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Underline Styles
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Different underline behaviors
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="1">
            Always underlined
          </Text>
          <Box
            as="a"
            href="#"
            color="primary.DEFAULT"
            textDecoration="underline"
            cursor="pointer"
            transition="all 150ms ease"
            _hover={{ color: 'primary.hover' }}
          >
            Always visible underline
          </Box>
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="1">
            Underline on hover
          </Text>
          <Box
            as="a"
            href="#"
            color="primary.DEFAULT"
            textDecoration="none"
            cursor="pointer"
            transition="all 150ms ease"
            _hover={{ textDecoration: 'underline', color: 'primary.hover' }}
          >
            Underline appears on hover
          </Box>
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="1">
            No underline
          </Text>
          <Box
            as="a"
            href="#"
            color="primary.DEFAULT"
            textDecoration="none"
            cursor="pointer"
            transition="all 150ms ease"
            _hover={{ color: 'primary.hover' }}
          >
            Never underlined
          </Box>
        </Box>
      </Flex>
    </Flex>
  ),
}

export const InContext: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Links in Context
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Links within paragraph text
        </Text>
      </Box>
      <Box p="lg" bg="surface.1" borderRadius="md" maxW="500px">
        <Text fontSize="base" color="text.secondary">
          Welcome to the game! Check out our{' '}
          <Box
            as="a"
            href="#"
            color="primary.DEFAULT"
            _hover={{ color: 'primary.hover', textDecoration: 'underline' }}
          >
            getting started guide
          </Box>{' '}
          to learn the basics. You can also view the{' '}
          <Box
            as="a"
            href="#"
            color="utility.DEFAULT"
            _hover={{ color: 'utility.hover', textDecoration: 'underline' }}
          >
            leaderboard
          </Box>{' '}
          to see top scores, or visit{' '}
          <Box
            as="a"
            href="#"
            color="text.muted"
            _hover={{ color: 'text.primary', textDecoration: 'underline' }}
          >
            settings
          </Box>{' '}
          to customize your experience.
        </Text>
      </Box>
    </Flex>
  ),
}

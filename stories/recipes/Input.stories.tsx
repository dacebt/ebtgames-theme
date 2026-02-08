import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Recipes/Input',
}

export default meta
type Story = StoryObj

const Input = styled('input', {
  base: {
    fontFamily: 'body',
    fontSize: 'base',
    color: 'text.primary',
    backgroundColor: 'surface.0',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    borderRadius: 'md',
    padding: 'sm',
    width: '100%',
    transition: 'all 200ms ease',

    _placeholder: {
      color: 'text.muted',
    },

    _hover: {
      borderColor: 'border.strong',
    },

    _focus: {
      borderColor: 'primary.DEFAULT',
      boxShadow: 'var(--shadow-glow-primary)',
      outline: 'none',
    },

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: 'surface.1',
    },
  },
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
        padding: 'xs',
        borderRadius: 'sm',
      },
      md: {
        fontSize: 'base',
        padding: 'sm',
        borderRadius: 'md',
      },
      lg: {
        fontSize: 'md',
        padding: 'md',
        borderRadius: 'md',
      },
    },
    variant: {
      outline: {
        backgroundColor: 'transparent',
        borderColor: 'border.subtle',
      },
      filled: {
        backgroundColor: 'surface.1',
        borderColor: 'transparent',
        _hover: {
          backgroundColor: 'surface.2',
        },
        _focus: {
          backgroundColor: 'surface.0',
          borderColor: 'primary.DEFAULT',
        },
      },
    },
    isInvalid: {
      true: {
        borderColor: 'status.error',
        boxShadow: 'var(--shadow-glow-error)',
        _hover: {
          borderColor: 'status.error',
        },
        _focus: {
          borderColor: 'status.error',
          boxShadow: 'var(--shadow-glow-error)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="400px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Input Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Outline and filled input styles
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Outline</Text>
          <Input variant="outline" placeholder="Enter text..." />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Filled</Text>
          <Input variant="filled" placeholder="Enter text..." />
        </Box>
      </Flex>
    </Flex>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="400px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Input Sizes
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Small, medium, and large inputs
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Small</Text>
          <Input size="sm" placeholder="Small input" />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Medium</Text>
          <Input size="md" placeholder="Medium input" />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Large</Text>
          <Input size="lg" placeholder="Large input" />
        </Box>
      </Flex>
    </Flex>
  ),
}

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="400px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Input States
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Default, focus (click to focus), disabled, and invalid
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Default</Text>
          <Input placeholder="Default input" />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Disabled</Text>
          <Input placeholder="Disabled input" disabled />
        </Box>
        <Box>
          <Text fontSize="sm" color="text.muted" mb="2">Invalid</Text>
          <Input placeholder="Invalid input" isInvalid />
        </Box>
      </Flex>
    </Flex>
  ),
}

export const FormExample: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="400px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Form Example
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Input fields in a typical form layout
        </Text>
      </Box>
      <Box p="lg" bg="surface.1" borderRadius="md">
        <Flex direction="column" gap="md">
          <Box>
            <Text fontSize="sm" color="text.primary" mb="xs" fontWeight="medium">
              Username
            </Text>
            <Input placeholder="Enter username" />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.primary" mb="xs" fontWeight="medium">
              Email
            </Text>
            <Input type="email" placeholder="Enter email" />
          </Box>
          <Box>
            <Text fontSize="sm" color="text.primary" mb="xs" fontWeight="medium">
              Password
            </Text>
            <Input type="password" placeholder="Enter password" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  ),
}

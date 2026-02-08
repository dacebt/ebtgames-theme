import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'SlotRecipes/Switch',
}

export default meta
type Story = StoryObj

const SwitchRoot = styled('label', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'sm',
    cursor: 'pointer',
  },
})

const SwitchTrack = styled('span', {
  base: {
    position: 'relative',
    width: '44px',
    height: '24px',
    backgroundColor: 'surface.2',
    borderRadius: 'lg',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    transition: 'all 200ms ease',
  },
  variants: {
    isChecked: {
      true: {
        backgroundColor: 'primary.DEFAULT',
        borderColor: 'primary.DEFAULT',
        boxShadow: 'var(--shadow-glow-primary)',
      },
    },
  },
})

const SwitchThumb = styled('span', {
  base: {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '18px',
    height: '18px',
    backgroundColor: 'text.primary',
    borderRadius: '50%',
    boxShadow: 'var(--shadow-xs)',
    transition: 'transform 200ms ease',
  },
  variants: {
    isChecked: {
      true: {
        transform: 'translateX(20px)',
      },
    },
  },
})

const SwitchLabel = styled('span', {
  base: {
    fontSize: 'sm',
    color: 'text.primary',
    fontWeight: 'medium',
    userSelect: 'none',
  },
})

function SwitchDemo({
  label,
  defaultChecked = false,
}: {
  label: string
  defaultChecked?: boolean
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  return (
    <SwitchRoot onClick={() => setIsChecked(!isChecked)}>
      <SwitchTrack isChecked={isChecked}>
        <SwitchThumb isChecked={isChecked} />
      </SwitchTrack>
      <SwitchLabel>{label}</SwitchLabel>
    </SwitchRoot>
  )
}

export const Default: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Switch
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Toggle switch for boolean settings
        </Text>
      </Box>
      <Flex direction="column" gap="md">
        <SwitchDemo label="Off state" defaultChecked={false} />
        <SwitchDemo label="On state" defaultChecked={true} />
      </Flex>
    </Flex>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Interactive Switch
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Click to toggle states
        </Text>
      </Box>
      <SwitchDemo label="Click me to toggle" />
    </Flex>
  ),
}

export const SettingsExample: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="350px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Settings Panel
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Switches in a typical settings context
        </Text>
      </Box>
      <Box p="lg" bg="surface.1" borderRadius="md">
        <Text
          fontSize="base"
          color="primary.DEFAULT"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="tight"
          mb="lg"
        >
          Game Settings
        </Text>
        <Flex direction="column" gap="md">
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="sm" color="text.primary" fontWeight="medium">
                Show Timer
              </Text>
              <Text fontSize="xs" color="text.muted">
                Display elapsed time during gameplay
              </Text>
            </Box>
            <SwitchDemo label="" defaultChecked={true} />
          </Flex>
          <Box h="1px" bg="border.subtle" />
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="sm" color="text.primary" fontWeight="medium">
                Highlight Errors
              </Text>
              <Text fontSize="xs" color="text.muted">
                Show conflicts in red
              </Text>
            </Box>
            <SwitchDemo label="" defaultChecked={true} />
          </Flex>
          <Box h="1px" bg="border.subtle" />
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="sm" color="text.primary" fontWeight="medium">
                Auto-notes
              </Text>
              <Text fontSize="xs" color="text.muted">
                Automatically update pencil marks
              </Text>
            </Box>
            <SwitchDemo label="" defaultChecked={false} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useSlotRecipe } from '@chakra-ui/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'SlotRecipes/Switch',
}

export default meta
type Story = StoryObj

function SwitchDemo({
  label,
  defaultChecked = false,
}: {
  label: string
  defaultChecked?: boolean
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked)
  const recipe = useSlotRecipe({ key: 'switch' })
  const styles = recipe()

  return (
    <Box css={styles.root}>
      <Box
        css={styles.control}
        data-checked={isChecked || undefined}
        onClick={() => setIsChecked(!isChecked)}
      >
        <Box css={styles.thumb} data-checked={isChecked || undefined} />
      </Box>
      {label && <Box css={styles.label}>{label}</Box>}
    </Box>
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

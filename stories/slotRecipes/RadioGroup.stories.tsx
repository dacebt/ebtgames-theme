import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Slot Recipes/RadioGroup',
}

export default meta
type Story = StoryObj

const RadioItem = ({
  value,
  label,
  description,
  checked,
  onChange,
}: {
  value: string
  label: string
  description?: string
  checked: boolean
  onChange: () => void
}) => (
  <Box
    css={{ slotRecipe: 'radioGroup.item' }}
    data-checked={checked || undefined}
    onClick={onChange}
  >
    <Box css={{ slotRecipe: 'radioGroup.indicator' }} data-checked={checked || undefined} />
    <Box flex="1">
      <Text css={{ slotRecipe: 'radioGroup.text' }}>{label}</Text>
      {description && (
        <Text css={{ slotRecipe: 'radioGroup.description' }}>{description}</Text>
      )}
    </Box>
  </Box>
)

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('medium')

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Radio Group
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Selection groups for mutually exclusive options
          </Text>
        </Box>
        <Box css={{ slotRecipe: 'radioGroup.root' }} maxWidth="400px">
          <Text css={{ slotRecipe: 'radioGroup.label' }}>Difficulty Level</Text>
          <Box css={{ slotRecipe: 'radioGroup.group' }}>
            <RadioItem
              value="easy"
              label="Easy"
              checked={selected === 'easy'}
              onChange={() => setSelected('easy')}
            />
            <RadioItem
              value="medium"
              label="Medium"
              checked={selected === 'medium'}
              onChange={() => setSelected('medium')}
            />
            <RadioItem
              value="hard"
              label="Hard"
              checked={selected === 'hard'}
              onChange={() => setSelected('hard')}
            />
          </Box>
        </Box>
      </Flex>
    )
  },
}

export const WithDescriptions: Story = {
  render: () => {
    const [selected, setSelected] = useState('standard')

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            With Descriptions
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Radio items with additional descriptive text
          </Text>
        </Box>
        <Box css={{ slotRecipe: 'radioGroup.root' }} maxWidth="500px">
          <Text css={{ slotRecipe: 'radioGroup.label' }}>Game Mode</Text>
          <Box css={{ slotRecipe: 'radioGroup.group' }}>
            <RadioItem
              value="standard"
              label="Standard Mode"
              description="Classic gameplay with traditional rules and time limits"
              checked={selected === 'standard'}
              onChange={() => setSelected('standard')}
            />
            <RadioItem
              value="timed"
              label="Timed Challenge"
              description="Race against the clock to complete as many puzzles as possible"
              checked={selected === 'timed'}
              onChange={() => setSelected('timed')}
            />
            <RadioItem
              value="zen"
              label="Zen Mode"
              description="Relaxed gameplay with no time pressure or scoring"
              checked={selected === 'zen'}
              onChange={() => setSelected('zen')}
            />
          </Box>
        </Box>
      </Flex>
    )
  },
}

export const HorizontalOrientation: Story = {
  render: () => {
    const [selected, setSelected] = useState('all')

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Horizontal Layout
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Radio groups can be arranged horizontally
          </Text>
        </Box>
        <Box css={{ slotRecipe: 'radioGroup.root' }} maxWidth="600px">
          <Text css={{ slotRecipe: 'radioGroup.label' }}>View Filter</Text>
          <Box css={{ slotRecipe: 'radioGroup.group' }} display="flex" flexDirection="row" gap="3">
            <RadioItem
              value="all"
              label="All"
              checked={selected === 'all'}
              onChange={() => setSelected('all')}
            />
            <RadioItem
              value="active"
              label="Active"
              checked={selected === 'active'}
              onChange={() => setSelected('active')}
            />
            <RadioItem
              value="completed"
              label="Completed"
              checked={selected === 'completed'}
              onChange={() => setSelected('completed')}
            />
          </Box>
        </Box>
      </Flex>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [selectedSm, setSelectedSm] = useState('option1')
    const [selectedLg, setSelectedLg] = useState('option1')

    return (
      <Flex direction="column" gap="8">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Radio Group Sizes
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Small and large size variations
          </Text>
        </Box>

        <Box css={{ slotRecipe: 'radioGroup.root' }} maxWidth="400px">
          <Text css={{ slotRecipe: 'radioGroup.label' }}>Small Size</Text>
          <Box css={{ slotRecipe: 'radioGroup.group' }}>
            <Box
              css={{ slotRecipe: 'radioGroup.item' }}
              data-checked={selectedSm === 'option1' || undefined}
              onClick={() => setSelectedSm('option1')}
              padding="xs"
            >
              <Box
                css={{ slotRecipe: 'radioGroup.indicator' }}
                data-checked={selectedSm === 'option1' || undefined}
                width="14px"
                height="14px"
              />
              <Text css={{ slotRecipe: 'radioGroup.text' }} fontSize="sm">Option One</Text>
            </Box>
            <Box
              css={{ slotRecipe: 'radioGroup.item' }}
              data-checked={selectedSm === 'option2' || undefined}
              onClick={() => setSelectedSm('option2')}
              padding="xs"
            >
              <Box
                css={{ slotRecipe: 'radioGroup.indicator' }}
                data-checked={selectedSm === 'option2' || undefined}
                width="14px"
                height="14px"
              />
              <Text css={{ slotRecipe: 'radioGroup.text' }} fontSize="sm">Option Two</Text>
            </Box>
          </Box>
        </Box>

        <Box css={{ slotRecipe: 'radioGroup.root' }} maxWidth="400px">
          <Text css={{ slotRecipe: 'radioGroup.label' }}>Large Size</Text>
          <Box css={{ slotRecipe: 'radioGroup.group' }}>
            <Box
              css={{ slotRecipe: 'radioGroup.item' }}
              data-checked={selectedLg === 'option1' || undefined}
              onClick={() => setSelectedLg('option1')}
              padding="md"
            >
              <Box
                css={{ slotRecipe: 'radioGroup.indicator' }}
                data-checked={selectedLg === 'option1' || undefined}
                width="22px"
                height="22px"
              />
              <Text css={{ slotRecipe: 'radioGroup.text' }} fontSize="md">Option One</Text>
            </Box>
            <Box
              css={{ slotRecipe: 'radioGroup.item' }}
              data-checked={selectedLg === 'option2' || undefined}
              onClick={() => setSelectedLg('option2')}
              padding="md"
            >
              <Box
                css={{ slotRecipe: 'radioGroup.indicator' }}
                data-checked={selectedLg === 'option2' || undefined}
                width="22px"
                height="22px"
              />
              <Text css={{ slotRecipe: 'radioGroup.text' }} fontSize="md">Option Two</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    )
  },
}

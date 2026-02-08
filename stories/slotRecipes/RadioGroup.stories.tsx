import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'SlotRecipes/RadioGroup',
}

export default meta
type Story = StoryObj

const RadioGroupRoot = styled('div', {
  base: {
    width: '100%',
  },
})

const RadioGroupLabel = styled('label', {
  base: {
    display: 'block',
    fontFamily: 'body',
    fontSize: 'base',
    fontWeight: 'medium',
    color: 'primary.DEFAULT',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    marginBottom: 'md',
  },
})

const RadioGroupItems = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'sm',
  },
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
})

const RadioItem = styled('label', {
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'sm',
    padding: 'sm',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    borderRadius: 'md',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    _hover: {
      borderColor: 'primary.DEFAULT',
      backgroundColor: 'overlay.subtle',
    },
  },
  variants: {
    isSelected: {
      true: {
        borderColor: 'primary.DEFAULT',
        backgroundColor: 'overlay.light',
      },
    },
    variant: {
      outline: {},
      subtle: {
        backgroundColor: 'surface.1',
        _hover: {
          backgroundColor: 'surface.2',
        },
      },
      cards: {
        padding: 'md',
        boxShadow: 'var(--shadow-xs)',
      },
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      variant: 'subtle',
      css: {
        backgroundColor: 'overlay.light',
      },
    },
    {
      isSelected: true,
      variant: 'cards',
      css: {
        boxShadow: 'var(--shadow-sm), var(--shadow-glow-primary)',
      },
    },
  ],
  defaultVariants: {
    variant: 'outline',
  },
})

const RadioIndicator = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18px',
    height: '18px',
    borderWidth: 'base',
    borderStyle: 'solid',
    borderColor: 'border.strong',
    borderRadius: '50%',
    backgroundColor: 'surface.0',
    flexShrink: 0,
    marginTop: '2px',
    transition: 'all 150ms ease',
  },
  variants: {
    isSelected: {
      true: {
        borderColor: 'primary.DEFAULT',
        backgroundColor: 'primary.DEFAULT',
        _after: {
          content: '""',
          display: 'block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'surface.0',
        },
      },
    },
  },
})

const RadioText = styled('span', {
  base: {
    fontSize: 'base',
    fontWeight: 'medium',
    color: 'text.primary',
  },
})

const RadioDescription = styled('span', {
  base: {
    display: 'block',
    fontSize: 'sm',
    color: 'text.muted',
    marginTop: '2xs',
  },
})

interface RadioOption {
  value: string
  label: string
  description?: string
}

function RadioGroupDemo({
  variant = 'outline',
  options,
  defaultValue,
}: {
  variant?: 'outline' | 'subtle' | 'cards'
  options: RadioOption[]
  defaultValue?: string
}) {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value)

  return (
    <RadioGroupRoot>
      <RadioGroupItems>
        {options.map((option) => {
          const isSelected = selected === option.value
          return (
            <RadioItem
              key={option.value}
              isSelected={isSelected}
              variant={variant}
              onClick={() => setSelected(option.value)}
            >
              <RadioIndicator isSelected={isSelected} />
              <Box>
                <RadioText>{option.label}</RadioText>
                {option.description && (
                  <RadioDescription>{option.description}</RadioDescription>
                )}
              </Box>
            </RadioItem>
          )
        })}
      </RadioGroupItems>
    </RadioGroupRoot>
  )
}

const difficultyOptions = [
  { value: 'easy', label: 'Easy', description: '40-45 starting clues' },
  { value: 'medium', label: 'Medium', description: '32-38 starting clues' },
  { value: 'hard', label: 'Hard', description: '28-32 starting clues' },
  { value: 'expert', label: 'Expert', description: '22-27 starting clues' },
]

export const Default: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="350px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          RadioGroup
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Single selection from multiple options
        </Text>
      </Box>
      <Box>
        <RadioGroupLabel>Difficulty</RadioGroupLabel>
        <RadioGroupDemo options={difficultyOptions} defaultValue="medium" />
      </Box>
    </Flex>
  ),
}

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="8" maxW="350px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          RadioGroup Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Outline, subtle, and cards styles
        </Text>
      </Box>
      <Box>
        <Text fontSize="sm" color="text.muted" mb="3">Outline</Text>
        <RadioGroupDemo variant="outline" options={difficultyOptions.slice(0, 3)} />
      </Box>
      <Box>
        <Text fontSize="sm" color="text.muted" mb="3">Subtle</Text>
        <RadioGroupDemo variant="subtle" options={difficultyOptions.slice(0, 3)} />
      </Box>
      <Box>
        <Text fontSize="sm" color="text.muted" mb="3">Cards</Text>
        <RadioGroupDemo variant="cards" options={difficultyOptions.slice(0, 3)} />
      </Box>
    </Flex>
  ),
}

export const SimpleOptions: Story = {
  render: () => {
    const simpleOptions = [
      { value: 'light', label: 'Light Theme' },
      { value: 'dark', label: 'Dark Theme' },
      { value: 'system', label: 'System Default' },
    ]

    return (
      <Flex direction="column" gap="6" maxW="300px">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Simple Options
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Options without descriptions
          </Text>
        </Box>
        <Box>
          <RadioGroupLabel>Theme</RadioGroupLabel>
          <RadioGroupDemo options={simpleOptions} defaultValue="dark" />
        </Box>
      </Flex>
    )
  },
}

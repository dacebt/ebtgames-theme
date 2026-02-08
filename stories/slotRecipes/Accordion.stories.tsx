import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'SlotRecipes/Accordion',
}

export default meta
type Story = StoryObj

// Styled accordion components
const AccordionRoot = styled('div', {
  base: {
    width: '100%',
  },
})

const AccordionItem = styled('div', {
  base: {
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    borderRadius: 'md',
    overflow: 'hidden',
    marginBottom: 'sm',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  variants: {
    variant: {
      subtle: {
        borderColor: 'border.subtle',
      },
      outline: {
        borderColor: 'border.strong',
      },
      solid: {
        borderColor: 'primary.DEFAULT',
        boxShadow: 'var(--shadow-glow-primary)',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
})

const AccordionTrigger = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 'sm',
    backgroundColor: 'surface.0',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'medium',
    color: 'primary.DEFAULT',
    textTransform: 'uppercase',
    letterSpacing: 'wide',
    transition: 'all 200ms ease',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
    _hover: {
      backgroundColor: 'surface.1',
    },
  },
  variants: {
    isOpen: {
      true: {
        borderBottom: '1px solid',
        borderBottomColor: 'border.subtle',
        backgroundColor: 'surface.1',
      },
    },
  },
})

const AccordionIcon = styled('span', {
  base: {
    transition: 'transform 200ms ease',
    color: 'text.muted',
  },
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
})

const AccordionContent = styled('div', {
  base: {
    padding: 'md',
    backgroundColor: 'surface.1',
  },
})

function AccordionDemo({ variant = 'subtle' }: { variant?: 'subtle' | 'outline' | 'solid' }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['item-1']))

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const items = [
    { id: 'item-1', title: 'How to Play', content: 'Fill in the grid so that every row, column, and 3x3 box contains the digits 1-9.' },
    { id: 'item-2', title: 'Difficulty Levels', content: 'Easy puzzles have more starting clues. Expert puzzles require advanced solving techniques.' },
    { id: 'item-3', title: 'Game Controls', content: 'Click a cell to select it, then press a number key or use the on-screen keypad.' },
  ]

  return (
    <AccordionRoot>
      {items.map((item) => {
        const isOpen = openItems.has(item.id)
        return (
          <AccordionItem key={item.id} variant={variant}>
            <AccordionTrigger isOpen={isOpen} onClick={() => toggleItem(item.id)}>
              {item.title}
              <AccordionIcon isOpen={isOpen}>▼</AccordionIcon>
            </AccordionTrigger>
            {isOpen && (
              <AccordionContent>
                <Text fontSize="sm" color="text.secondary">
                  {item.content}
                </Text>
              </AccordionContent>
            )}
          </AccordionItem>
        )
      })}
    </AccordionRoot>
  )
}

export const Default: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="400px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Accordion
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Collapsible content sections
        </Text>
      </Box>
      <AccordionDemo />
    </Flex>
  ),
}

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="8" maxW="400px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Accordion Variants
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Subtle, outline, and solid styles
        </Text>
      </Box>
      <Box>
        <Text fontSize="sm" color="text.muted" mb="3">Subtle</Text>
        <AccordionDemo variant="subtle" />
      </Box>
      <Box>
        <Text fontSize="sm" color="text.muted" mb="3">Outline</Text>
        <AccordionDemo variant="outline" />
      </Box>
      <Box>
        <Text fontSize="sm" color="text.muted" mb="3">Solid</Text>
        <AccordionDemo variant="solid" />
      </Box>
    </Flex>
  ),
}

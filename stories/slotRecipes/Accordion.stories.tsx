import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useSlotRecipe, useRecipe } from '@chakra-ui/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Slot Recipes/Accordion',
}

export default meta
type Story = StoryObj

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={{
      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease',
    }}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
  variant,
  size,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  variant?: string
  size?: string
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const recipe = useSlotRecipe({ key: 'accordion' })
  const styles = recipe()

  return (
    <Box css={styles.item}>
      <Box
        as="button"
        css={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        data-expanded={isOpen || undefined}
      >
        <Text>{title}</Text>
        <Box css={styles.icon} data-expanded={isOpen || undefined}>
          <ChevronIcon expanded={isOpen} />
        </Box>
      </Box>
      {isOpen && (
        <Box css={styles.content}>
          {children}
        </Box>
      )}
    </Box>
  )
}

export const Default: Story = {
  render: () => {
    const recipe = useSlotRecipe({ key: 'accordion' })
    const styles = recipe()

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Accordion
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Collapsible sections for organizing content
          </Text>
        </Box>
        <Box css={styles.root} maxWidth="600px">
          <AccordionItem title="Section One">
            <Text fontSize="sm" color="text.primary">
              This is the content for section one. It can contain any kind of content
              including text, images, or other components.
            </Text>
          </AccordionItem>
          <AccordionItem title="Section Two">
            <Text fontSize="sm" color="text.primary">
              This is the content for section two. Sections can be expanded and collapsed
              independently.
            </Text>
          </AccordionItem>
          <AccordionItem title="Section Three">
            <Text fontSize="sm" color="text.primary">
              This is the content for section three. The accordion pattern is great for
              organizing related content.
            </Text>
          </AccordionItem>
        </Box>
      </Flex>
    )
  },
}

export const DefaultOpen: Story = {
  render: () => {
    const recipe = useSlotRecipe({ key: 'accordion' })
    const styles = recipe()

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Default Open State
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Some sections can start in an open state
          </Text>
        </Box>
        <Box css={styles.root} maxWidth="600px">
          <AccordionItem title="Getting Started" defaultOpen>
            <Text fontSize="sm" color="text.primary" mb="2">
              Welcome! This section is open by default to guide you through the basics.
            </Text>
            <Text fontSize="sm" color="text.muted">
              Follow these steps to get started with the game.
            </Text>
          </AccordionItem>
          <AccordionItem title="Advanced Features">
            <Text fontSize="sm" color="text.primary">
              Learn about advanced features and strategies once you've mastered the basics.
            </Text>
          </AccordionItem>
        </Box>
      </Flex>
    )
  },
}

export const WithRichContent: Story = {
  render: () => {
    const accordionRecipe = useSlotRecipe({ key: 'accordion' })
    const badgeRecipe = useRecipe({ key: 'badge' })
    const accordionStyles = accordionRecipe()

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Rich Content
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Accordion sections can contain complex content
          </Text>
        </Box>
        <Box css={accordionStyles.root} maxWidth="600px">
          <AccordionItem title="Game Settings" defaultOpen>
            <Flex direction="column" gap="3">
              <Box>
                <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="1">
                  Difficulty
                </Text>
                <Flex gap="2">
                  <Box css={badgeRecipe({ variant: 'subtle', colorScheme: 'success', size: 'sm' })}>
                    Easy
                  </Box>
                  <Box css={badgeRecipe({ variant: 'subtle', colorScheme: 'primary', size: 'sm' })}>
                    Medium
                  </Box>
                  <Box css={badgeRecipe({ variant: 'subtle', colorScheme: 'error', size: 'sm' })}>
                    Hard
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="1">
                  Sound
                </Text>
                <Text fontSize="xs" color="text.muted">
                  Enable or disable sound effects and music
                </Text>
              </Box>
            </Flex>
          </AccordionItem>
          <AccordionItem title="Statistics">
            <Flex direction="column" gap="2">
              <Flex justify="space-between">
                <Text fontSize="sm" color="text.muted">Games Played</Text>
                <Text fontSize="sm" color="text.primary" fontWeight="medium">42</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontSize="sm" color="text.muted">Win Rate</Text>
                <Text fontSize="sm" color="text.primary" fontWeight="medium">87%</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontSize="sm" color="text.muted">Best Time</Text>
                <Text fontSize="sm" color="text.primary" fontWeight="medium">3:42</Text>
              </Flex>
            </Flex>
          </AccordionItem>
        </Box>
      </Flex>
    )
  },
}

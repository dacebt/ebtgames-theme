import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, useSlotRecipe, useRecipe } from '@chakra-ui/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Slot Recipes/Modal',
}

export default meta
type Story = StoryObj

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}) => {
  const recipe = useSlotRecipe({ key: 'modal' })
  const styles = recipe()

  if (!isOpen) return null

  return (
    <Box css={styles.backdrop} onClick={onClose}>
      <Box css={styles.modal} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <Box css={styles.header}>
          <Text as="h2" css={styles.title}>
            {title}
          </Text>
        </Box>
        <Box css={styles.content}>
          {children}
        </Box>
        {footer && (
          <Box
            padding="lg"
            borderTopWidth="thin"
            borderTopStyle="solid"
            borderTopColor="border.subtle"
          >
            {footer}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export const Basic: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRecipe = useRecipe({ key: 'button' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Basic Modal
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            A simple modal dialog with header and content
          </Text>
        </Box>
        <Box>
          <Box
            as="button"
            css={buttonRecipe({ variant: 'primary' })}
            px="lg"
            py="sm"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </Box>
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Welcome"
        >
          <Text fontSize="base" color="text.primary" mb="3">
            This is a basic modal dialog. It has a backdrop that can be clicked to close,
            and a centered modal container with header and content.
          </Text>
          <Text fontSize="sm" color="text.muted">
            Click anywhere outside the modal or press the button below to close.
          </Text>
        </Modal>
      </Flex>
    )
  },
}

export const WithActions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRecipe = useRecipe({ key: 'button' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Modal with Actions
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Modal with footer containing action buttons
          </Text>
        </Box>
        <Box>
          <Box
            as="button"
            css={buttonRecipe({ variant: 'primary' })}
            px="lg"
            py="sm"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </Box>
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Action"
          footer={
            <Flex gap="3" justify="flex-end">
              <Box
                as="button"
                css={buttonRecipe({ variant: 'secondary' })}
                px="lg"
                py="sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Box>
              <Box
                as="button"
                css={buttonRecipe({ variant: 'primary' })}
                px="lg"
                py="sm"
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Confirm
              </Box>
            </Flex>
          }
        >
          <Text fontSize="base" color="text.primary" mb="3">
            Are you sure you want to proceed with this action? This cannot be undone.
          </Text>
          <Text fontSize="sm" color="text.muted">
            Please review your selection carefully before confirming.
          </Text>
        </Modal>
      </Flex>
    )
  },
}

export const WithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRecipe = useRecipe({ key: 'button' })
    const inputRecipe = useRecipe({ key: 'input' })
    const badgeRecipe = useRecipe({ key: 'badge' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Modal with Form
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Modal containing form inputs and structured content
          </Text>
        </Box>
        <Box>
          <Box
            as="button"
            css={buttonRecipe({ variant: 'primary' })}
            px="lg"
            py="sm"
            onClick={() => setIsOpen(true)}
          >
            Open Settings
          </Box>
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Game Settings"
          footer={
            <Flex gap="3" justify="flex-end">
              <Box
                as="button"
                css={buttonRecipe({ variant: 'secondary' })}
                px="lg"
                py="sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Box>
              <Box
                as="button"
                css={buttonRecipe({ variant: 'primary' })}
                px="lg"
                py="sm"
                onClick={() => setIsOpen(false)}
              >
                Save Changes
              </Box>
            </Flex>
          }
        >
          <Flex direction="column" gap="4">
            <Box>
              <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="2">
                Player Name
              </Text>
              <Box
                as="input"
                css={inputRecipe()}
                placeholder="Enter your name"
                defaultValue="Player 1"
              />
            </Box>
            <Box>
              <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="2">
                Difficulty Level
              </Text>
              <Flex gap="2">
                <Box css={badgeRecipe({ variant: 'subtle', colorScheme: 'success' })}>
                  Easy
                </Box>
                <Box css={badgeRecipe({ variant: 'solid', colorScheme: 'primary' })}>
                  Medium
                </Box>
                <Box css={badgeRecipe({ variant: 'subtle', colorScheme: 'error' })}>
                  Hard
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="2">
                Sound Effects
              </Text>
              <Flex align="center" gap="2">
                <Box css={badgeRecipe({ variant: 'solid', colorScheme: 'success', size: 'sm' })}>
                  Enabled
                </Box>
                <Text fontSize="xs" color="text.muted">
                  Audio feedback for game actions
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Modal>
      </Flex>
    )
  },
}

export const DangerModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRecipe = useRecipe({ key: 'button' })
    const cardRecipe = useRecipe({ key: 'card' })
    const badgeRecipe = useRecipe({ key: 'badge' })

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Danger Modal
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            Modal for destructive or warning actions
          </Text>
        </Box>
        <Box>
          <Box
            as="button"
            css={buttonRecipe({ variant: 'danger' })}
            px="lg"
            py="sm"
            onClick={() => setIsOpen(true)}
          >
            Delete Game
          </Box>
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Delete Game"
          footer={
            <Flex gap="3" justify="flex-end">
              <Box
                as="button"
                css={buttonRecipe({ variant: 'secondary' })}
                px="lg"
                py="sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Box>
              <Box
                as="button"
                css={buttonRecipe({ variant: 'danger' })}
                px="lg"
                py="sm"
                onClick={() => setIsOpen(false)}
              >
                Delete
              </Box>
            </Flex>
          }
        >
          <Flex direction="column" gap="3">
            <Box
              css={cardRecipe({ variant: 'outline' })}
              borderColor="status.error"
              padding="md"
            >
              <Flex align="center" gap="2" mb="2">
                <Box css={badgeRecipe({ variant: 'solid', colorScheme: 'error', size: 'sm' })}>
                  WARNING
                </Box>
                <Text fontSize="sm" color="status.error" fontWeight="bold">
                  This action cannot be undone
                </Text>
              </Flex>
              <Text fontSize="sm" color="text.muted">
                Deleting this game will permanently remove all progress, statistics, and saved data.
              </Text>
            </Box>
            <Text fontSize="sm" color="text.primary">
              Are you absolutely sure you want to delete this game? All associated data will be lost forever.
            </Text>
          </Flex>
        </Modal>
      </Flex>
    )
  },
}

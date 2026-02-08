import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'

const meta: Meta = {
  title: 'SlotRecipes/Modal',
}

export default meta
type Story = StoryObj

const ModalBackdrop = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'md',
    minHeight: '400px',
    background: 'rgba(27, 15, 38, 0.95)',
    backdropFilter: 'blur(8px)',
    borderRadius: 'md',
  },
})

const ModalContainer = styled('div', {
  base: {
    background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
    borderWidth: 'base',
    borderStyle: 'solid',
    borderColor: 'primary.DEFAULT',
    maxWidth: '400px',
    width: '100%',
    boxShadow: 'var(--shadow-xl), var(--shadow-glow-primary-xl), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    borderRadius: 'md',
  },
})

const ModalHeader = styled('div', {
  base: {
    padding: 'lg',
    borderBottomWidth: 'thin',
    borderBottomStyle: 'solid',
    borderBottomColor: 'border.subtle',
    background: 'linear-gradient(180deg, var(--color-overlay-light), transparent)',
  },
})

const ModalTitle = styled('h2', {
  base: {
    margin: 0,
    fontFamily: 'display',
    fontSize: 'xl',
    color: 'text.primary',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
})

const ModalContent = styled('div', {
  base: {
    padding: 'lg',
  },
})

const ModalFooter = styled('div', {
  base: {
    padding: 'lg',
    paddingTop: 0,
    display: 'flex',
    gap: 'sm',
    justifyContent: 'flex-end',
  },
})

const Button = styled('button', {
  base: {
    fontFamily: 'body',
    fontSize: 'sm',
    px: 'md',
    py: 'xs',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderRadius: 'sm',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
  },
  variants: {
    variant: {
      primary: {
        borderColor: 'primary.DEFAULT',
        backgroundColor: 'primary.DEFAULT',
        color: 'surface.0',
        _hover: {
          backgroundColor: 'primary.hover',
          boxShadow: 'var(--shadow-glow-primary)',
        },
      },
      secondary: {
        borderColor: 'border.strong',
        backgroundColor: 'transparent',
        color: 'text.primary',
        _hover: {
          backgroundColor: 'overlay.subtle',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const Default: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Modal
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Dialog overlay with backdrop blur
        </Text>
      </Box>
      <ModalBackdrop>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Settings</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <Text fontSize="base" color="text.secondary" mb="md">
              Configure your game preferences here.
            </Text>
            <Box>
              <Text fontSize="sm" color="text.muted">
                This is a modal dialog with the Night Violet theme styling.
                It includes backdrop blur, gradient header, and glow effects.
              </Text>
            </Box>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Save</Button>
          </ModalFooter>
        </ModalContainer>
      </ModalBackdrop>
    </Flex>
  ),
}

export const ConfirmDialog: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Confirm Dialog
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Action confirmation modal
        </Text>
      </Box>
      <ModalBackdrop>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>New Game?</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <Text fontSize="base" color="text.secondary">
              Starting a new game will reset your current progress. Are you sure?
            </Text>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary">Keep Playing</Button>
            <Button variant="primary">New Game</Button>
          </ModalFooter>
        </ModalContainer>
      </ModalBackdrop>
    </Flex>
  ),
}

export const InfoModal: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Info Modal
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Modal with longer content
        </Text>
      </Box>
      <ModalBackdrop>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>How to Play</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <Flex direction="column" gap="md">
              <Box>
                <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="xs">
                  Objective
                </Text>
                <Text fontSize="sm" color="text.muted">
                  Fill in the grid so that every row, column, and 3x3 box
                  contains the digits 1 through 9.
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="xs">
                  Controls
                </Text>
                <Text fontSize="sm" color="text.muted">
                  Click a cell to select it, then press a number key or use
                  the on-screen keypad to enter a digit.
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="text.primary" fontWeight="medium" mb="xs">
                  Notes Mode
                </Text>
                <Text fontSize="sm" color="text.muted">
                  Toggle notes mode to add pencil marks for possible values
                  in a cell.
                </Text>
              </Box>
            </Flex>
          </ModalContent>
          <ModalFooter>
            <Button variant="primary">Got it!</Button>
          </ModalFooter>
        </ModalContainer>
      </ModalBackdrop>
    </Flex>
  ),
}

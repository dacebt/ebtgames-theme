import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, Grid } from '@chakra-ui/react'
import { timingVariables } from '../../src'

const meta: Meta = {
  title: 'Foundations/Animations',
}

export default meta
type Story = StoryObj

const timings = [
  { name: 'fast', var: '--timing-fast', value: timingVariables['--timing-fast'], desc: 'Quick interactions' },
  { name: 'base', var: '--timing-base', value: timingVariables['--timing-base'], desc: 'Standard transitions' },
  { name: 'slow', var: '--timing-slow', value: timingVariables['--timing-slow'], desc: 'Deliberate animations' },
]

const easings = [
  { name: 'default', var: '--easing-default', value: timingVariables['--easing-default'] },
  { name: 'out', var: '--easing-out', value: timingVariables['--easing-out'] },
  { name: 'in-out', var: '--easing-in-out', value: timingVariables['--easing-in-out'] },
]

export const TimingTokens: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Timing Tokens
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Duration values for consistent animation timing
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        {timings.map((timing) => (
          <Flex key={timing.name} align="center" gap="4">
            <Box minW="60px">
              <Text fontSize="sm" color="text.primary" fontWeight="medium">
                {timing.name}
              </Text>
            </Box>
            <Box minW="80px">
              <Text fontSize="xs" color="text.muted">
                {timing.value}
              </Text>
            </Box>
            <Text fontSize="sm" color="text.secondary">
              {timing.desc}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
}

export const EasingFunctions: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Easing Functions
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Timing functions for natural motion
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        {easings.map((easing) => (
          <Flex key={easing.name} align="center" gap="4">
            <Box minW="80px">
              <Text fontSize="sm" color="text.primary" fontWeight="medium">
                {easing.name}
              </Text>
            </Box>
            <Text fontSize="xs" color="text.muted">
              {easing.value}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
}

export const FadeAnimations: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Fade Animations
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Opacity transitions for appearing/disappearing elements
        </Text>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.2"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="fadeIn 1.5s ease infinite alternate"
          >
            <Text fontSize="sm" color="text.primary">fadeIn</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">0 → 1 opacity</Text>
        </Flex>
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.2"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="fadeOut 1.5s ease infinite alternate"
          >
            <Text fontSize="sm" color="text.primary">fadeOut</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">1 → 0 opacity</Text>
        </Flex>
      </Grid>
    </Flex>
  ),
}

export const GlowAnimations: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Glow Animations
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Pulsing glow effects for emphasis
        </Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.1"
            borderWidth="base"
            borderColor="primary.DEFAULT"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="glow 2s ease-in-out infinite"
          >
            <Text fontSize="sm" color="primary.DEFAULT">glow</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">Primary glow</Text>
        </Flex>
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.1"
            borderWidth="base"
            borderColor="utility.DEFAULT"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="glowSecondary 2s ease-in-out infinite"
          >
            <Text fontSize="sm" color="utility.DEFAULT">glowSecondary</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">Secondary glow</Text>
        </Flex>
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.1"
            borderWidth="base"
            borderColor="emphasis.DEFAULT"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="glowAccent 2s ease-in-out infinite"
          >
            <Text fontSize="sm" color="emphasis.DEFAULT">glowAccent</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">Accent glow</Text>
        </Flex>
      </Grid>
    </Flex>
  ),
}

export const ScaleAnimations: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Scale Animations
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Size transitions for modals and popups
        </Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.2"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="scaleIn 1.5s ease infinite alternate"
          >
            <Text fontSize="sm" color="text.primary">scaleIn</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">0.8 → 1 scale</Text>
        </Flex>
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.2"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="pulse 2s ease-in-out infinite"
          >
            <Text fontSize="sm" color="text.primary">pulse</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">Subtle scale pulse</Text>
        </Flex>
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.2"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="spin 3s linear infinite"
          >
            <Text fontSize="sm" color="text.primary">spin</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">360° rotation</Text>
        </Flex>
      </Grid>
    </Flex>
  ),
}

export const LoadingAnimation: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Loading Animation
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Bounce animation with staggered delays
        </Text>
      </Box>
      <Flex align="center" justify="center" gap="sm" p="lg">
        <Box
          w="12px"
          h="12px"
          bg="primary.DEFAULT"
          borderRadius="50%"
          animation="bounce 1.4s infinite ease-in-out both"
          css={{ animationDelay: '-0.32s' }}
        />
        <Box
          w="12px"
          h="12px"
          bg="primary.DEFAULT"
          borderRadius="50%"
          animation="bounce 1.4s infinite ease-in-out both"
          css={{ animationDelay: '-0.16s' }}
        />
        <Box
          w="12px"
          h="12px"
          bg="primary.DEFAULT"
          borderRadius="50%"
          animation="bounce 1.4s infinite ease-in-out both"
        />
      </Flex>
      <Text fontSize="sm" color="text.muted" textAlign="center">
        Three dots with -0.32s, -0.16s, 0s delays
      </Text>
    </Flex>
  ),
}

export const SlideAnimations: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Slide Animations
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Directional entrance animations
        </Text>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.2"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="slideInUp 1.5s ease infinite alternate"
          >
            <Text fontSize="sm" color="text.primary">slideInUp</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">From bottom</Text>
        </Flex>
        <Flex direction="column" align="center" gap="3">
          <Box
            w="120px"
            h="80px"
            bg="surface.2"
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="slideInDown 1.5s ease infinite alternate"
          >
            <Text fontSize="sm" color="text.primary">slideInDown</Text>
          </Box>
          <Text fontSize="xs" color="text.muted">From top</Text>
        </Flex>
      </Grid>
    </Flex>
  ),
}

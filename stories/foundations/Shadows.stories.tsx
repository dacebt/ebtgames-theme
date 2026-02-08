import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, Grid } from '@chakra-ui/react'
import { shadowVariables } from '../../src'

const meta: Meta = {
  title: 'Foundations/Shadows',
}

export default meta
type Story = StoryObj

const depthShadows = [
  { name: 'xs', var: '--shadow-xs' },
  { name: 'sm', var: '--shadow-sm' },
  { name: 'md', var: '--shadow-md' },
  { name: 'lg', var: '--shadow-lg' },
  { name: 'xl', var: '--shadow-xl' },
]

const glowShadows = [
  { name: 'primary', var: '--shadow-glow-primary', color: 'Purple' },
  { name: 'primary-lg', var: '--shadow-glow-primary-lg', color: 'Purple (large)' },
  { name: 'secondary', var: '--shadow-glow-secondary', color: 'Teal' },
  { name: 'secondary-lg', var: '--shadow-glow-secondary-lg', color: 'Teal (large)' },
  { name: 'accent', var: '--shadow-glow-accent', color: 'Rose' },
  { name: 'accent-lg', var: '--shadow-glow-accent-lg', color: 'Rose (large)' },
  { name: 'error', var: '--shadow-glow-error', color: 'Error' },
]

const insetShadows = [
  { name: 'subtle', var: '--shadow-inset-subtle' },
  { name: 'deep', var: '--shadow-inset-deep' },
  { name: 'primary', var: '--shadow-inset-primary' },
]

export const DepthShadows: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Depth Shadows
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Layered shadows for elevation hierarchy
        </Text>
      </Box>
      <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap="6">
        {depthShadows.map((shadow) => (
          <Flex key={shadow.name} direction="column" align="center" gap="3">
            <Box
              w="120px"
              h="80px"
              bg="surface.2"
              borderRadius="md"
              boxShadow={`var(${shadow.var})`}
            />
            <Text fontSize="sm" color="text.primary" fontWeight="medium">
              {shadow.name}
            </Text>
            <Text fontSize="xs" color="text.muted" textAlign="center">
              {shadow.var}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  ),
}

export const GlowShadows: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Glow Shadows
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Color-specific glows for emphasis and interactivity
        </Text>
      </Box>
      <Grid templateColumns="repeat(auto-fill, minmax(180px, 1fr))" gap="6">
        {glowShadows.map((shadow) => (
          <Flex key={shadow.name} direction="column" align="center" gap="3">
            <Box
              w="140px"
              h="80px"
              bg="surface.1"
              borderWidth="thin"
              borderColor="border.subtle"
              borderRadius="md"
              boxShadow={`var(${shadow.var})`}
            />
            <Text fontSize="sm" color="text.primary" fontWeight="medium">
              {shadow.color}
            </Text>
            <Text fontSize="xs" color="text.muted" textAlign="center">
              {shadow.var}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  ),
}

export const InsetShadows: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Inset Shadows
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Inner shadows for pressed states and depth
        </Text>
      </Box>
      <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap="6">
        {insetShadows.map((shadow) => (
          <Flex key={shadow.name} direction="column" align="center" gap="3">
            <Box
              w="120px"
              h="80px"
              bg="surface.0"
              borderWidth="thin"
              borderColor="border.subtle"
              borderRadius="md"
              boxShadow={`var(${shadow.var})`}
            />
            <Text fontSize="sm" color="text.primary" fontWeight="medium">
              {shadow.name}
            </Text>
            <Text fontSize="xs" color="text.muted" textAlign="center">
              {shadow.var}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  ),
}

export const CombinedShadows: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Combined Shadows
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Depth + glow combinations for rich effects
        </Text>
      </Box>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="6">
        <Flex direction="column" align="center" gap="3">
          <Box
            w="160px"
            h="100px"
            bg="surface.2"
            borderWidth="base"
            borderColor="primary.DEFAULT"
            borderRadius="md"
            boxShadow="var(--shadow-md), var(--shadow-glow-primary)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="sm" color="text.primary">Card</Text>
          </Box>
          <Text fontSize="xs" color="text.muted" textAlign="center">
            md + glow-primary
          </Text>
        </Flex>

        <Flex direction="column" align="center" gap="3">
          <Box
            w="160px"
            h="100px"
            bg="surface.2"
            borderWidth="base"
            borderColor="utility.DEFAULT"
            borderRadius="md"
            boxShadow="var(--shadow-lg), var(--shadow-glow-secondary-lg)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="sm" color="text.primary">Modal</Text>
          </Box>
          <Text fontSize="xs" color="text.muted" textAlign="center">
            lg + glow-secondary-lg
          </Text>
        </Flex>

        <Flex direction="column" align="center" gap="3">
          <Box
            w="160px"
            h="100px"
            bg="surface.1"
            borderWidth="base"
            borderColor="emphasis.DEFAULT"
            borderRadius="md"
            boxShadow="var(--shadow-xl), var(--shadow-glow-accent-lg)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="sm" color="text.primary">Featured</Text>
          </Box>
          <Text fontSize="xs" color="text.muted" textAlign="center">
            xl + glow-accent-lg
          </Text>
        </Flex>
      </Grid>
    </Flex>
  ),
}

export const ShadowElevation: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Elevation System
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Progressive elevation with shadows and surface colors
        </Text>
      </Box>
      <Flex gap="4" align="flex-end" flexWrap="wrap">
        <Box
          w="120px"
          h="60px"
          bg="surface.0"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xs" color="text.muted">Base</Text>
        </Box>
        <Box
          w="120px"
          h="70px"
          bg="surface.1"
          borderRadius="md"
          boxShadow="var(--shadow-xs)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xs" color="text.muted">Raised</Text>
        </Box>
        <Box
          w="120px"
          h="80px"
          bg="surface.2"
          borderRadius="md"
          boxShadow="var(--shadow-sm)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xs" color="text.muted">Card</Text>
        </Box>
        <Box
          w="120px"
          h="90px"
          bg="surface.2"
          borderRadius="md"
          boxShadow="var(--shadow-md)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xs" color="text.muted">Dropdown</Text>
        </Box>
        <Box
          w="120px"
          h="100px"
          bg="surface.2"
          borderRadius="md"
          boxShadow="var(--shadow-lg)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xs" color="text.muted">Modal</Text>
        </Box>
      </Flex>
    </Flex>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, Grid } from '@chakra-ui/react'
import { typographyVariables } from '../../src'

const meta: Meta = {
  title: 'Foundations/Typography',
}

export default meta
type Story = StoryObj

const fontSizes = [
  { name: '4xl', var: '--font-size-4xl', value: typographyVariables['--font-size-4xl'], desc: 'Display text' },
  { name: '3xl', var: '--font-size-3xl', value: typographyVariables['--font-size-3xl'], desc: 'Hero text' },
  { name: '2xl', var: '--font-size-2xl', value: typographyVariables['--font-size-2xl'], desc: 'Page titles' },
  { name: 'xl', var: '--font-size-xl', value: typographyVariables['--font-size-xl'], desc: 'Modal titles' },
  { name: 'lg', var: '--font-size-lg', value: typographyVariables['--font-size-lg'], desc: 'Section headings' },
  { name: 'md', var: '--font-size-md', value: typographyVariables['--font-size-md'], desc: 'Emphasized body' },
  { name: 'base', var: '--font-size-base', value: typographyVariables['--font-size-base'], desc: 'Body text' },
  { name: 'sm', var: '--font-size-sm', value: typographyVariables['--font-size-sm'], desc: 'Secondary labels' },
  { name: 'xs', var: '--font-size-xs', value: typographyVariables['--font-size-xs'], desc: 'Helper text' },
]

const fontWeights = [
  { name: 'normal', var: '--font-weight-normal', value: typographyVariables['--font-weight-normal'] },
  { name: 'medium', var: '--font-weight-medium', value: typographyVariables['--font-weight-medium'] },
  { name: 'bold', var: '--font-weight-bold', value: typographyVariables['--font-weight-bold'] },
]

const letterSpacings = [
  { name: 'tight', var: '--letter-spacing-tight', value: typographyVariables['--letter-spacing-tight'] },
  { name: 'normal', var: '--letter-spacing-normal', value: typographyVariables['--letter-spacing-normal'] },
  { name: 'wide', var: '--letter-spacing-wide', value: typographyVariables['--letter-spacing-wide'] },
]

export const FontScale: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Font Size Scale
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Monospace typography scale from xs (12px) to 4xl (64px)
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        {fontSizes.map((size) => (
          <Flex key={size.name} align="baseline" gap="4">
            <Box minW="60px">
              <Text fontSize="sm" color="text.muted">
                {size.name}
              </Text>
            </Box>
            <Box minW="80px">
              <Text fontSize="xs" color="text.disabled">
                {size.value}
              </Text>
            </Box>
            <Text
              fontSize={size.name}
              color="text.primary"
              fontFamily="body"
            >
              {size.desc}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
}

export const FontWeights: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Font Weights
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Weight variations for emphasis hierarchy
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        {fontWeights.map((weight) => (
          <Flex key={weight.name} align="center" gap="4">
            <Box minW="80px">
              <Text fontSize="sm" color="text.muted">
                {weight.name}
              </Text>
            </Box>
            <Box minW="60px">
              <Text fontSize="xs" color="text.disabled">
                {weight.value}
              </Text>
            </Box>
            <Text
              fontSize="lg"
              color="text.primary"
              fontFamily="body"
              fontWeight={weight.name}
            >
              The quick brown fox jumps
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
}

export const LetterSpacing: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Letter Spacing
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Spacing variations for different text contexts
        </Text>
      </Box>
      <Flex direction="column" gap="4">
        {letterSpacings.map((spacing) => (
          <Flex key={spacing.name} align="center" gap="4">
            <Box minW="80px">
              <Text fontSize="sm" color="text.muted">
                {spacing.name}
              </Text>
            </Box>
            <Box minW="60px">
              <Text fontSize="xs" color="text.disabled">
                {spacing.value}
              </Text>
            </Box>
            <Text
              fontSize="lg"
              color="text.primary"
              fontFamily="body"
              letterSpacing={spacing.name}
              textTransform="uppercase"
            >
              SAMPLE TEXT
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
}

export const TextHierarchy: Story = {
  render: () => (
    <Flex direction="column" gap="6" maxW="600px">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Text Hierarchy
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Semantic text colors for content hierarchy
        </Text>
      </Box>
      <Box p="lg" bg="surface.1" borderRadius="md">
        <Text fontSize="2xl" color="text.primary" fontFamily="display" mb="md">
          Page Title
        </Text>
        <Text fontSize="base" color="text.primary" mb="md">
          Primary text is used for main content and headings. It provides
          maximum contrast against dark backgrounds.
        </Text>
        <Text fontSize="base" color="text.secondary" mb="md">
          Secondary text is for supporting content like descriptions and
          subheadings. Still highly readable.
        </Text>
        <Text fontSize="sm" color="text.muted" mb="md">
          Muted text works well for metadata, timestamps, or less important
          information that shouldn't compete with primary content.
        </Text>
        <Text fontSize="sm" color="text.disabled">
          Disabled text indicates unavailable options or placeholder content.
        </Text>
      </Box>
    </Flex>
  ),
}

export const ResponsiveSizes: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Responsive Font Sizes
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Fluid typography using clamp() for responsive scaling
        </Text>
      </Box>
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xs" color="text.muted" mb="2">
            --font-size-hero: {typographyVariables['--font-size-hero']}
          </Text>
          <Text fontSize="hero" color="text.primary" fontFamily="display">
            Hero Text
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="text.muted" mb="2">
            --font-size-subtitle: {typographyVariables['--font-size-subtitle']}
          </Text>
          <Text fontSize="subtitle" color="text.secondary">
            Subtitle text that scales with viewport
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="text.muted" mb="2">
            --font-size-cell: {typographyVariables['--font-size-cell']}
          </Text>
          <Grid templateColumns="repeat(3, 48px)" gap="2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <Flex
                key={n}
                w="48px"
                h="48px"
                bg="surface.2"
                borderWidth="thin"
                borderColor="border.subtle"
                borderRadius="sm"
                align="center"
                justify="center"
              >
                <Text fontSize="cell" color="text.primary">
                  {n}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Flex>
  ),
}

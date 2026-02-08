import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, Text, Grid } from '@chakra-ui/react'
import {
  colorVariables,
  contrastRatio,
  formatContrastRatio,
  getWcagLevel,
} from '../../src'

const meta: Meta = {
  title: 'Foundations/Colors',
}

export default meta
type Story = StoryObj

// Extract color values for display
const surfaceColors = [
  { name: 'surface-0', var: '--color-surface-0', value: colorVariables['--color-surface-0'] },
  { name: 'surface-1', var: '--color-surface-1', value: colorVariables['--color-surface-1'] },
  { name: 'surface-2', var: '--color-surface-2', value: colorVariables['--color-surface-2'] },
  { name: 'surface-3', var: '--color-surface-3', value: colorVariables['--color-surface-3'] },
]

const textColors = [
  { name: 'text-primary', var: '--color-text-primary', value: colorVariables['--color-text-primary'] },
  { name: 'text-secondary', var: '--color-text-secondary', value: colorVariables['--color-text-secondary'] },
  { name: 'text-muted', var: '--color-text-muted', value: colorVariables['--color-text-muted'] },
  { name: 'text-disabled', var: '--color-text-disabled', value: colorVariables['--color-text-disabled'] },
]

const interactiveColors = [
  { name: 'primary', var: '--color-interactive-primary', value: colorVariables['--color-interactive-primary'] },
  { name: 'primary-hover', var: '--color-interactive-primary-hover', value: colorVariables['--color-interactive-primary-hover'] },
  { name: 'secondary', var: '--color-interactive-secondary', value: colorVariables['--color-interactive-secondary'] },
  { name: 'secondary-hover', var: '--color-interactive-secondary-hover', value: colorVariables['--color-interactive-secondary-hover'] },
  { name: 'accent', var: '--color-interactive-accent', value: colorVariables['--color-interactive-accent'] },
]

const statusColors = [
  { name: 'success', var: '--color-status-success', value: colorVariables['--color-status-success'] },
  { name: 'warning', var: '--color-status-warning', value: colorVariables['--color-status-warning'] },
  { name: 'error', var: '--color-status-error', value: colorVariables['--color-status-error'] },
  { name: 'info', var: '--color-status-info', value: colorVariables['--color-status-info'] },
]

function ColorSwatch({ name, cssVar, value }: { name: string; cssVar: string; value: string }) {
  return (
    <Flex direction="column" gap="2" minW="120px">
      <Box
        w="100%"
        h="64px"
        borderRadius="md"
        bg={value}
        borderWidth="thin"
        borderColor="border.strong"
        boxShadow="sm"
      />
      <Text fontSize="sm" color="text.primary" fontWeight="medium">
        {name}
      </Text>
      <Text fontSize="xs" color="text.muted" fontFamily="body">
        {value}
      </Text>
      <Text fontSize="xs" color="text.disabled" fontFamily="body">
        {cssVar}
      </Text>
    </Flex>
  )
}

export const SurfaceColors: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Surface Colors
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Deep purple monochrome scale for backgrounds and elevation
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap">
        {surfaceColors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            cssVar={color.var}
            value={color.value}
          />
        ))}
      </Flex>
    </Flex>
  ),
}

export const TextColors: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Text Colors
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          WCAG AA verified text hierarchy
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap">
        {textColors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            cssVar={color.var}
            value={color.value}
          />
        ))}
      </Flex>
    </Flex>
  ),
}

export const InteractiveColors: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Interactive Colors
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Primary (purple), Secondary (teal), Accent (rose)
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap">
        {interactiveColors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            cssVar={color.var}
            value={color.value}
          />
        ))}
      </Flex>
    </Flex>
  ),
}

export const StatusColors: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
          Status Colors
        </Text>
        <Text fontSize="sm" color="text.muted" mb="4">
          Success, warning, error, and info states
        </Text>
      </Box>
      <Flex gap="4" flexWrap="wrap">
        {statusColors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            cssVar={color.var}
            value={color.value}
          />
        ))}
      </Flex>
    </Flex>
  ),
}

export const ContrastGrid: Story = {
  render: () => {
    const backgrounds = [
      { name: 'surface-0', value: colorVariables['--color-surface-0'] },
      { name: 'surface-1', value: colorVariables['--color-surface-1'] },
      { name: 'surface-2', value: colorVariables['--color-surface-2'] },
    ]

    const foregrounds = [
      { name: 'text-primary', value: colorVariables['--color-text-primary'] },
      { name: 'text-secondary', value: colorVariables['--color-text-secondary'] },
      { name: 'text-muted', value: colorVariables['--color-text-muted'] },
      { name: 'primary', value: colorVariables['--color-interactive-primary'] },
      { name: 'secondary', value: colorVariables['--color-interactive-secondary'] },
    ]

    return (
      <Flex direction="column" gap="6">
        <Box>
          <Text fontSize="xl" color="text.primary" fontFamily="display" mb="2">
            Contrast Grid
          </Text>
          <Text fontSize="sm" color="text.muted" mb="4">
            WCAG contrast ratios for text on background combinations
          </Text>
        </Box>
        <Box overflowX="auto">
          <Grid
            templateColumns={`120px repeat(${backgrounds.length}, 140px)`}
            gap="2"
          >
            <Box /> {/* Empty corner cell */}
            {backgrounds.map((bg) => (
              <Box
                key={bg.name}
                p="2"
                textAlign="center"
                bg={bg.value}
                borderRadius="md"
              >
                <Text fontSize="xs" color="text.primary">
                  {bg.name}
                </Text>
              </Box>
            ))}
            {foregrounds.map((fg) => (
              <>
                <Box key={`label-${fg.name}`} p="2" display="flex" alignItems="center">
                  <Text fontSize="xs" color={fg.value}>
                    {fg.name}
                  </Text>
                </Box>
                {backgrounds.map((bg) => {
                  const ratio = contrastRatio(fg.value, bg.value)
                  const level = getWcagLevel(ratio)
                  const levelColor =
                    level === 'AAA'
                      ? 'status.success'
                      : level === 'AA'
                      ? 'utility.DEFAULT'
                      : level === 'AA-large'
                      ? 'status.warning'
                      : 'status.error'

                  return (
                    <Box
                      key={`${fg.name}-${bg.name}`}
                      p="3"
                      bg={bg.value}
                      borderRadius="md"
                      borderWidth="thin"
                      borderColor="border.subtle"
                    >
                      <Text fontSize="md" color={fg.value} mb="1">
                        Aa
                      </Text>
                      <Text fontSize="xs" color={fg.value}>
                        {formatContrastRatio(ratio)}
                      </Text>
                      <Text fontSize="xs" color={levelColor} fontWeight="medium">
                        {level}
                      </Text>
                    </Box>
                  )
                })}
              </>
            ))}
          </Grid>
        </Box>
      </Flex>
    )
  },
}

export const FullPalette: Story = {
  render: () => (
    <Flex direction="column" gap="8">
      <Box>
        <Text fontSize="2xl" color="text.primary" fontFamily="display" mb="2">
          Night Violet Palette
        </Text>
        <Text fontSize="sm" color="text.muted">
          Complete color system with WCAG AA verified contrast ratios
        </Text>
      </Box>

      <Box>
        <Text fontSize="lg" color="text.primary" mb="4">Surfaces</Text>
        <Flex gap="4" flexWrap="wrap">
          {surfaceColors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              cssVar={color.var}
              value={color.value}
            />
          ))}
        </Flex>
      </Box>

      <Box>
        <Text fontSize="lg" color="text.primary" mb="4">Text</Text>
        <Flex gap="4" flexWrap="wrap">
          {textColors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              cssVar={color.var}
              value={color.value}
            />
          ))}
        </Flex>
      </Box>

      <Box>
        <Text fontSize="lg" color="text.primary" mb="4">Interactive</Text>
        <Flex gap="4" flexWrap="wrap">
          {interactiveColors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              cssVar={color.var}
              value={color.value}
            />
          ))}
        </Flex>
      </Box>

      <Box>
        <Text fontSize="lg" color="text.primary" mb="4">Status</Text>
        <Flex gap="4" flexWrap="wrap">
          {statusColors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              cssVar={color.var}
              value={color.value}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  ),
}

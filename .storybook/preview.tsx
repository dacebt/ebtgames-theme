import type { Preview } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '../src'
import React from 'react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <div style={{ padding: '1rem', minHeight: '100vh', background: 'var(--color-surface-0)' }}>
          <Story />
        </div>
      </ChakraProvider>
    ),
  ],
  parameters: {
    controls: { matchers: { color: /^(background|color)$/i, date: /Date$/i } },
  },
}

export default preview

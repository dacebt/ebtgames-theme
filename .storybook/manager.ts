import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
  base: 'dark',
  brandTitle: 'EBT Games Theme',
  brandUrl: 'https://github.com/ebtgames',
  brandImage: '/hourglass-logo.png',
  brandTarget: '_self',
})

addons.setConfig({
  theme,
})

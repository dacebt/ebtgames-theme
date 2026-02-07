import type { Meta, StoryObj } from '@storybook/react'
import { chakra, useRecipe } from '@chakra-ui/react'

const DemoButton = (props: { variant?: 'primary' | 'secondary' | 'danger'; children: React.ReactNode }) => {
  const recipe = useRecipe({ key: 'button' })
  const styles = recipe({ variant: props.variant } as never)
  return (
    <chakra.button css={styles} cursor="pointer" {...props}>
      {props.children}
    </chakra.button>
  )
}

const meta: Meta<typeof DemoButton> = {
  component: DemoButton,
  title: 'Theme/Button',
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger'] },
  },
}

export default meta

type Story = StoryObj<typeof DemoButton>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

export const Danger: Story = {
  args: { variant: 'danger', children: 'Danger' },
}

export const AllVariants: Story = {
  render: () => (
    <chakra.div display="flex" gap="4" flexWrap="wrap">
      <DemoButton variant="primary">Primary</DemoButton>
      <DemoButton variant="secondary">Secondary</DemoButton>
      <DemoButton variant="danger">Danger</DemoButton>
    </chakra.div>
  ),
}

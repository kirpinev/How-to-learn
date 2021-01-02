import { Button } from './index'

export default { title: 'Button' }

export const withText = (): JSX.Element => <Button>Hello Button</Button>

export const withPrimaryProp = (): JSX.Element => (
  <Button primary>Hello Button</Button>
)

export const withEmoji = (): JSX.Element => (
  <Button>
    Click me{' '}
    <span role="img" aria-label="lamb">
      🐑
    </span>
  </Button>
)

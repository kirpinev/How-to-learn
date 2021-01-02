import * as renderer from 'react-test-renderer'
import { Button } from './index'

describe('Index page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Button primary>Buy</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

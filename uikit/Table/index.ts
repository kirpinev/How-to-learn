import styled from 'styled-components'

export { Cell } from './Cell'
export { Heading } from './Heading'
export { TableText } from './TableText'

export const Table = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  max-width: 1100px;
  z-index: 1;
`

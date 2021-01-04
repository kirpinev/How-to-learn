import styled from 'styled-components'

import { IProps } from './types'

export const Cell = styled.div<IProps>`
  margin: 60px 0 0 0;

  ${(props) =>
    props.large &&
    `
     width: 250px;
  `}

  ${(props) =>
    props.medium &&
    `
    width: 200px;
  `}
`

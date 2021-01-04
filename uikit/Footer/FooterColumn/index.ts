import styled from 'styled-components'

import { IProps } from './types'

export const FooterColumn = styled.div<IProps>`
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    margin-right: auto;
  }

  &:nth-child(3) {
    margin-left: 100px;
  }

  ${(props) =>
    props.copyright &&
    `
    justify-content: space-between;
  `}
`

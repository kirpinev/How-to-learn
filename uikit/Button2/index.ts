import styled from 'styled-components'

import { IProps } from './types'

export const Button = styled.button<IProps>`
  box-sizing: border-box;
  padding: 4px;
  background: none;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  ${(props) =>
    props.primary &&
    `
      border-color: red;
    `}

  &:hover {
    border-color: black;
  }
`

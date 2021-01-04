import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SquarePic = styled.div`
  animation: ${rotate} 20s linear infinite;
  background-color: #2f80ed;
  height: 568px;
  position: absolute;
  right: 0;
  top: 64px;
  transform: rotate(-15deg);
  width: 568px;
  z-index: 5;
`

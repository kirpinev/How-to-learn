import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Triangle = styled.div`
  animation: ${rotate} 20s linear infinite;
  background-image: url('/triangle.svg');
  background-size: 877px 877px;
  height: 877px;
  position: absolute;
  right: 0;
  top: 0;
  width: 877px;
  z-index: -20;
`

import styled from 'styled-components'

export const FeinmanLink = styled.a`
  color: inherit;
  font: normal 36px/51px 'Helvetica Neue', Arial, sans-serif;
  position: absolute;
  right: 48px;
  text-decoration: none;
  top: 346px;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
  }
  &::after {
    content: '→';
    margin-left: 5px;
  }
`

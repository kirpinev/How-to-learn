import styled from 'styled-components'

export const Link = styled.a`
  color: #2f80ed;
  text-decoration: none;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
  }

  &::after {
    content: '→';
    margin-left: 5px;
  }
`

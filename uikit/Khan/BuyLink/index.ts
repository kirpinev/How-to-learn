import styled from 'styled-components'

export const BuyLink = styled.a`
  color: #2f80ed;
  font: normal 30px/42px 'Helvetica Neue', Arial, sans-serif;
  text-decoration: none;
  transition: opacity 0.3s linear;
  margin-top: -11px;

  &::after {
    content: '→';
    margin-left: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`

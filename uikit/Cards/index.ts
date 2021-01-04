import styled from 'styled-components'

export { CardsDescription } from './CardsDescription'
export { CardsImage } from './CardsImage'
export { CardsItem } from './CardsItem'
export { CardsTitle } from './CardsTitle'

export const Cards = styled.section`
  display: grid;
  grid-gap: 60px 100px;
  grid-template-columns: repeat(3, 240px);
  grid-template-rows: auto;
  padding-top: 60px;
`

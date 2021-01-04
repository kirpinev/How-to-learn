import { FC } from 'react'

import {
  Technics as TechnicsContainer,
  TechnicsWrapper,
  SectionTitle,
  SectionSubtitle,
  Cards,
  CardsItem,
  CardsImage,
  CardsTitle,
  CardsDescription,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Technics: FC = (): JSX.Element => (
  <TechnicsContainer>
    <TechnicsWrapper>
      <SectionTitle>{TRANSLATION.SECTION_TITLE}</SectionTitle>
      <SectionSubtitle>{TRANSLATION.SECTION_SUBTITLE}</SectionSubtitle>
      <Cards>
        {TRANSLATION.CARDS.map(({ src, alt, title, description }) => (
          <CardsItem key={alt}>
            <CardsImage src={src} alt={alt} />
            <CardsTitle>{title}</CardsTitle>
            <CardsDescription>{description}</CardsDescription>
          </CardsItem>
        ))}
      </Cards>
    </TechnicsWrapper>
  </TechnicsContainer>
)

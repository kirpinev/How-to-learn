import { FC } from 'react'

import {
  Khan as KhanContainer,
  KhanWrapper,
  Author,
  KhanTitle,
  Quote,
  QuoteAuthor,
  QuoteAuthorSubline,
  BookContainer,
  BookPic,
  BuyLink,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Khan: FC = (): JSX.Element => (
  <KhanContainer>
    <KhanWrapper>
      <Author>{TRANSLATION.AUTHOR}</Author>
      <KhanTitle>{TRANSLATION.TITLE}</KhanTitle>
      <Quote>{TRANSLATION.QUOTE}</Quote>
      <QuoteAuthor>{TRANSLATION.QUOTE_AUTHOR}</QuoteAuthor>
      <QuoteAuthorSubline>
        {TRANSLATION.QUOTE_AUTHOR_SUBLINE}
      </QuoteAuthorSubline>
      <BookContainer>
        <BookPic src={TRANSLATION.IMAGE.SRC} alt={TRANSLATION.IMAGE.ALT} />
        <BuyLink href="#">{TRANSLATION.LINK}</BuyLink>
      </BookContainer>
    </KhanWrapper>
  </KhanContainer>
)

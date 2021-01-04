import { FC } from 'react'

import {
  FeinmanLink,
  FeinmanSubtitle,
  FeinmanTitle,
  FeinmanWrapper,
  Feinman as FeinmanContainer,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Feinman: FC = (): JSX.Element => (
  <FeinmanContainer>
    <FeinmanWrapper>
      <FeinmanTitle>{TRANSLATION.TITLE}</FeinmanTitle>
      <FeinmanSubtitle>{TRANSLATION.SUBTITLE}</FeinmanSubtitle>
      <FeinmanLink href="#">{TRANSLATION.LINK}</FeinmanLink>
    </FeinmanWrapper>
  </FeinmanContainer>
)

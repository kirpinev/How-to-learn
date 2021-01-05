import { FC } from 'react'

import {
  FeinmanLink,
  FeinmanSubtitle,
  FeinmanTitle,
  FeinmanWrapper,
  Feinman as FeinmanContainer,
  FeinmanImage,
  FeinmanBackgroundWrapper,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Feinman: FC = (): JSX.Element => (
  <FeinmanContainer>
    <FeinmanWrapper>
      <div style={{ zIndex: 10 }}>
        <FeinmanTitle>{TRANSLATION.TITLE}</FeinmanTitle>
        <FeinmanSubtitle>{TRANSLATION.SUBTITLE}</FeinmanSubtitle>
        <FeinmanLink href="#">{TRANSLATION.LINK}</FeinmanLink>
      </div>
      <FeinmanBackgroundWrapper>
        <FeinmanImage src="/feinman.png" width="867" height="637" />
      </FeinmanBackgroundWrapper>
    </FeinmanWrapper>
  </FeinmanContainer>
)

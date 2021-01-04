import { FC } from 'react'

import {
  TwoColumns as TwoColumnsContainer,
  Brief,
  MainText,
  Paragraph,
  SpanAccent,
} from '../../uikit'
import { TRANSLATION } from './translation'

export const TwoColumns: FC = (): JSX.Element => (
  <TwoColumnsContainer>
    <Brief>{TRANSLATION.BRIEF}</Brief>
    <MainText>
      <Paragraph>{TRANSLATION.PARAGRAPH[0]}</Paragraph>
      <Paragraph>
        <SpanAccent>{TRANSLATION.SPAN_ACCENT[0]}</SpanAccent>{' '}
        {TRANSLATION.PARAGRAPH[1]}
      </Paragraph>
      <Paragraph>{TRANSLATION.PARAGRAPH[2]}</Paragraph>
    </MainText>
  </TwoColumnsContainer>
)

import { FC } from 'react'

import {
  Oakley as OakleyContainer,
  OakleyWrapper,
  TwoColumns,
  Brief,
  MainText,
  Paragraph,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Oakley: FC = (): JSX.Element => (
  <OakleyContainer>
    <OakleyWrapper>
      <TwoColumns>
        <Brief>{TRANSLATION.BRIEF}</Brief>
        <MainText>
          <Paragraph>{TRANSLATION.PARAGRAPH}</Paragraph>
        </MainText>
      </TwoColumns>
    </OakleyWrapper>
  </OakleyContainer>
)

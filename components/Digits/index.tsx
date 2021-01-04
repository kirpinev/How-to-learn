import { FC } from 'react'

import {
  Digits as DigitsContainer,
  DigitsWrapper,
  SectionTitle,
  SectionSubtitle,
  Table,
  Cell,
  Heading,
  TableText,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Digits: FC = (): JSX.Element => (
  <DigitsContainer>
    <DigitsWrapper>
      <SectionTitle>{TRANSLATION.SECTION_TITLE}</SectionTitle>
      <SectionSubtitle>{TRANSLATION.SECTION_SUBTITLE}</SectionSubtitle>
      <Table>
        {TRANSLATION.CELLS.map(({ heading, text, subtext }) => (
          <Cell key={heading} large>
            <Heading>{heading}</Heading>
            <TableText>{text}</TableText>
            {subtext && <TableText>{subtext}</TableText>}
          </Cell>
        ))}
      </Table>
    </DigitsWrapper>
  </DigitsContainer>
)

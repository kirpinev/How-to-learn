import { FC } from 'react'

import {
  Kaufman as KaufmanContainer,
  KaufmanWrapper,
  Triangle,
  SectionTitle,
  SectionSubtitle,
  Table,
  Cell,
  Heading,
  TableText,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Kaufman: FC = (): JSX.Element => (
  <KaufmanContainer>
    <KaufmanWrapper>
      <SectionTitle>{TRANSLATION.SECTION_TITLE}</SectionTitle>
      <SectionSubtitle>{TRANSLATION.SECTION_SUBTITLE}</SectionSubtitle>
      <Table>
        {TRANSLATION.CELLS.map(({ heading, text }) => (
          <Cell key={heading} medium>
            <Heading>{heading}</Heading>
            <TableText>{text}</TableText>
          </Cell>
        ))}
        <Triangle />
      </Table>
    </KaufmanWrapper>
  </KaufmanContainer>
)

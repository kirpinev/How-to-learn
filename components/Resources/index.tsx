import { FC } from 'react'

import {
  Resources as ResourcesContainer,
  ResourcesWrapper,
  SectionTitle,
  SectionSubtitle,
  LogoZone,
  Logo,
} from '../../uikit'
import { ArzamasLogo, NOneLogo, PolkaLogo, StrelkaLogo } from '../../Icons'

import { TRANSLATION } from './translation'

export const Resources: FC = (): JSX.Element => (
  <ResourcesContainer>
    <ResourcesWrapper>
      <SectionTitle>{TRANSLATION.SECTION_TITLE}</SectionTitle>
      <SectionSubtitle>{TRANSLATION.SECTION_SUBTITLE}</SectionSubtitle>
      <LogoZone>
        <Logo>
          <ArzamasLogo />
        </Logo>
        <Logo>
          <NOneLogo />
        </Logo>
        <Logo>
          <PolkaLogo />
        </Logo>
        <Logo>
          <StrelkaLogo />
        </Logo>
      </LogoZone>
    </ResourcesWrapper>
  </ResourcesContainer>
)

import { FC } from 'react'

import {
  Footer as FooterContainer,
  FooterWrapper,
  FooterColumns,
  FooterColumn,
  FooterAuthor,
  ColumnHeading,
  ColumnLink,
  SocialIcon,
} from '../../uikit/Footer'
import { TRANSLATION } from './translation'

import {
  MainWhiteLogo,
  FacebookWhiteLogo,
  VkWhiteLogo,
  InstagramWhiteLogo,
} from '../../Icons'

export const Footer: FC = (): JSX.Element => (
  <FooterContainer>
    <FooterWrapper>
      <FooterColumns>
        <FooterColumn copyright>
          <MainWhiteLogo />
          <FooterAuthor>{TRANSLATION.AUTHOR}</FooterAuthor>
        </FooterColumn>
        <FooterColumn>
          <ColumnHeading>{TRANSLATION.INFO.heading}</ColumnHeading>
          {TRANSLATION.INFO.links.map((text) => (
            <ColumnLink key={text} href="#">
              {text}
            </ColumnLink>
          ))}
        </FooterColumn>
        <FooterColumn>
          <ColumnHeading>{TRANSLATION.SOCIAL.heading}</ColumnHeading>
          <ColumnLink href="#">
            <SocialIcon>
              <FacebookWhiteLogo />
            </SocialIcon>
            {TRANSLATION.SOCIAL.links[0]}
          </ColumnLink>
          <ColumnLink href="#">
            <SocialIcon>
              <VkWhiteLogo />
            </SocialIcon>
            {TRANSLATION.SOCIAL.links[1]}
          </ColumnLink>
          <ColumnLink href="#">
            <SocialIcon>
              <InstagramWhiteLogo />
            </SocialIcon>
            {TRANSLATION.SOCIAL.links[2]}
          </ColumnLink>
        </FooterColumn>
      </FooterColumns>
    </FooterWrapper>
  </FooterContainer>
)

import {
  Header as HeaderContainer,
  HeaderWrapper,
  Content,
  Title,
  Subtitle,
  Link,
  SquarePic,
} from '../../uikit'
import { MainLogo } from '../../Icons'

import { TRANSLATION } from './translation'

export const Header = (): JSX.Element => (
  <HeaderContainer>
    <HeaderWrapper>
      <Content>
        <MainLogo />
        <Title>{TRANSLATION.TITLE}</Title>
        <Subtitle>
          {TRANSLATION.SUBTITLE} <Link href="#">{TRANSLATION.LINK}</Link>
        </Subtitle>
      </Content>
      <SquarePic />
    </HeaderWrapper>
  </HeaderContainer>
)

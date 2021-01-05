import {
  Header as HeaderContainer,
  HeaderWrapper,
  Content,
  Title,
  Subtitle,
  Link,
  SquarePic,
  BackgroundWrapper,
  BackgroundImage,
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
        <BackgroundWrapper>
          <BackgroundImage
            src="/two_again.png"
            alt="Картина 'Опять двойка'"
            width="765"
            height="608"
            objectFit="cover"
          />
        </BackgroundWrapper>
      </Content>
      <SquarePic />
    </HeaderWrapper>
  </HeaderContainer>
)

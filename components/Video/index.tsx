import { FC } from 'react'

import {
  Video as VideoContainer,
  Iframe,
  IframesWrapper,
  IframeContainer,
  VideoWrapper,
  SectionTitle,
  SectionSubtitle,
} from '../../uikit'

import { TRANSLATION } from './translation'

export const Video: FC = (): JSX.Element => (
  <VideoContainer>
    <VideoWrapper>
      <SectionTitle>{TRANSLATION.SECTION_TITLE}</SectionTitle>
      <SectionSubtitle>{TRANSLATION.SECTION_SUBTITLE}</SectionSubtitle>
      <IframesWrapper>
        <IframeContainer>
          <Iframe
            style={{ border: 0 }}
            width="100%"
            height="100%"
            src={TRANSLATION.LINKS[0]}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </IframeContainer>
        <IframeContainer>
          <Iframe
            style={{ border: 0 }}
            width="100%"
            height="100%"
            src={TRANSLATION.LINKS[1]}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </IframeContainer>
      </IframesWrapper>
    </VideoWrapper>
  </VideoContainer>
)

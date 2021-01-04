import { FC } from 'react'

import {
  Description as DescriptionContainer,
  DescriptionWrapper,
} from '../../uikit'
import { IProps } from './types'

export const Description: FC<IProps> = ({ children }): JSX.Element => (
  <DescriptionContainer>
    <DescriptionWrapper>{children}</DescriptionWrapper>
  </DescriptionContainer>
)

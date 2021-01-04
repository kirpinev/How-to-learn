import { FC } from 'react'

import { Main as MainContainer } from '../../uikit'
import { IProps } from './types'

export const Main: FC<IProps> = ({ children }): JSX.Element => (
  <MainContainer>{children}</MainContainer>
)

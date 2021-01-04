import { FC } from 'react'
import Head from 'next/head'

import { LayoutContainer } from '../../uikit'
import { IProps } from './types'

export const Layout: FC<IProps> = ({ title, children }): JSX.Element => (
  <LayoutContainer>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
    {children}
  </LayoutContainer>
)

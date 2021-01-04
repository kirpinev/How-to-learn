import { FC } from 'react'

import {
  Layout,
  Header,
  Main,
  Description,
  TwoColumns,
  Technics,
  Video,
  Oakley,
  Feinman,
  Digits,
  Khan,
  Kaufman,
  Resources,
  Footer,
} from '../components'

const TITLE = 'Как правильно учиться'

const App: FC = (): JSX.Element => (
  <Layout title={TITLE}>
    <Header />
    <Main>
      <Description>
        <TwoColumns />
      </Description>
      <Technics />
      <Video />
      <Oakley />
      <Feinman />
      <Digits />
      <Khan />
      <Kaufman />
      <Resources />
    </Main>
    <Footer />
  </Layout>
)

export default App

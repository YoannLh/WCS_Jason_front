import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 100vh;
`

export function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

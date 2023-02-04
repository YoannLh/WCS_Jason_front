import styled from 'styled-components'

import { Form } from '../Form/Form'
import { Results } from '../Results/Results'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 70vh;
`

export const Main = () => {
  return (
    <Container>
      <Form />
      <Results />
    </Container>
  )
}

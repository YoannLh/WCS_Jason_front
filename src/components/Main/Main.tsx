import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Form } from '../Form/Form'
import { Results } from '../Results/Results'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 70vh;
`

export const Main = () => {
  const [data, setData] = useState<string[]>()
  async function getData() {
    try {
      const req = await fetch('http://localhost:3000/api/names')
        .then((response) => response.json())
        .then((data) => setData(data))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  function listeningClickForm() {
    getData()
  }
  return (
    <Container>
      <Form listeningClickForm={listeningClickForm} />
      <Results data={data} />
    </Container>
  )
}

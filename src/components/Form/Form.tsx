import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 120px;
  margin: auto;
`

const Title = styled.h2`
  margin: auto;
`

const FormTitle = styled.p`
  margin: auto auto 0 auto;
`

const WrapperForm = styled.form`
  margin: auto;
`

const Button = styled.button`
  margin-left: 5px;
`

interface FormProps {
  listeningClickForm: () => void
}

export const Form = ({ listeningClickForm }: FormProps) => {
  const [name, setName] = useState<string>('')
  function handleChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value)
  }
  async function handleClickButton(e: React.MouseEvent) {
    e.preventDefault()
    try {
      const req = fetch('http://localhost:3000/api/names', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      })
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)))
      setName('')
    } catch (err) {
      console.log(err)
    }
    listeningClickForm()
  }
  return (
    <Container>
      <Title>Ajouter un(e) argonaute</Title>
      <FormTitle>Nom de l'argonaute</FormTitle>
      <WrapperForm>
        <input
          placeholder="Charalampos"
          value={name}
          onChange={(e) => handleChangeInput(e)}
        />
        <Button onClick={(e) => handleClickButton(e)}>Envoyer</Button>
      </WrapperForm>
    </Container>
  )
}

import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 160px;
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

const ErrorMessage = styled.p`
  text-align: center;
  margin-top: 5px;
  font-size: 0.8em;
  color: red;
`

interface FormProps {
  listeningClickForm: () => void
}

export const Form = ({ listeningClickForm }: FormProps) => {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>()
  function handleChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value)
  }
  function isValidName(name: string) {
    if (name.length < 3) {
      setError('Ce nom est trop court')
      return false
    }
    if (name.length >= 3) {
      setError('')
      return true
    }
  }
  useEffect(() => {
    if (name.length >= 3) setError('')
  }, [name])
  async function handleClickButton(e: React.MouseEvent) {
    e.preventDefault()
    if (!isValidName(name)) {
      return
    } else {
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
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </WrapperForm>
    </Container>
  )
}

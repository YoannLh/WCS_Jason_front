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

export const Form = () => {
  function handleClickButton(e: React.MouseEvent) {
    e.preventDefault()
    console.log('click')
  }
  return (
    <Container>
      <Title>Ajouter un(e) argonaute</Title>
      <FormTitle>Nom de l'argonaute</FormTitle>
      <WrapperForm>
        <input placeholder="Charalampos" />
        <Button onClick={(e) => handleClickButton(e)}>Envoyer</Button>
      </WrapperForm>
    </Container>
  )
}

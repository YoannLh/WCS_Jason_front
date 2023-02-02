import styled from 'styled-components'

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 150px;
  background: #f76c6c;
  color: white;
`

const Text = styled.p`
  margin: auto;
  font-size: 1.2em;
`

export const Footer = () => {
  return (
    <Container>
      <Text>Réalisé par Jason en Anthestérion de l'an 515 avant JC</Text>
    </Container>
  )
}

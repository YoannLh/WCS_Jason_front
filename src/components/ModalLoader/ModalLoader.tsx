import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(245, 245, 245, 0.9);
  z-index: 2;
`
const Loader = styled.div`
  margin: auto;
  color: #f76c6c;
  font-size: 1.8em;
  z-index: 3;
`

export const ModalLoader = () => {
  return (
    <Container>
      <Loader>Loading...</Loader>
    </Container>
  )
}

import { useState } from 'react'
import styled from 'styled-components'

import { ModalLoader } from '../ModalLoader/ModalLoader'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
`

const Title = styled.h2`
  margin: auto auto 20px auto;
`

const WrapperNames = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 260px;
  overflow: scroll;
  margin: auto;
  z-index: 1;
`

const Name = styled.p`
  width: 25vw;
  text-align: center;
  margin: 5px auto;
`

const names = [
  'coucou',
  'salut',
  'hello',
  'ola',
  'loulou',
  'pouet',
  'lalala',
  'coucou',
  'salut',
  'hello',
  'ola',
  'loulou',
  'pouet',
  'lalala',
  'coucou',
  'salut',
  'hello',
  'ola',
  'loulou',
  'pouet',
  'lalala',
  'coucou',
  'salut',
  'hello',
  'ola',
  'loulou',
  'pouet',
  'lalala',
  'coucou',
  'salut',
  'hello',
  'ola',
  'loulou',
  'pouet',
  'lalala',
  'coucou',
  'salut',
  'hello',
  'ola',
  'loulou',
  'pouet',
  'lalala',
]

export const Results = () => {
  const [isModalLoaderVisible, setIsModalLoaderVisible] = useState(true)
  return (
    <Container>
      <Title>Membres de l'équipage</Title>
      <WrapperNames>
        {isModalLoaderVisible ? <ModalLoader /> : null}
        {/* mapper sur la data ici => data.map */}
        {names.map((name) => (
          <Name key={name}>{name}</Name>
        ))}
      </WrapperNames>
    </Container>
  )
}

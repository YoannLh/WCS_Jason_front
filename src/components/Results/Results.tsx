import { useEffect, useState } from 'react'
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

interface ResultsProps {
  data: string[] | undefined
}

export const Results = ({ data }: ResultsProps) => {
  const [isModalLoaderVisible, setIsModalLoaderVisible] = useState(true)
  const [names, setNames] = useState<string[] | undefined>(data)
  useEffect(() => {
    setIsModalLoaderVisible(true)
    if (data === undefined) return
    setTimeout(() => setIsModalLoaderVisible(false), 1000)
    setNames(data)
  }, [data])
  return (
    <Container>
      <Title>Membres de l'équipage</Title>
      <WrapperNames>
        {isModalLoaderVisible ? <ModalLoader /> : null}
        {names ? names.map((name) => <Name key={name}>{name}</Name>) : null}
      </WrapperNames>
    </Container>
  )
}

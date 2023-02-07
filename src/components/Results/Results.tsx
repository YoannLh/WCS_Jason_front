import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ModalLoader } from '../ModalLoader/ModalLoader'
import { SailorsProps } from '../../interfaces/SailorsProps'
import { ResultsProps } from '../../interfaces/ResultsProps'

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

export const Results = ({ data }: ResultsProps) => {
  const [isModalLoaderVisible, setIsModalLoaderVisible] = useState(true)
  const [names, setNames] = useState<SailorsProps[] | undefined>()
  useEffect(() => {
    setIsModalLoaderVisible(true)
    if (data === undefined) return
    const arr = data.sailors
    setNames(arr)
    setIsModalLoaderVisible(false)
  }, [data])
  return (
    <Container>
      <Title>Membres de l'équipage</Title>
      <WrapperNames>
        {isModalLoaderVisible ? <ModalLoader /> : null}
        {names
          ? names.map((name) => <Name key={name._id}>{name.name}</Name>)
          : null}
      </WrapperNames>
    </Container>
  )
}

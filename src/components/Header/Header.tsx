import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  width: 100%;
  height: 150px;
  background: #f4f4f4;
`

const WrapperLogoAndTitle = styled.div`
  display: flex;
  margin: auto;
  align-items: baseline;
`

const Logo = styled.img`
  height: 30px;
`

const Title = styled.h1`
  margin-left: 10px;
  font-size: 2.5em;
`

export const Header = () => {
  return (
    <Container>
      <WrapperLogoAndTitle>
        <Logo
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="wild code school logo"
        />
        <Title>Les Argonautes</Title>
      </WrapperLogoAndTitle>
    </Container>
  )
}

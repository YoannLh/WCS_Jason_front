import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  width: 100%;
  height: 20vh;
  background: #f4f4f4;
`

const WrapperLogoAndTitle = styled.div`
  display: flex;
  margin: auto;
  align-items: baseline;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`

const Logo = styled.img`
  height: 30px;

  @media screen and (max-width: 450px) {
    height: 30px;
    margin: auto;
  }
`

const Title = styled.h1`
  margin-left: 10px;
  font-size: 2.5em;

  @media screen and (max-width: 450px) {
    margin: auto;
  }
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

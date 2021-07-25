import Head from 'next/head'
import styled, { keyframes } from 'styled-components'

import NavigationBar from './NavigationBar'
const Footer = styled.footer`
  width: 100%;
  height: 50px;
  max-height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: auto;
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  background-color: rgba(196, 196, 196, 0.2);
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  width: 100%;
`

const TopContainer = styled.div`
  height: 40%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const BottomContainer = styled(TopContainer)`
  background-color: transparent;
  height: 100%;
`

const thisWave = keyframes`
  0% {
    transform:translateX(0)
  }
  50% {
    transform:translateX(-50%)
  }
  100% {
    transform:translateX(0%)
  }
`

const Wave = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  /* transform: rotate(180deg); */

  svg {
    position: relative;
    display: block;
    /* width: calc(200% + 1.3px); */
    width: 400%;
    /* animation: ${thisWave} ease-in-out 5s infinite; */
    animation: ${thisWave} ease-in-out 9s infinite;
    height: 130px;
  }
  path {
    fill: white;
  }
`
export default function App({ children }) {
  return (
    <Container>
      <Head>
        <title>Amir Sigari</title>
        <meta name='description' content='Your Boy Amir' />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          // href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/waving-hand_1f44b.png'
          href='/logoF.png'
        />
      </Head>

      <Main>
        <TopContainer>
          <NavigationBar />
        </TopContainer>
        <Wave>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
          </svg>
        </Wave>
        <BottomContainer>{children}</BottomContainer>
      </Main>

      <Footer>
        <a>
          Powered by&nbsp;<b>Covfefe</b>
        </a>
      </Footer>
    </Container>
  )
}

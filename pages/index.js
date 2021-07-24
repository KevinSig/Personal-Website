import Head from 'next/head'

import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  width: 100%;
`
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(196, 196, 196, 0.2);
`

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

const TopContainer = styled.div`
  height: 38%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const BottomContainer = styled(TopContainer)`
  /* height: 100%; */

  background-color: transparent;
  height: 100%;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Amir Sigari</title>
        <meta name='description' content='Your Boy Amir' />
        <link
          rel='icon'
          href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/waving-hand_1f44b.png'
        />
      </Head>

      <Main>
        <TopContainer>amir</TopContainer>
        {/* <BottomContainer>something else</BottomContainer> */}
        <BottomContainer>amir</BottomContainer>
      </Main>

      <Footer>
        <a>
          Powered by&nbsp;<b>Covfefe</b>
        </a>
      </Footer>
    </Container>
  )
}

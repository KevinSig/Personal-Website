import Head from 'next/head'

import styled from 'styled-components'
import NavigationBar from '../components/NavigationBar'

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
  background-color: transparent;
  height: 100%;
`

export default function Home() {
  return (
    <>
      <Main>
        <TopContainer>
          <NavigationBar />
        </TopContainer>
        <BottomContainer>amir</BottomContainer>
      </Main>


    </>
  )
}

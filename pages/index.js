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
    <Main>
      <TopContainer>
        <NavigationBar />
      </TopContainer>
      <BottomContainer>amir</BottomContainer>
    </Main>
  )
}

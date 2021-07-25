import styled, { keyframes } from 'styled-components'
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

// const wave1={
//   hidden:{
//     backgroundPositionX:"0px",
//     opacity:0.6
//   },
//   visible:{
//     backgroundPositionX:"1000px",
//     zIndex: 1000,
//     opacity:0.6,
//     transition:{
//       loop:Infinity,
//       ease:"linear",
//       duration: 25,
//     }
//   }
// }

const move = keyframes`
  0% {
    transform:translateX(0)
  }

  100% {
    transform:translateX(-100%)
  }
`

const Wave = styled.div`
  width: 100%;
  /* overflow: hidden; */
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 136px;
  }
  path {
    fill: white;
  }
`

export default function Home() {
  return (
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
          <path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'></path>
        </svg>
      </Wave>
      <BottomContainer>amir</BottomContainer>
    </Main>
  )
}

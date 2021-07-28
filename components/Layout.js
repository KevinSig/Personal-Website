import Head from 'next/head'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import NavigationBar from './NavigationBar'
import HeadContainer from './HeadContainer'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  max-height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: auto;
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${props => props.theme.color}20;

  transition: background-color 0.5s ease-in-out;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
`

const TopContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96px;
`

const BottomContainer = styled(TopContainer)`
  background-color: transparent;
  height: 100%;
  overflow: hidden;
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
  position: relative;
  svg {
    position: relative;
    display: block;
    width: 500%;
    animation: ${thisWave} ease-in-out 9s infinite;
    height: 180px;
  }
  path {
    fill: white;
  }
`
const Text = styled.a`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color};
`

const HeadHolder = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 88px;
  left: 50%;
  margin-left: -55px;
`

export default function App({
  children,
  toggleTheme,
  colorTheme,
  setColorTheme,
  colors,
}) {
  return (
    <Wrapper>
      <Head>
        <title>Amir Sigari</title>
        <meta name='description' content='Your Boy Amir' />
        <link rel='icon' type='image/png' sizes='16x16' href='/another.svg' />
        <link
          href='https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Magra&display=swap'
          rel='stylesheet'
        ></link>

        <link
          href='https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Carter+One&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Helvetica&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Mplus+1p+Bold&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Anton&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Pattaya&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Titan+One&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Wire+One&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Grenze+Gotisch&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Amiri&display=swap'
          rel='stylesheet'
        ></link>
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
        <HeadHolder>
          <HeadContainer toggleTheme={toggleTheme} />
        </HeadHolder>

        <AnimatePresence>
          <BottomContainer>
            {React.cloneElement(children, {
              colorTheme: colorTheme,
              setColorTheme: setColorTheme,
              colors: colors,
            })}
          </BottomContainer>
        </AnimatePresence>
        <Footer>
          <Link href='https://en.wikipedia.org/wiki/Covfefe'>
            <a style={{ fontSize: '12px' }}>
              Powered by&nbsp;<Text>Covfefe</Text>
            </a>
          </Link>
        </Footer>
      </Main>
    </Wrapper>
  )
}

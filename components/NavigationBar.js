import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Container = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 33%;
  padding-top: 32px;
`

const Text = styled.a`
  font-family: ${props => props.theme.font};
  text-align: center;

  user-select: none;
  margin: 0px 16px;
  :hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    opacity: 0.6;
  }
`
const Underline = styled(Text)`
  line-height: 36px;
  letter-spacing: 0.1em;
  position: relative;
  border: 2px solid transparent;
  display: inline-block;
  :after {
    width: 0%;
    height: 2px;
    display: block;
    background-color: ${props => props.theme.color};
    content: ' ';
    position: absolute;
    top: 34px;
    left: 50%;
    -webkit-transition: left 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      width 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: left 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      width 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  :hover {
    :after {
      width: 100%;
      height: 2px;
      display: block;
      background-color: ${props => props.theme.color};
      content: ' ';
      position: absolute;
      top: 34px;
      left: 0;
    }
  }
`

const Logo = styled.div`
  user-select: none;
  width: 81px;
  height: 31px;
  font-style: italic;
  background-color: ${props => props.theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: 'East Sea Dokdo', cursive; */
  font-family: ${props => props.theme.font};
  font-size: 24px;
  color: white;
  border-radius: 60px 30px 60px 30px;
  transition: all 0.3s ease-in-out;
`
const LogoContainer = styled.a`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    ${Logo} {
      transition: all 0.3s ease-in-out;
      opacity: 0.8;
    }
  }
`

function NavigationBar() {
  return (
    <Container>
      <Link href='/'>
        <LogoContainer>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Logo>Amir</Logo>
          </motion.div>
        </LogoContainer>
      </Link>
      <Link href='/about'>
        <Underline style={{ width: '59px' }}>About</Underline>
      </Link>
      <Link href='/blog'>
        <Underline style={{ width: '51px' }}>Blog</Underline>
      </Link>
      <Link href='/goodies'>
        <Underline style={{ width: '89px' }}>Gooodies</Underline>
      </Link>
    </Container>
  )
}

export default NavigationBar

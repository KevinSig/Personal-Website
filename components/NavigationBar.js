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

const Path = styled.path`
  fill: ${props => props.theme.logo};
  transition: fill 0.5s ease-in-out;
`

const LogoContainer = styled.a`
  margin-right: 16px;
  :hover {
    cursor: pointer;
    ${Path} {
      transition: opacity 0.3s ease-in-out;
      opacity: 0.8;
    }
  }
`

const Text = styled.a`
  font-family: ${props => props.theme.fontFamily};
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
    background-color: #ed1c24;
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
      background-color: #ed1c24;
      content: ' ';
      position: absolute;
      top: 34px;
      left: 0;
    }
  }
`

function NavigationBar() {
  return (
    <Container>
      <motion.div whileTap={{ scale: 0.9 }}>
        <Link href='/'>
          <LogoContainer>
            <svg
              width='81'
              height='31'
              viewBox='0 0 81 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <Path
                d='M0 20.6667C0 9.25278 9.25278 0 20.6667 0H70.6667C76.3736 0 81 4.62639 81 10.3333V10.3333C81 21.7472 71.7472 31 60.3333 31H10.3333C4.62639 31 0 26.3736 0 20.6667V20.6667Z'
                fill='#232629'
              />
              <path
                d='M20.4336 16.9727H24.8164L24.1016 10.1758L20.4336 16.9727ZM22.9414 6.22656H27.0195L29.4688 23.5H25.5547L25.1914 19.9492H18.8281L16.8828 23.5H13.1094L22.9414 6.22656ZM51.5291 11.9219C51.7869 12.3672 51.9119 12.9141 51.9041 13.5625C51.8884 13.9922 51.7947 14.6211 51.6228 15.4492L49.8884 23.5H46.4666L48.1892 15.3672C48.2908 14.8828 48.2986 14.4844 48.2127 14.1719C48.0408 13.5781 47.5564 13.2812 46.7595 13.2812C45.8377 13.2812 45.1189 13.6641 44.6033 14.4297C44.3377 14.8359 44.1423 15.3242 44.0173 15.8945L42.4119 23.5H39.0486L40.6541 15.8945C40.8181 15.1367 40.8572 14.5859 40.7712 14.2422C40.6228 13.625 40.1384 13.3164 39.3181 13.3164C38.365 13.3164 37.658 13.625 37.197 14.2422C36.947 14.5938 36.7478 15.1172 36.5994 15.8125L34.9705 23.5H31.5837L34.2908 10.75H37.5369L37.1384 12.6133C37.6931 11.9492 38.1853 11.4766 38.615 11.1953C39.365 10.6953 40.2556 10.4453 41.2869 10.4453C42.2634 10.4453 43.0095 10.6602 43.5252 11.0898C43.9236 11.4883 44.1814 12 44.2986 12.625C44.8923 11.875 45.5525 11.3242 46.2791 10.9727C47.0369 10.6211 47.8377 10.4453 48.6814 10.4453C49.2439 10.4453 49.7752 10.5547 50.2752 10.7734C50.7752 10.9922 51.1931 11.375 51.5291 11.9219ZM59.7027 9.20312H56.3159L56.9722 6.12109H60.3589L59.7027 9.20312ZM55.9878 10.7266H59.3745L56.6675 23.5H53.2808L55.9878 10.7266ZM70.302 10.4453L69.5755 13.8672C69.3723 13.8438 69.1888 13.8281 69.0247 13.8203C68.8606 13.8125 68.7278 13.8086 68.6263 13.8086C67.2825 13.8086 66.2864 14.2461 65.638 15.1211C65.2786 15.6133 64.9895 16.3711 64.7708 17.3945L63.4817 23.5H60.1184L62.8255 10.7266H66.013L65.5442 12.9531C66.2395 12.1016 66.8098 11.5195 67.2552 11.207C67.9973 10.6836 68.8684 10.4219 69.8684 10.4219C69.9309 10.4219 69.9817 10.4258 70.0208 10.4336C70.0677 10.4336 70.1614 10.4375 70.302 10.4453Z'
                fill='white'
              />
            </svg>
          </LogoContainer>
        </Link>
      </motion.div>
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

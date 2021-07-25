import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/logo.svg'
const Container = styled.div`
  /* background-color: #ed1c24; */
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 33%;
`

function NavigationBar() {
  return (
    <Container>
      <Link href='/blog'>
        <a>

        <Image src={logo} />
        </a>
      </Link>
      <a>About</a>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <a>Gooodies</a>
    </Container>
  )
}

export default NavigationBar

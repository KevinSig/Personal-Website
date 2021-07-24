import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  background-color: red;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 33%;
  
`

function NavigationBar() {
  return (
    <Container>
      <a>About</a>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <a>Gooodies</a>
    </Container>
  )
}

export default NavigationBar

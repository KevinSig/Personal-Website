import React from 'react'
import styled from 'styled-components'

import Image from 'next/image'
import Head from '../public/headshot.png'

const Box = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  display: flex;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  :hover {
    cursor: pointer;
  }

  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  :after {
    content: '';
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  :hover {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.25, 1.25);
    :after {
      opacity: 1;
    }
  }
`

const InnerCircle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

function HeadContainer({ toggleTheme }) {
  return (
    <Box onClick={toggleTheme}>
      <InnerCircle>
        <Image width='100px' height='100px' src={Head} />
      </InnerCircle>
    </Box>
  )
}

export default HeadContainer

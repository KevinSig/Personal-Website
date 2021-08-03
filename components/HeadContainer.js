import React from 'react'
import styled from 'styled-components'

import Image from 'next/image'
import Head from '../public/headshot.png'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  display: flex;

  width: 90px;
  height: 90px;
  border-radius: 50%;
  /* background-color: #fff; */
  background-color: ${props => props.theme.color};
  align-items: center;
  justify-content: center;
  user-select: none;
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
    //z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
  height: 80px;
  width: 80px;
  border-radius: 50%;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
}

function HeadContainer({ setColorTheme, colors }) {
  const themeRandomizer = () => {
    let number = Math.floor(Math.random() * colors.length)
    setColorTheme(number)
  }

  return (
    <Box
      onClick={() => themeRandomizer()}
      whileTap={{ scale: 0.5 }}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <InnerCircle>
        <Image width='100px' height='100px' src={Head} />
      </InnerCircle>
    </Box>
  )
}

export default HeadContainer

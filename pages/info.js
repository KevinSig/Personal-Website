import { Wrapper, TitleContainer, Title, ToolTip } from '../components'

import { useState, useRef } from 'react'
import styled from 'styled-components'
import { Code, GitHub, Linkedin, Facebook, Mail, Copy } from 'react-feather'

import { motion } from 'framer-motion'

const title = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const body = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5,
    },
  },
}

const itemA = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const LinkButton = ({ children, icon, link, onClick }) => (
  <motion.a href={link || null} target='_blank' rel='noopener noreferrer'>
    <Button
      onClick={onClick}
      whileHover={{ scale: 1.1, opacity: 0.8 }}
      whileTap={{ scale: 0.95 }}
      variants={itemA}
    >
      <div style={{ color: 'white', width: '24px' }}>{icon}</div>
      <InnerButton> {children}</InnerButton>
    </Button>
  </motion.a>
)

function Info() {
  const [showEmail, setShowEmail] = useState(false)

  return (
    <Wrapper key={123}>
      <TitleContainer variants={title} initial='hidden' animate='visible'>
        <Title>Hit Me Up!</Title>
      </TitleContainer>
      <motion.div variants={body} initial='hidden' animate='show'>
        <LinkButton
          icon={<Mail />}
          onClick={() => setShowEmail(true)}
          variants={itemA}
        >
          {showEmail ? (
            <EmailButton
              onClick={() =>
                navigator.clipboard.writeText('asigari0711@gmail.com')
              }
            >
              <span>asigari0711@gmail.com</span>
              <Copy style={{ marginLeft: '8px', width: '16px' }} />
              <ToolTip>Click to Copy</ToolTip>
            </EmailButton>
          ) : (
            'Email'
          )}
        </LinkButton>
        <LinkButton link='https://github.com/KevinSig' icon={<GitHub />}>
          GitHub
        </LinkButton>
        <LinkButton
          link='https://www.linkedin.com/in/amir-sigari-14004487/ '
          icon={<Linkedin />}
        >
          LinkedIn
        </LinkButton>
        <LinkButton
          link='https://www.facebook.com/kevinsgari/'
          icon={<Facebook />}
        >
          Facebook
        </LinkButton>
        <LinkButton
          link='https://github.com/KevinSig/Personal-Website'
          icon={<Code />}
        >
          Source Code
        </LinkButton>
      </motion.div>
    </Wrapper>
  )
}

export default Info

const InnerButton = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  /* margin-left: 24px; */
  margin-right: 24px;
`

const Button = styled(motion.div)`
  user-select: none;
  width: 240px;
  height: 48px;
  background-color: ${props => props.theme.color};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 16px;
  margin-bottom: 12px;
  position: relative;
  :hover {
    ${ToolTip} {
      visibility: visible;
    }
  }
`

const EmailButton = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
`

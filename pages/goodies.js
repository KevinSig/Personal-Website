import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
  Wrapper,
  TitleContainer,
  Title,
  Logo,
  LogoContainer,
  Grid,
} from '../components'

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
      staggerChildren: 0.09,
      delayChildren: 1.5,
    },
  },
}

const itemA = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

function Home({ setColorTheme, colors }) {
  return (
    <Wrapper key={123}>
      <TitleContainer variants={title} initial='hidden' animate='visible'>
        {/* <Title>{title}</Title> */}
        <Title>Logo Styles</Title>
      </TitleContainer>
      <motion.span
        style={{ padding: '8px' }}
        variants={title}
        initial='hidden'
        animate='visible'
      >
        (Select One)
      </motion.span>
      <Grid variants={body} initial='hidden' animate='show'>
        {colors.map(theme => (
          <LogoContainer
            variants={itemA}
            key={theme.id}
            onClick={() => setColorTheme(theme.id)}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo color={theme.color} font={theme.font}>
              Amir
            </Logo>
          </LogoContainer>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home

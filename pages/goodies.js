import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { motion } from 'framer-motion'
import styled from 'styled-components'




const Wrapper = styled(motion.div)`
  width: 50%;
  min-width: 400px;
  height: 100%;
`

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const Title = styled(motion.h1)`
  color: ${props => props.theme.logo};
  transition: all 0.5s ease-in-out;
  font-family: ${props => props.theme.fontFamily};
`

const container = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}
const animateBody = {
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, //porcess is from the vs code itself
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'goodiesPage' })
  return {
    props: {
      goodiesPage: res.items,
    },
    revalidate: 1,
  }
}

function Home({ goodiesPage }) {
  const { body, title } = goodiesPage[0].fields



  
    
  return (
    <Wrapper key={123}>
      <TitleContainer
        variants={container}
        initial='hidden'
        animate='visible'
        
      >
        <Title>{title}</Title>
      </TitleContainer>
      <motion.div variants={animateBody} initial='hidden' animate='visible'>
        {documentToReactComponents(body)}
      </motion.div>
    </Wrapper>
  )
}

export default Home

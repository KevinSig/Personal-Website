import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Title, TitleContainer } from '../components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: 50%;
  min-width: 400px;
  align-items: center;
  position: relative;
  overflow-y: scroll;
  background-color: transparent;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  margin: 0px;
  padding: 0px;
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
  const res = await client.getEntries({ content_type: 'aboutMe' })
  return {
    props: {
      aboutMe: res.items,
    },
    revalidate: 1,
  }
}

function Home({ aboutMe }) {
  const { body, title } = aboutMe[0].fields

  return (
    <Wrapper>
      <Container key={123}>
        <TitleContainer variants={container} initial='hidden' animate='visible'>
          <Title>{title}</Title>
        </TitleContainer>
        <motion.div variants={animateBody} initial='hidden' animate='visible'>
          {documentToReactComponents(body)}
        </motion.div>
      </Container>
    </Wrapper>
  )
}

export default Home

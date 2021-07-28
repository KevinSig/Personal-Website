import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Test = styled.div`
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
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;

  margin: 0px;
  padding: 0px;
`

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const Title = styled(motion.h1)`
  color: ${props => props.theme.color};
  transition: all 0.5s ease-in-out;
  font-family: ${props => props.theme.font};
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
    <Test>
      <Wrapper key={123}>
        <TitleContainer variants={container} initial='hidden' animate='visible'>
          <Title>{title}</Title>
        </TitleContainer>
        <motion.div variants={animateBody} initial='hidden' animate='visible'>
          {documentToReactComponents(body)}
        </motion.div>
      </Wrapper>
    </Test>
  )
}

export default Home

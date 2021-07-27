import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50%;
  min-width: 400px;
  height: 100%;
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const Title = styled.h1`
  color: ${props => props.theme.logo};
  transition: all 0.5s ease-in-out;
  font-family: ${props => props.theme.fontFamily};
`

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, //porcess is from the vs code itself
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'aboutPage' })
  return {
    props: {
      aboutPage: res.items,
    },
    revalidate: 1,
  }
}

function Home({ aboutPage }) {
  const { body, title } = aboutPage[0].fields

  return (
    <Wrapper key={123}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <div>{documentToReactComponents(body)}</div>
    </Wrapper>
  )
}

export default Home

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

const Path = styled.path`
  transition: fill 0.5s ease-in-out;
`

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    ${Path} {
      transition: opacity 0.3s ease-in-out;
      opacity: 0.8;
      fill: black;
    }
  }
`

const Grid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  color: #444;
`

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID, //porcess is from the vs code itself
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   })
//   const res = await client.getEntries({ content_type: 'goodiesPage' })
//   return {
//     props: {
//       goodiesPage: res.items,
//     },
//     revalidate: 1,
//   }
// }

const Logo = styled.div`
  width: 81px;
  height: 31px;

  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: 'East Sea Dokdo', cursive; */
  font-family: ${props => props.font};
  font-size: 24px;
  color: white;
  font-style: italic;
  border-radius: 60px 30px 60px 30px;
  transition: all 0.3s ease-in-out;
  user-select: none;
`
const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  :hover {
    cursor: pointer;
    ${Logo} {
      transition: all 0.3s ease-in-out;
      opacity: 0.8;
      background-color: black;
    }
  }
`
function Home({ goodiesPage, colorTheme, setColorTheme, colors }) {
  // console.log(colorTheme.font)

  // console.log(colorTheme.color)

  // const testColors = [
  //   '#F45B69',
  //   '#EAD637',
  //   '#2D728F',
  //   '#6E7E85',
  //   '#114B5F',
  //   '#FF4F79',
  //   '#F35B04',
  //   '#0081AF',
  //   '#B10F2E',
  //   '#3B8EA5',
  //   '#886176 ',
  //   '#A2D729 ',
  //   '#94D1BE ',
  //   '#FF595E ',
  //   '#E952DE ',
  //   '#ED1C24 ',
  //   '#F08080 ',
  //   '#D62839 ',
  //   '#F21B3F ',
  //   '#96E8BC ',
  //   '#4ECDC4 ',
  //   '#DE6449 ',
  //   '#407899 ',
  //   '#70CAD1',
  // ]

  return (
    <Wrapper key={123}>
      <TitleContainer variants={container} initial='hidden' animate='visible'>
        {/* <Title>{title}</Title> */}
        <Title>Logo Styles</Title>
      </TitleContainer>
      <Grid>
        {colors.map(theme => (
          <Container key={theme.id} onClick={() => setColorTheme(theme.id)}>
            <Logo color={theme.color} font={theme.font}>
              Amir
            </Logo>
          </Container>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home

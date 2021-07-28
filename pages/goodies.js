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
  border-radius: 60px 30px 60px 30px;
  transition: all 0.3s ease-in-out;
`
const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    ${Logo} {
      transition: all 0.3s ease-in-out;
      opacity: 0.8;
      background-color: black;
    }
  }
`
function Home({ goodiesPage }) {
  // const { body, title } = goodiesPage[0].fields

  const colors = [
    { id: 1, color: '#F45B69', font: 'East Sea Dokdo' },
    { id: 2, color: '#EAD637', font: 'Magra' },
    { id: 3, color: '#2D728F', font: 'Pacifico' },
    { id: 4, color: '#6E7E85', font: 'PT Sans Caption' },
    { id: 5, color: '#114B5F', font: 'Raleway' },
    { id: 6, color: '#FF4F79', font: 'Montserrat' },
    { id: 7, color: '#F35B04', font: 'Caveat' },
    { id: 8, color: '#0081AF', font: 'Architects Daughter' },
    { id: 9, color: '#B10F2E', font: 'Roboto' },
    { id: 10, color: '#3B8EA5', font: 'Kaushan Script' },
    { id: 11, color: '#886176', font: 'Carter One' },
    { id: 12, color: '#A2D729', font: 'Gloria Hallelujah' },
    { id: 13, color: '#94D1BE', font: 'ZCOOL KuaiLe' },
    { id: 14, color: '#FF595E', font: 'Staatliches' },
    { id: 15, color: '#407899', font: 'Amiri' },
    { id: 16, color: '#ED1C24', font: 'Mplus 1p Bold' },
    { id: 17, color: '#F08080', font: 'Press Start 2P' },
    { id: 18, color: '#D62839', font: 'Anton' },
    { id: 19, color: '#F21B3F', font: 'Fira Code' },
    { id: 20, color: '#96E8BC', font: 'Pattaya' },
    { id: 21, color: '#4ECDC4', font: 'Titan One' },
    { id: 22, color: '#DE6449', font: 'Wire One' },
    { id: 23, color: '#ED1C24', font: 'Permanent Marker' },
    { id: 24, color: '#70CAD1', font: 'Grenze Gotisch' },
  ]

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
        {colors.map(style => (
          <Container>
            <Logo key={style.id} color={style.color} font={style.font}>
              Amir
            </Logo>
          </Container>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home

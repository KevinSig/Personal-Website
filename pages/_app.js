import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}
const Footer = styled.footer`
  width: 100%;
  height: 50px;
  max-height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: auto;
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  background-color: rgba(196, 196, 196, 0.2);
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Amir Sigari</title>
            <meta name='description' content='Your Boy Amir' />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              // href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/waving-hand_1f44b.png'
              href='/logoF.png'
            />
          </Head>

          <Component {...pageProps} />
        </ThemeProvider>
        <Footer>
          <a>
            Powered by&nbsp;<b>Covfefe</b>
          </a>
        </Footer>
      </Container>
    </>
  )
}

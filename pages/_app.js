import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Layout from '../components/Layout'

import { useState, useEffect } from 'react'

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

const darkTheme = {
  backgroundColor: 'rgba(196, 196, 196, 0.2)',
  logo: '#232629',
}

const lightTheme = {
  backgroundColor: 'rgba(237, 28, 36, 0.05)',
  logo: '#ED1C24',
  fontFamily: 'Permanent Marker',
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  const [time, setTime] = useState(0)
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1)
      let number = Math.floor(Math.random() * 100 + 1)
      if (number === 5) {
        toggleTheme()
      }
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [time])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <Layout toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

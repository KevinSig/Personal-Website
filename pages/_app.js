import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "./_app.css";
import Layout from '../components/Layout'

import { useState, useEffect } from 'react'

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color:#31363C;
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

const colors = [
  { id: 0, color: '#F45B69', font: 'East Sea Dokdo' },
  { id: 1, color: '#EAD637', font: 'Magra' },
  { id: 2, color: '#2D728F', font: 'Pacifico' },
  { id: 3, color: '#6E7E85', font: 'PT Sans Caption' },
  { id: 4, color: '#114B5F', font: 'Raleway' },
  { id: 5, color: '#FF4F79', font: 'Montserrat' },
  { id: 6, color: '#F35B04', font: 'Caveat' },
  { id: 7, color: '#0081AF', font: 'Architects Daughter' },
  { id: 8, color: '#B10F2E', font: 'Roboto' },
  { id: 9, color: '#3B8EA5', font: 'Kaushan Script' },
  { id: 10, color: '#886176', font: 'Carter One' },
  { id: 11, color: '#A2D729', font: 'Gloria Hallelujah' },
  { id: 12, color: '#94D1BE', font: 'ZCOOL KuaiLe' },
  { id: 13, color: '#FF595E', font: 'Staatliches' },
  { id: 14, color: '#407899', font: 'Amiri' },
  { id: 15, color: '#ED1C24', font: 'Ubuntu' },
  { id: 16, color: '#F08080', font: 'Press Start 2P' },
  { id: 17, color: '#D62839', font: 'Anton' },
  { id: 18, color: '#F21B3F', font: 'Fira Code' },
  { id: 19, color: '#96E8BC', font: 'Pattaya' },
  { id: 20, color: '#4ECDC4', font: 'Titan One', comp:"##68b4af" },
  { id: 21, color: '#DE6449', font: 'Wire One' },
  { id: 22, color: '#ED1C24', font: 'Permanent Marker' },
  { id: 23, color: '#70CAD1', font: 'Grenze Gotisch' },
]

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(20)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors[colorTheme]}>
        <Layout
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
          colors={colors}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

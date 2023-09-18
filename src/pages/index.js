import * as React from "react"
import '../components/0-theme/global.css'

import LinkTree from '../components/3-sections/LinkTree'
import SearchEngine from "../components/0-theme/SEO/SearchEngine"

const pageStyles = {
  color: "#f2d948",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const IndexPage = () => {
  return (
    <>
      <SearchEngine title="Under Construction | Bad Bubble Music" />
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Bad Bubble Music
          <br />
          <span style={headingAccentStyles}>Under Construction</span>
        </h1>
        <LinkTree /> 
      </main>
    </>
  )
}

export default IndexPage
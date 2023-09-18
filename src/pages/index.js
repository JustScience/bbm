import * as React from "react"
import '../components/0-theme/global.css'

import Layout from '../components/5-layout/Layout'
import LinkTree from '../components/3-sections/LinkTree'
import SearchEngine from "../components/0-theme/SEO/SearchEngine"

const headingStyles = {
  color: "#f2d948",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  marginTop: 90,
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: 540,
  textAlign: "center",
}
const headingAccentStyles = {
  color: "#663399",
}
const IndexPage = () => {
  return (
    <>
      <SearchEngine title="Under Construction | Bad Bubble Music" />
      <Layout>
        <h1 style={headingStyles}>
          Bad Bubble Music
          <br />
          <span style={headingAccentStyles}>Under Construction</span>
        </h1>
        <LinkTree /> 
      </Layout>
    </>
  )
}

export default IndexPage
import * as React from "react"
import '../components/0-theme/global.css'
import icon from '../images/bad-bubble-icon.svg'

import Layout from '../components/5-layout/Layout'
import LinkTree from '../components/3-sections/LinkTree'
import SearchEngine from "../components/0-theme/SEO/SearchEngine"

const headingStyles = {
  color: "#f2d948",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  marginTop: 12,
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: 540,
  textAlign: "center",
}
const headingAccentStyles = {
  color: "#663399",
}
const heroLogo = {
  marginTop: 90,
  maxHeight: 180,
  textAlign: "center",
}

const IndexPage = () => {
  return (
    <>
      <SearchEngine title="UNDER CONSTRUCTION" />
      <Layout>
        <div style={{marginLeft:"auto", marginRight:"auto", maxWidth: 180}}>
          <img style={heroLogo} src={icon} alt="Bad Bubble BB Icon" />
        </div>
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
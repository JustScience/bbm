import * as React from "react"

import Layout from '../components/5-layout/Layout'
import Section from '../components/1-elements/Section'
import SearchEngine from "../components/0-theme/SEO/SearchEngine"
import Hero from '../components/3-sections/Hero'

// markup
const IndexPage = () => {
  return (
    <>
      <SearchEngine />
      <Layout crumbLabel="Home" >
        <Hero imageName="hero-bg.jpg" />
        <Section>
          <h1>Bad Bubble</h1>
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage

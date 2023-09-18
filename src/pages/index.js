import * as React from "react"
import { Link, graphql } from 'gatsby'

import '../components/0-theme/global.css'

import Layout from '../components/5-layout/Layout'
import Hero from '../components/3-sections/Hero'
import Gallery from '../components/3-sections/Gallery'
import ProductCard from '../components/2-blocks/ProductCard'
import SearchEngine from "../components/0-theme/SEO/SearchEngine"


export default function IndexPage({data, location}) {
  const products = data.allShopifyProduct.nodes

  return (
    <>
      <SearchEngine title="Indie Synthpop Music | Bad Bubble" />
      <Layout location={location} crumbLabel="Social Links" >
        <Hero />
        <Gallery>
          {products.map(product => (
            <ProductCard>
              <Link to={product.onlineStoreUrl}>
                <img height="240px" src={product.featuredMedia.preview.image.src} />
                <br />
                {product.title}
              </Link>
            </ProductCard>
          ))}
        </Gallery>
      </Layout>
    </>
  )
}

export const query = graphql`
query MyQuery {
  allShopifyProduct {
    nodes {
      title
      onlineStoreUrl
      featuredMedia {
        preview {
          image {
            src
          }
        }
      }
    }
  }
}`;

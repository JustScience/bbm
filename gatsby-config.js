/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Bad Bubble Music",
    titleTemplate: ' | Bad Bubble Music',
    description: "Bad Bubble Music.",
    keywords: "Bad Bubble Music",
    copyright: "Copyright 2022, Bad Bubble Publishing, LLC. All rights reserved.",
    author: "J Galenti",
    contact: "BadBubbleMusic@gmail.com",
    siteUrl: "https://badbubblemusic.com", // No trailing slash allowed!
    twitter: "@badbubblemusic",
  },
  plugins: [{
    resolve: 'gatsby-source-shopify',
    options: {
      shopName: process.env.GATSBY_SHOPIFY_STORE_NAME,
      storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      password: process.env.GATSBY_SHOPIFY_SHOP_PASSWORD,
      accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      downloadImages: true
  }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
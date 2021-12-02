require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: CLOUD_SITE_URL = 'https://badbubblemusic.com',
  DEPLOY_PRIME_URL: CLOUD_DEPLOY_URL = CLOUD_SITE_URL,
  CONTEXT: CLOUD_ENV = NODE_ENV
} = process.env;

const isCloudProduction = CLOUD_ENV === 'production';
const siteUrl = isCloudProduction ? CLOUD_SITE_URL : CLOUD_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: "Bad Bubble Music",
    titleTemplate: ' | Bad Bubble Music',
    description: "Bad Bubble Music.",
    keywords: "Bad Bubble Music",
    copyright: "Copyright 2021, Bad Bubble Music, LLC. All rights reserved.",
    author: "J Galenti",
    contact: "BadBubbleMusic@gmail.com",
    siteUrl: "https://badbubblemusic.com", // No trailing slash allowed!
    twitter: "@badbubblemusic",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: process.env.SHOPIFY_STORE_URL,
        // shopName: process.env.GATSBY_SHOPIFY_STORE_NAME,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        // accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-optional-chaining",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `./src/pages/shop/`,
      },
    },
  ],
};

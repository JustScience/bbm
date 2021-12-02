const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query Pages {
            allShopifyProduct {
                edges {
                    node {
                        shopifyId
                        handle
                    }
                }
            }
        }
    `)

    data.allShopifyProduct.edges.forEach(({node}) => {
        actions.createPage({
            path: '/shop/' + node.handle,
            component: path.resolve('src/templates/shopify-product-template.js'),
            context: {shopifyId: node.shopifyId,}
        })
    })

    // data.allYoutubeVideo.edges.forEach(({node}) => {
    //     actions.createPage({
    //         path: '/video/' + node.videoId,
    //         component: path.resolve('src/templates/youtube-video-template.js'),
    //         context: {id: node.id,}
    //     })
    // })

    // data.allAirtable.edges.forEach(({node}) => {
    //     actions.createPage({
    //         path: `/gear/${encodeURIComponent(node.data.Task.replace(/\s+/g, '-').toLowerCase())}/${encodeURIComponent(node.data.Type.replace(/\s+/g, '-').toLowerCase())}/${encodeURIComponent(node.data.Name.replace(/\s+/g, '-').toLowerCase())}-${encodeURIComponent(node.data.Brand.replace(/\s+/g, '-').toLowerCase())}`,
    //         component: path.resolve('src/templates/affiliate-page-template.js'),
    //         context: {id: node.id,}
    //     })
    // })
}
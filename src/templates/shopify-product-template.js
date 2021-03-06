/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import { graphql, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import CartContext from '../context/CartContext'
import SearchEngine from '../components/0-theme/SEO/SearchEngine'

import Layout from '../components/5-layout/Layout'
import Contain from '../components/1-elements/Contain'
// import AudioPreview from '../components/2-blocks/AudioPreview';
import ProductPage from '../components/4-pages/ProductPage'
import ProductImageGallery from './product-image-gallery'
import ProductQuantityAdder from '../components/3-sections/Cart/ProductQuantityAdder'
import { 
    ProductInfo, 
    ProductTitle, 
    // ProductSubTitle,
    ProductDescription, 
    // ProductStats, 
    // ProductStat, 
    ProductPrice, 
    ProductPurchaseWrap,
    ProductPurchase } from '../components/4-pages/ProductPage/style'

// import 'react-h5-audio-player/lib/styles.css'

export const query = graphql`
    query ProductQuery($shopifyId: String) {
        product: shopifyProduct(shopifyId: {eq: $shopifyId}) {
            storefrontId
            shopifyId
            handle
            title
            description
            images {
                id
                src
                gatsbyImageData(height: 360, width: 360)
            }
            priceRangeV2 {
                minVariantPrice {
                    amount
                }
            }
        }
        # productInfo: airtable(
        #     table: {eq: "Shop"}, data: {ShopifyProductID: {eq: $shopifyId}}
        # ) {
        #     data {
        #         Tagline
        #         Genre
        #         SubGenre
        #         Mood
        #         ProductType
        #         Preview {
        #             url
        #         }
        #     }
        # }
    }
`;

export default function ShopifyProduct({data, location}) {
    const { title, description, storefrontId } = data.product
    // const { Tagline, Genre, SubGenre, Mood, Preview, ProductType } = data.productInfo.data
    // const Audio = Preview[0].url
    const images = data.product.images

    // console.log(Preview)

    const {getProductById} = React.useContext(CartContext)
    const [product, setProduct] = React.useState(null)
    const [selectedVariant, setSelectedVariant] = React.useState(null)
    const {search, origin, pathname} = useLocation()
    const variantId = queryString.parse(search).variant

    React.useEffect(() => {
        getProductById(storefrontId).then((result) => {
            setProduct(result)
            setSelectedVariant(result.variants.find(({id}) => id === variantId) || result.variants[0] )
        })
    },[getProductById, storefrontId, setProduct, variantId])

    const handleVariantChange = (e) => {
        const newVariant = product?.variants.find(v => v.id === e.target.value)
        setSelectedVariant(newVariant)
        navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,{
            replace: true
        })
    }


    return (
        <>
            <SearchEngine 
                title={data.product.title}
                description={data.product.description}
                image={data.product.images[0]}
            />
            <Layout location={location} crumbLabel={data.product.title} >
                <Contain>
                    <ProductPage>
                        <ProductImageGallery 
                            selectedVariantImageId={selectedVariant?.image.id} 
                            images={images} 
                        />
                        <ProductInfo>
                            {/* <button onClick={() => navigate(-1)}>BACK</button> */}
                            <ProductTitle>{title}</ProductTitle>
                            {/* <ProductSubTitle>{Tagline}</ProductSubTitle>
                            <ProductStats>
                                <ProductStat>{Mood}</ProductStat>
                                <ProductStat>{SubGenre}</ProductStat>
                                <ProductStat>{Genre}</ProductStat>
                                <ProductStat>{ProductType}</ProductStat>
                            </ProductStats> */}
                            <ProductDescription>{description}</ProductDescription>
                            {/* <p>{storefrontId}</p> */}
                            {/* <p>{shopifyId}</p> */}
                            <ProductPurchaseWrap>
                                {/* <AudioPreview 
                                    autoPlay={false}
                                    src={Audio}
                                    layout='horizontal-reverse'
                                    // onPlay={e => console.log("onPlay")}
                                    customAdditionalControls={[]}
                                    // other props here
                                /> */}
                                {product?.availableForSale && !!selectedVariant && (
                                    <ProductPurchase>
                                        {product?.variants.length > 1 &&
                                            <select value={selectedVariant.id} onChange={handleVariantChange}>
                                                File Types: 
                                                {product?.variants.map(v => (
                                                    <option 
                                                        key={v.id}
                                                        value={v.id}
                                                    >
                                                        {v.title}
                                                    </option>
                                                ))}
                                            </select>
                                        }
                                        {!!selectedVariant && 
                                            <>
                                                <ProductPrice><span>$</span>{selectedVariant.price}</ProductPrice>
                                                <ProductQuantityAdder 
                                                    available={selectedVariant.available}
                                                    variantId={selectedVariant.id} 
                                                    shopifyId={selectedVariant.shopifyId}
                                                />
                                            </>
                                        }
                                    </ProductPurchase>
                                )}
                            </ProductPurchaseWrap>
                        </ProductInfo>
                    </ProductPage>
                </Contain>
            </Layout>
        </>
    )
}

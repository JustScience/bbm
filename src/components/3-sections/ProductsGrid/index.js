import React from 'react'
import Card from '../../1-elements/Card'
import Gallery from '../Gallery'

export default function ProductsGrid({products}) {
    
    return (
        <Gallery product='true'>
            {products.map(product => {
                return(
                    <Card 
                        to={product.handle} 
                        image={product.images[0]}
                        title={product.title}
                        description={product.description}
                        footer={'$ ' + parseFloat(product.priceRangeV2.minVariantPrice.amount).toFixed(2)}
                        key={product.shopifyId}
                        stacked="true"
                    />
                )
            })}
        </Gallery>
    )
}

import React from 'react'
import ProductCardWrap from './style'

export default function ProductCard({ children }) {
    return (
        <ProductCardWrap>
            { children }
        </ProductCardWrap>
    )
}

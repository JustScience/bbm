import React from 'react'
import GalleryWrap from './style'

export default function Gallery({children, mini, small, product}) {
    return (
        <GalleryWrap 
            mini={mini}
            small={small}
            product={product}
        >
            { children }
        </GalleryWrap>
    )
}

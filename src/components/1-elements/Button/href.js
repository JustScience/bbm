import React from 'react'
import { HrefWrap } from './style'

export default function Href({ href, download, children }) {
    return (
        <HrefWrap 
            href={href} 
            download={download}
        >
            { children }
        </HrefWrap>
    )
}

import React from 'react'
import color from '../../0-theme/Color.js'

import { NavWrap, NavItem } from './style.js'
// import Cart from '../../3-sections/Cart'

const activeStyle = {
    background: "rgba(0,0,0,0.3)", 
    boxShadow: "0 4px 9px -6px " + color.shadow.base,
}

export default function HeaderNav() {
    return (
        <>
            <NavWrap>
                <NavItem to="https://badbubblemusic.myshopify.com" activeStyle={activeStyle}>Shop</NavItem>
                {/* <NavItem to="/linktree" activeStyle={activeStyle}>Links</NavItem> */}
                {/* <NavItem to="/video" activeStyle={activeStyle}>Videos</NavItem> */}
                {/* <NavItem to="/free" activeStyle={activeStyle}>Freebies</NavItem> */}
                {/* <NavItem to="/contact" activeStyle={activeStyle}>Contact</NavItem> */}
                {/* <Cart /> */}
            </NavWrap>
        </>
    )
}

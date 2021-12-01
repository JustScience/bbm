import React from 'react'
import { Link } from 'gatsby'
import { LogoWrap, LogoIcon, LogoText } from './style.js'
// import icon from '../../images/icon.png'

export default function HeaderLogo() {
    return (
        <Link to="/">
            <LogoWrap>
                <LogoIcon>
                    BB
                    {/* <img src={icon} alt="Just Science LOL Icon" /> */}
                </LogoIcon>
                <LogoText>
                    Bad Bubble Music
                </LogoText>
            </LogoWrap>
        </Link>
    )
}

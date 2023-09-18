import React from 'react'
import { Link } from 'gatsby'
import { LogoWrap, LogoIcon, LogoText } from './style.js'
import icon from '../../../images/bad-bubble-icon.svg'

export default function HeaderLogo() {
    return (
        <Link to="/">
            <LogoWrap>
                <LogoIcon>
                    {/* BB */}
                    <img src={icon} alt="Bad Bubble BB Icon" />
                </LogoIcon>
                <LogoText>
                    BadBubble
                </LogoText>
            </LogoWrap>
        </Link>
    )
}

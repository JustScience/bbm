import React from 'react'
import Contain from '../../1-elements/Contain'
import Icon from '../../1-elements/Icon'
import Gallery from '../Gallery'
import LinkCard from '../../2-blocks/LinkCard'

export default function LinkTree() {
    return (
        <Contain>
            <Gallery small='true'>
                <LinkCard to="https://open.spotify.com/artist/1PkWh9ohzqlUmUhDhSiBrW?si=r0LLam_XR1WS7_nVpX5-9Q">
                    <Icon shape="spotify" color="#1DB954" size="48px" />
                    <span>Listen on Spotify</span>
                </LinkCard>
                <LinkCard to="https://music.apple.com/us/artist/bad-bubble/1603054896">
                    <Icon shape="apple" color="#fc3c44" size="48px" />
                    <span>Listen on Apple</span>
                </LinkCard>
                <LinkCard to="https://twitter.com/badbubblemusic">
                    <Icon shape="twitter" color="#00acee" size="48px" />
                    <span>Follow on Twitter</span>
                </LinkCard>
                <LinkCard to="https://instagram.com/badbubblemusic">
                    <Icon shape="instagram" color="#E1306C" size="48px" />
                    <span>Follow on Instagram</span>
                </LinkCard>
                <LinkCard to="https://www.twitch.tv/badbubblemusic">
                    <Icon shape="twitch" color="#6441a5" size="48px" />
                    <span>Follow on Twitch</span>
                </LinkCard>
                <LinkCard to="https://www.youtube.com/channel/UC_tWDI35xHKnWYmhw2vN8WQ">
                    <Icon shape="youtube" color="#FF0000" size="48px" />
                    <span>Subscribe on YouTube</span>
                </LinkCard>
            </Gallery>
        </Contain>
    )
}

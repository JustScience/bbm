import styled from 'styled-components'
import AudioPlayer from 'react-h5-audio-player'
import color from '../../0-theme/Color'

const AudioPreviewWrap = styled(AudioPlayer)`
    background-color: transparent;
    margin-bottom: 12px;
    padding: 0;

    .rhap_container,
    .rhap_main {
        background: transparent;
        border: none;
        color: white;
        outline: none;
        padding: 0;
    }
    .rhap_current-time,
    .rhap_total-time {
        color: ${color.primary.bright};
        font-size: 0.75em;
    }
    .rhap_current-time {
        margin-right: 4px;
    }
    .rhap_controls-section {
        flex: 1;
        margin-right: 36px;
    }
    .rhap_additional-controls {
        flex: 0;
    }
    .rhap_main-controls-button {
        color: ${color.accent.base};
        margin: 0;
    }
    .rhap_volume-controls {
        justify-content: flex-start;
        margin-left: 8px;
    }
    .rhap_volume-button {
        color: ${color.primary.bright};
        display: block;
        margin-right: 6px;
    }
    .rhap_volume-bar-area {
        width: 24px;
    }
    .rhap_volume-bar{
        background-color: ${color.primary.bright};
    }
    .rhap_volume-indicator {
        background-color: ${color.accent.base};
        height: 8px;
        width: 8px;
        top: -2px;
        margin-left: -2px;
    }
    .rhap_additional-controls {
        display: none;
    }
    .rhap_rewind-button,
    .rhap_forward-button {
        display:none;
    }
    .rhap_progress-bar {background-color: rgba(255,255,255,0.15)}
    .rhap_progress-filled {background-color:${color.accent.base};}
    .rhap_download-progress {background-color: ${color.primary.bright};}
    .rhap_progress-indicator {
        background-color: ${color.accent.base};
        height: 12px;
        width: 12px;
        margin-left: -2px;
        top: -4px;
    }
`

export default AudioPreviewWrap
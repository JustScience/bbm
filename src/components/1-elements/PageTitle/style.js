import styled from 'styled-components'
import color from '../../0-theme/Color'

const PageTitleWrap = styled.div`
    padding: 24px;

    h1,p {
        line-height:120%;
        margin: 0 auto;
        margin-bottom: 8px;
        padding: 0;
        text-align: left;
    }
    h1 {
        color: ${color.primary.light};
        font-size: 1.5em;
    }
    p {
        color: rgba(255,255,255,0.6);
        font-size: 0.9em;
        font-weight:300;
        max-width:480px;
    }
`

export default PageTitleWrap
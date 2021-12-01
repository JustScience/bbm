import styled, { css } from "styled-components";
import { GatsbyImage as StyledImage } from 'gatsby-plugin-image'

const CardWrap = styled.div`
    align-items: center;
    background-color: rgba(255,255,255,0.15);
    border-radius: ${props => props.Rounded ? '8px' : '0'};
    color: white;
    display: flex;
    flex-direction: ${props => props.Landscape ? 'row' : 'column'};
    justify-content: ${props => 
        props.Landscape ? 'space-between' : 
        props.stacked ? 'center' : 
        'flex-start'};
    padding: ${props => props.Padded ? '16px' : '0'};
    transition: background-color 240ms ease-in-out;
    width: 100%;

    h4,p {margin: 0;}

    &:hover {
        background-color: rgba(255,255,255,0.2);
    }
`
const CardPicture = styled.div`
    height: 120px;
    max-width: 200px;
`
const CardImage = styled(StyledImage)`
    height: 100%;
    width: 100%;
`
const CardHead = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
const CardBody = styled.div`
    border: ${props => props.stacked ? '2px solid red' : 'none'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: ${props => props.stacked ? 'absolute' : 'relative'};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;


    /* ${props => props.stacked && css`

        align-items: center;
        background-color: rgba(0,0,0,0);
        backdrop-filter: none;
        display: flex;
        justify-content: space-between;
        padding: 24px;
        transition: all 240ms ease-in-out;

        &:hover {
            background-color: rgba(0,0,0,0.75);
            backdrop-filter: blur(5px);

            h3,p {
                color: rgba(255,255,255,0.6);
                span {color: rgba(255,150,0,1);}
            }
        }
    `}; */

`
const CardTitleWrap = styled.div`
    align-items: ${props => props.Landscape ? 'flex-start' : 'center'};
    display: flex;
    flex-direction: ${props => props.Landscape ? 'column' : 'row'};
    justify-content: ${props => props.Landscape ? 'flex-start' : 'space-between'};
    /* text-align: ${props => props.Landscape ? 'right' : 'left'}; */
    width: 100%;
`
const CardTitle = styled.span`
    font-size: 1.2em;
    font-weight: 600;
`
const CardSubtitle = styled.span`
    color: rgba(255,255,255,0.6);
    font-size: 0.9em;
    font-weight: 400;
`
const CardText = styled.p`
    color: rgba(255,255,255,0.48);
    font-size: 0.75em;
    font-weight: 300;
    height: 36px;
    padding-left: 12px;
    overflow: hidden;
`
const CardLabel = styled.h3`
    color: rgba(255,180,0,0.48);
    font-size: 0.75em;
    font-weight: 300;
    margin: 0;
    margin-top: 12px;
` 

export { CardWrap, CardHead, CardPicture, CardImage, CardBody, CardTitleWrap, CardTitle, CardSubtitle, CardText, CardLabel }
import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { 
    CardWrap, 
    CardHead, 
    CardPicture, 
    CardImage, 
    CardBody, 
    CardTitleWrap, 
    CardTitle, 
    CardSubtitle, 
    CardLabel } from './style'

export default function Card({ 
    children, 
    to, 
    image, 
    title, 
    subtitle, 
    footer, 
    Padded, 
    Rounded, 
    Landscape, 
    stacked, 
}) {
    return (
        <>
            { to ? (
                <Link to={to} >
                    <CardWrap 
                        Padded={Padded}
                        Rounded={Rounded}
                        Landscape={Landscape}
                        stacked={stacked}
                    >
                        {image && (
                            <CardHead>
                                <CardPicture>
                                    <CardImage image={getImage(image)} alt={title} />
                                </CardPicture>
                            </CardHead>
                        )}
                        <CardBody>
                            <CardTitleWrap>
                                <CardTitle>{title}</CardTitle>
                                <CardSubtitle>{subtitle}</CardSubtitle>
                            </CardTitleWrap>
                            <div>
                                { children }
                            </div>
                            {footer && (
                                <div>
                                    <CardLabel>{footer}</CardLabel>
                                </div>
                            )}
                        </CardBody>                        
                    </CardWrap>
                </Link>
            ) : (
                <CardWrap 
                    Padded={Padded}
                    Rounded={Rounded}
                    Landscape={Landscape}
                    stacked={stacked}
                >
                    {image && (
                        <CardHead>
                            <CardPicture>
                                <CardImage image={getImage(image)} alt={title} />
                            </CardPicture>
                        </CardHead>
                    )}
                    <CardBody>
                        <CardTitleWrap>
                            <CardTitle>{title}</CardTitle>
                            <CardSubtitle>{subtitle}</CardSubtitle>
                        </CardTitleWrap>
                        <div>
                            { children }
                        </div>
                        {footer && (
                            <div>
                                <CardLabel>{footer}</CardLabel>
                            </div>
                        )}
                    </CardBody>
                    
                </CardWrap>
            )}
        </>
    )
}

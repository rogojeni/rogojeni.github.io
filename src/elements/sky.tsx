import React from 'react'
import {ParallaxLayer} from 'react-spring/renderprops-addons.cjs'
import {css, useColorMode} from 'theme-ui'
import backgroundDark from '../images/stars.png'
import backgroundLight from '../images/balta.jpg'

type SkyProps = {
    speed: number
    offset: number
    children?: React.ReactNode
    bg?: string
    fill?: string
    clipPath?: string
    className?: string
    factor?: number
}

const Sky = ({speed, offset, factor, bg, fill, clipPath, children, className}: SkyProps) => {
    const [colorMode, setColorMode] = useColorMode()
    return (<ParallaxLayer
            css={css({
                position: `absolute`,
                width: `full`,
                height: `full`,
                backgroundImage: `url(${colorMode == 'dark' ? backgroundDark : backgroundLight})`,
                backgroundColor: `black`,
                '#contact-wave': {
                    color: fill,
                    fill: `currentColor`,
                },
                clipPath,
            })}
            speed={speed}
            offset={offset}
            factor={factor || 1}
            className={className}
        >
            {children}
        </ParallaxLayer>
    )
}

export default Sky

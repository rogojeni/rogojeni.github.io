import {css, keyframes} from '@emotion/core'
import styled from '@emotion/styled';

const moveTwinkBack = keyframes`
    from {
        background-position:0 0;
    }
    to {
        background-position:-10000px 5000px
    }
`

const moveCloudsBack = keyframes`
    from {background-position:0 0;}
    to {background-position:10000px 0;}
`

const all = css`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
`

export const Stars = styled.div`
    ${all}
    background:#000 url(../images/stars.png) repeat top center;
    z-index:0;
`

export const twinkling = css`
    background:transparent url(images/twinkling.png) repeat top center;
    z-index:1;

    -moz-animation:move-twink-back 200s linear infinite;
    -ms-animation:move-twink-back 200s linear infinite;
    -o-animation:move-twink-back 200s linear infinite;
    -webkit-animation:move-twink-back 200s linear infinite;
    animation:move-twink-back 200s linear infinite;
`

export const clouds = css`
    background:transparent url(images/clouds.png) repeat top center;
    z-index:3;

    -moz-animation:move-clouds-back 200s linear infinite;
    -ms-animation:move-clouds-back 200s linear infinite;
    -o-animation:move-clouds-back 200s linear infinite;
    -webkit-animation:move-clouds-back 200s linear infinite;
    animation:move-clouds-back 200s linear infinite;
`

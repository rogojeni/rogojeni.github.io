/** @jsx jsx */
import {jsx} from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import {UpDown, UpDownWide, waveAnimation} from "../styles/animations"
// @ts-ignore
import ContactMDX from "../sections/contact"
import Footer from "./footer"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({offset}: { offset: number }) => (
    <div>
        <Divider fill="divider" speed={0.2} offset={offset}>
            <div sx={{position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)`}}>
                <InnerWave sx={{position: `relative`, height: `full`, svg: {width: `100%`, height: `40vh`}}}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05"
                         preserveAspectRatio="none">
                        <path>
                            <animate
                                attributeName="d"
                                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                                repeatCount="indefinite"
                                dur="30s"
                            />
                        </path>
                    </svg>
                </InnerWave>
            </div>
        </Divider>
        <Content speed={0.4} offset={offset}>
            <Inner>
                <ContactMDX/>
            </Inner>
            <Footer/>
        </Content>
        <Divider speed={0.1} offset={offset}>
            {/*<UpDown>*/}
            {/*  <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />*/}
            {/*  <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />*/}
            {/*</UpDown>*/}
            {/*<UpDownWide>*/}
            {/*  <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />*/}
            {/*  <SVG icon="circle" width={6} color="icon_brightest" left="85%" top="15%" />*/}
            {/*  <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />*/}
            {/*</UpDownWide>*/}
            {/*<SVG icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />*/}
            {/*<SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />*/}
            {/*<SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />*/}
            {/*<SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />*/}
        </Divider>
        {/*<iframe*/}
        {/*  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11090.337148192246!2d28.08066848980204!3d45.979562015764955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b668f2f4b88847%3A0xe21801a74a471c6b!2sRogojeni%2C%20Moldova!5e0!3m2!1sen!2sro!4v1589814803974!5m2!1sen!2sro"*/}
        {/*  width="600" height="450" frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false"*/}
        {/*  tabIndex="0"></iframe>*/}
    </div>
)

export default Contact

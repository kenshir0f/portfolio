import * as React from 'react'
import { HeadingTitle } from '../../atoms/Txt'
import Header from '../../organisms/Header'
import MainContainer from '../../organisms/MainContainer'

const About = (props: any) => (
  <MainContainer>
    <Header {...props} />
    <HeadingTitle>ただいま準備中です... 🙇</HeadingTitle>
  </MainContainer>
)

export default About

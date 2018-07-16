import * as React from 'react'
import AboutContent from '../../organisms/AboutContent'
import MainContainer from '../../organisms/MainContainer'

const About = (props: any) => (
  <MainContainer {...props}>
    <AboutContent />
  </MainContainer>
)

export default About

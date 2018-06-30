import * as React from 'react'
import { MyName, HeadingTitle } from '../../atoms/Txt'
import Header from '../../organisms/Header'

const About = (props: any) =>
  <main>
    <Header {...props} />
    <HeadingTitle>ただいま準備中です... 🙇</HeadingTitle>
  </main>

export default About

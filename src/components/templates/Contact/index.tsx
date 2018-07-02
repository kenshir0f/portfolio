import * as React from 'react'
import * as ReactGA from 'react-ga'
import ContactForm from '../../organisms/ContactForm'
import { HeadingTitle, Caption } from '../../atoms/Txt'
import MainContainer from '../../organisms/MainContainer'

ReactGA.initialize('UA-81128467-1')

const Contact = (props: any) => (
  <MainContainer {...props}>
    <HeadingTitle>お問い合わせ</HeadingTitle>
    <ContactForm />
    <Caption>現在お仕事の以来は受け付けておりません。感想やフィードバックをいただけると幸いでございます。</Caption>
  </MainContainer>
)

export default Contact

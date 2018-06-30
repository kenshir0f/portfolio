import * as React from 'react'
import ContactForm from '../../organisms/ContactForm'
import Header from '../../organisms/Header'
import { HeadingTitle, Caption } from '../../atoms/Txt'

const Contact = (props: any) =>
  <main>
    <Header {...props} />
    <HeadingTitle>お問い合わせ</HeadingTitle>
    <ContactForm />
    <Caption>現在お仕事の以来は受け付けておりません。感想やフィードバックをいただけると幸いでございます。</Caption>
  </main>

export default Contact

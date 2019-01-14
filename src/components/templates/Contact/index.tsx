import * as React from 'react'
import Header from '../../organisms/Header'
import { HeadingTitle, Caption } from '../../atoms/Txt'
import ContactForm from '../../organisms/ContactForm'

const Fragment = React.Fragment

export default class ContactContent extends React.Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <HeadingTitle>お問い合わせ</HeadingTitle>
        <ContactForm />
        <Caption>現在お仕事の以来は受け付けておりません。感想やフィードバックをいただけると幸いでございます。</Caption>
      </Fragment>
    )
  }
}

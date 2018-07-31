import * as React from 'react'
import Portfolio from '../components/templates/Index'
import Head from '../components/utils/Head'
import { HeadingTitle, Caption } from '../components/atoms/Txt'
import ContactForm from '../components/organisms/ContactForm'

interface Props {
  url: {
    pathname: string
  },
  children: any
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Portfolio {...this.props}>
        <Head
          title={'Contact / kenshir0f.com'}
          description={'Contact / kenshir0f.com'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com'}
        />
        <HeadingTitle>お問い合わせ</HeadingTitle>
        <ContactForm />
        <Caption>現在お仕事の以来は受け付けておりません。感想やフィードバックをいただけると幸いでございます。</Caption>
      </Portfolio>
    )
  }
}

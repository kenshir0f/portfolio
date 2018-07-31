import * as React from 'react'
import Portfolio from '../components/templates/Index'
import Head from '../components/utils/Head'
import AboutContent from '../components/organisms/AboutContent'

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
          title={'About / kenshir0f.com'}
          description={'About / kenshir0f.com'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com/about'}
        />
        <AboutContent />
      </Portfolio>
    )
  }
}

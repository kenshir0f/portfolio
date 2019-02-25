import * as React from 'react'
import Head from '../components/utils/Head'
import AboutContent from '../components/templates/About'
import App from '../components/templates/App'

export default class Index extends React.Component<any, {}> {
  render() {
    return (
      <App {...this.props}>
        <Head
          title={'About / kenshir0f.com'}
          description={'About / kenshir0f.com'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.png'}
          url={'https://kenshir0f.com/about'}
        />
        <AboutContent />
      </App>
    )
  }
}

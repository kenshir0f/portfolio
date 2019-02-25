import * as React from 'react'
import Head from '../components/utils/Head'
import App from '../components/templates/App'
import WorksContent from '../components/templates/Works'

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
        <WorksContent />
      </App>
    )
  }
}

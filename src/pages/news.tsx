import * as React from 'react'
import Head from '../components/utils/Head'
import NewsContent from '../components/templates/News'
import App from '../components/templates/App'

export default class Index extends React.Component<any, {}> {
  render() {
    return (
      <App {...this.props}>
        <Head
          title={'News / kenshir0f.com'}
          description={'News / kenshir0f.com'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com/news'}
        />
        <NewsContent />
      </App>
    )
  }
}

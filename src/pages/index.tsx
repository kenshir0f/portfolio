import * as React from 'react'
import App from '../components/templates/App'
import Head from '../components/utils/Head'
import IndexContent from '../components/templates/Index'

export default class Index extends React.Component<any, {}> {
  render() {
    return (
      <App { ...this.props }>
        <Head
          title={ 'kenshir0f.com' }
          description={ 'ふじけんのページ' }
          keyword={ 'kenshir0f' }
          image={ 'https://kenshir0f.com/static/images/ogp.jpg' }
          url={ 'https://kenshir0f.com' }
        />
        <IndexContent />
      </App>
    )
  }
}

import * as React from 'react'
import Head from '../components/utils/Head'
import ContactContent from '../components/templates/Contact'
import App from '../components/templates/App'

export default class Index extends React.Component<any, {}> {
  render() {
    return (
      <App { ...this.props }>
        <Head
          title={ 'Contact / kenshir0f.com' }
          description={ 'Contact / kenshir0f.com' }
          keyword={ 'kenshir0f' }
          image={ 'https://kenshir0f.com/static/images/ogp.png' }
          url={ 'https://kenshir0f.com/contact' }
        />
        <ContactContent />
      </App>
    )
  }
}

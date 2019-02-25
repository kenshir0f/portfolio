import * as React from 'react'
import Head from '../components/utils/Head'
import App from '../components/templates/App'
import ErrorContent from '../components/templates/Error'

interface Err {
  res: any,
  err: any
}

export default class Error extends React.Component<any, {}> {
  static getInitialProps({ res, err }: Err) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <App {...this.props} >
        <Head
          title={'404 / kenshir0f.com'}
          description={'404 / kenshir0f.com'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.png'}
          url={'https://kenshir0f.com'}
        />
        <ErrorContent />
      </App >
    )
  }
}

import * as React from 'react'
import Head from '../components/utils/Head'
import ErrorPage from '../components/templates/Error'
import { Error404 } from '../components/organisms/Error'

interface Err {
  res: any,
  err: any
}

export default class Error extends React.Component {
  static getInitialProps({ res, err }: Err) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <ErrorPage >
        <Head
          title={'404 / kenshir0f.com'}
          description={'404 / kenshir0f.com'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com'}
        />
        <Error404 />
      </ErrorPage >
    )
  }
}

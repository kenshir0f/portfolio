import * as React from 'react'
import { Error404 } from '../components/organisms/Error'
import Head from '../components/utils/Head'
import ErrorPage from '../components/templates/Error'

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
          title={'404 / ふじけんのポートフォリオ'}
          description={'404 / ふじけんのポートフォリオ'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com/about'}
        />
        <Error404 />
      </ErrorPage >
    )
  }
}
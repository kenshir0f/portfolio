import * as React from 'react'
import Header from '../components/organisms/Header'
import { Error404 } from '../components/organisms/Error'
import Portfolio from '../components/templates/Portfolio'
import Head from '../components/utils/Head'

interface Err {
  res: any,
  err: any
}

interface Props {
  children: any
}

export default class Error extends React.Component<Props>  {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Portfolio >
        <Head
          title={'Komerco出品用アプリ Komerco Creator'}
          description={'料理が楽しくなる作品をKomercoに出品してみませんか？'}
          keyword={'KomercoCreator'}
          image={'https://komer.co/static/images/ogp.jpg'}
          url={'https://komer.co/creator'}
        />
        <Header />
        <Error404 />
      </Portfolio >
    )
  }
}
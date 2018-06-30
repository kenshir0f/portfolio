import * as React from 'react'
import Portfolio from '../components/templates/Index'
import Head from '../components/utils/Head'

export default class Index extends React.Component {
  render() {
    return (
      <Portfolio {...this.props}>
        <Head
          title={'kenshir0f.com'}
          description={'ふじけんのページ'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com'}
        />
      </Portfolio>
    )
  }
}
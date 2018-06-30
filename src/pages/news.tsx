import * as React from 'react'
import News from '../components/templates/News'
import Head from '../components/utils/Head'

export default class Index extends React.Component {
  render() {
    return (
      <News {...this.props}>
        <Head
          title={'kenshir0f.com'}
          description={'ふじけんニュース'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com/news'}
        />
      </News>
    )
  }
}
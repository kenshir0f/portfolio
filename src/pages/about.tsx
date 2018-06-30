import * as React from 'react'
import About from '../components/templates/About'
import Head from '../components/utils/Head'

export default class Index extends React.Component {
  render() {
    return (
      <About {...this.props}>
        <Head
          title={'kenshir0f.com'}
          description={'ふじけんニュース'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com/about'}
        />
      </About>
    )
  }
}
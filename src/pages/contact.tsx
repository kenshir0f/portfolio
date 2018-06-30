import * as React from 'react'
import Contact from '../components/templates/Contact'
import ProfileImg from '../components/molecules/ProfileImg'
import Head from '../components/utils/Head'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Contact {...this.props}>
        <Head
          title={'kenshir0f.com'}
          description={'ふじけんにフィードバック'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com/contact'}
        />
      </Contact>
    )
  }
}
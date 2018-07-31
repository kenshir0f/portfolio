import * as React from 'react'
import Portfolio from '../components/templates/Index'
import Head from '../components/utils/Head'
import ProfileImg from '../components/molecules/ProfileImg'
import { MyName, WipCaption, Copyright } from '../components/atoms/Txt'
import SnsList from '../components/organisms/SnsList'

interface Props {
  url: {
    pathname: string
  },
  children: any
}

export default class Index extends React.Component<Props> {
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
        <ProfileImg />
        <MyName />
        <SnsList />
        <WipCaption />
        <Copyright />
      </Portfolio>
    )
  }
}

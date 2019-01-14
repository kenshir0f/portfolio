import * as React from 'react'
import Header from '../../organisms/Header'
import ProfileImg from '../../molecules/ProfileImg'
import { MyName, WipCaption, Copyright } from '../../atoms/Txt'
import SnsList from '../../organisms/SnsList'

const Fragment = React.Fragment

export default class IndexContent extends React.Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <ProfileImg />
        <MyName />
        <SnsList />
        <WipCaption />
        <Copyright />
      </Fragment>
    )
  }
}

import * as React from 'react'
import ProfileImg from '../../molecules/ProfileImg'
import { MyName, Copyright, Content20190508, Content20190417, Content20190305, Content20190227, Content20190101, Content20181210, Content20181206, Content20180822, Content20180719, Content20180713 } from '../../atoms/Txt'
import SnsList from '../../organisms/SnsList'

const Fragment = React.Fragment

export default class IndexContent extends React.Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <ProfileImg />
        <MyName />
        <SnsList />
        <Content20190508 />
        <Content20190417 />
        <Content20190305 />
        <Content20190227 />
        <Content20190101 />
        <Content20181210 />
        <Content20181206 />
        <Content20180822 />
        <Content20180719 />
        <Content20180713 />
        <Copyright />
      </Fragment>
    )
  }
}

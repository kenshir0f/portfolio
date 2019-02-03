import * as React from 'react'
import { AboutSpeaker } from '../components/atoms/Txt'

export default class Index extends React.Component<any, {}> {
  render() {
    return (
      <div style={ { margin: '0 auto', width: '330px' } }>
        <AboutSpeaker>Apr. 2017 | 4,008,000JPY +α(second job)</AboutSpeaker>
        <AboutSpeaker>Feb. 2018 | 4,500,000JPY +α(second job)</AboutSpeaker>
        <AboutSpeaker>Jun. 2018 | 4,620,000JPY</AboutSpeaker>
        {/* <AboutSpeaker>Feb. 2019 | 5,505,240JPY</AboutSpeaker> */ }
      </div>
    )
  }
}

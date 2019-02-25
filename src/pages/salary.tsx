import * as React from 'react'
import { AboutSpeaker } from '../components/atoms/Txt'
import App from '../components/templates/App'
import Head from '../components/utils/Head'

export default class Index extends React.Component<any, {}> {
  render() {
    return (
      <App {...this.props}>
        <Head
          title={ '' }
          description={ '' }
          keyword={ 'kenshir0f' }
          image={ '' }
          url={ 'https://kenshir0f.com' }
        />
        <div style={ { margin: '0 auto', width: '330px', fontSize: '16px' } }>
          <AboutSpeaker>Apr. 2017 | 4,008,000JPY</AboutSpeaker>
          <AboutSpeaker>Feb. 2018 | 4,500,000JPY</AboutSpeaker>
          <AboutSpeaker>Jun. 2018 | 4,620,000JPY</AboutSpeaker>
          <AboutSpeaker>Feb. 2019 | 5,505,240JPY</AboutSpeaker>
        </div>
      </App>
    )
  }
}

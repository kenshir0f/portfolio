import * as React from 'react'
import * as ReactGA from 'react-ga'
import Header from '../../organisms/Header'

const googleAnalyticsID = process.env.REACT_GA_ID || ''

export default class App extends React.Component<any, {}> {
  render() {
    ReactGA.initialize(googleAnalyticsID)
    return (
      <main>
        <Header { ...this.props } />
        { this.props.children }
      </main>
    )
  }
}
